
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
        Task<bool> AddNewPost(Posts newPost);
    }
    public class PostService : IPostService
    {
        private readonly FluxCmsContext _db;

        public PostService(FluxCmsContext db)
        {
            _db = db;
        }

        public async Task<List<Posts>> GetPostList()
        {

            var postsList = new List<Posts>();

            postsList = await _db.Posts.OrderBy(d=>d.CreatedAt).ToListAsync();

            return postsList;
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
    }
}
