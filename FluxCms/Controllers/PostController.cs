using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FluxCms.Models;
using FluxCms.Services;
using FluxCms.VM;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
namespace FluxCms.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostController : ControllerBase
    {
        protected readonly IPostService _postService;
        public PostController(IPostService postService)
        {
            _postService = postService;
        }
        [HttpPost("[action]")]
        [Route("AddPost")]
        public async Task<IActionResult> AddComment([FromBody]Comments comment)
        {
           Comments newcomment = new Comments();

            newcomment.Body = comment.Body;
            newcomment.Pageid = comment.Pageid;
            newcomment.CreatedBy = comment.CreatedBy;
            newcomment.CreatedAt = newcomment.CreatedAt;
            newcomment.IsMarkedAsSpam = false;

            var result = await _postService.AddNewComment(newcomment);
            return Ok(1);
        }
        [HttpGet]
        [Route("[action]/{id:int}")]
        public async Task<IActionResult> BanComment(int commentId)
        {
           Comments commentForBan = await _postService.GetCommentById(commentId);
            var res = await _postService.BanComment(commentForBan);
            return Ok(1);
        }        
        [HttpPost("[action]"), DisableRequestSizeLimit]
        [Route("AddPost")]
        public async Task<IActionResult> AddPost([FromBody]PostsVM post)
        {
           Posts newPost = new Posts();

            newPost.Body = post.Body;
            newPost.Title = post.Title;
            newPost.Tags = post.Tags;
            newPost.CreatedAt = DateTime.Now;
            newPost.CreatedBy = Convert.ToInt32(HttpContext.Session.GetInt32("userid"));

            //using (var ms = new MemoryStream())
            //{
            //    post.Thumbnail.CopyTo(ms);
            //    var fileBytes = ms.ToArray();
            //    string s = Convert.ToBase64String(fileBytes);
            //    newPost.Thumbnail = fileBytes;
            //}


            var result = await _postService.AddNewPost(newPost);
            return Ok(1);
        }
        [HttpGet]
        [Route("GetPostsList")]
        public async Task<IActionResult> GetPostsList()
        {
            List<Posts> lp = new List<Posts>();
            lp = await _postService.GetPostList();
            return Ok(lp);
        }        
        [HttpGet]
        [Route("GetCommentsForPost/{id:int}")]
        public async Task<IActionResult> GetCommentsForPost(int postId)
        {
            List<Comments> lc = new List<Comments>();
            lc = await _postService.GetCommentsListForPost(postId);
            return Ok(lc);
        }        
        [HttpGet]
        [Route("GetCommentsForPost")]
        public async Task<IActionResult> GetCommentsList()
        {
            List<Comments> lc = new List<Comments>();
            lc = await _postService.GetCommentsList();
            return Ok(lc);
        }
        [HttpGet]
        [Route("[action]/{id:int}")]
        public async Task<IActionResult> GetPost(int id)
        {
            Posts lp = new Posts();
            lp = await _postService.GetPostById(id);
            return Ok(lp);
        }
    }
}