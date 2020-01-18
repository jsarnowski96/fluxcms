using FluxCms.Model;
using FluxCms.Models;
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
    }
}
