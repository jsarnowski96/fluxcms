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
    }
}