
using FluxCms.Model;
using FluxCms.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FluxCms.Services
{
    public interface IPostService
    {
        Task<List<Posts>> GetPostList();
        Task<bool> BanComment(Comments commentForBan);
        Task<List<Comments>> GetCommentsListForPost(int postId);
        Task<Posts> GetPostById(int id);
        Task<Comments> GetCommentById(int id);
        Task<bool> AddNewPost(Posts newPost);
        Task<bool> AddNewComment(Comments comment);
    }
    public class PostService : IPostService
    {
        private readonly FluxCmsContext _db;

        public PostService(FluxCmsContext db)
        {
            _db = db;
        }

        public async Task<List<Comments>> GetCommentsListForPost(int postId)
        {

            var cList = new List<Comments>();

            cList = await _db.Comments.Where(p=>p.Pageid==postId).OrderBy(d=>d.CreatedAt).ToListAsync();

            return cList;
        }        public async Task<List<Posts>> GetPostList()
        {

            var postsList = new List<Posts>();

            postsList = await _db.Posts.OrderBy(d=>d.CreatedAt).ToListAsync();

            return postsList;
        }
        public async Task<Posts> GetPostById(int id)
        {

            var postsList = new Posts();

            postsList = await _db.Posts.Where(a=>a.Id==id).FirstOrDefaultAsync();

            return postsList;
        }        
        public async Task<Comments> GetCommentById(int id)
        {

            var comment = new Comments();

            comment = await _db.Comments.Where(a=>a.Id==id).FirstOrDefaultAsync();

            return comment;
        }
        public async Task<bool> AddNewPost(Posts newPost)
        {
            try
            {

                await _db.Posts.AddAsync(newPost);
                await _db.SaveChangesAsync();
                return true;
            }
            catch(Exception ex)
            {
               
                return false;
            }

        }     
        public async Task<bool> BanComment(Comments comment)
        {
            try
            {

                comment.IsMarkedAsSpam = !comment.IsMarkedAsSpam;
                await _db.SaveChangesAsync();
                return true;
            }
            catch(Exception ex)
            {
               
                return false;
            }

        }        
        public async Task<bool> AddNewComment(Comments comment)
        {
            try
            {

                await _db.Comments.AddAsync(comment);
                await _db.SaveChangesAsync();
                return true;
            }
            catch(Exception ex)
            {
               
                return false;
            }

        }
    }
}
