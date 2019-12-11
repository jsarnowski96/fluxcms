using System;
using System.Collections.Generic;

namespace FluxCms.Models
{
    public partial class Posts
    {
        public int Id { get; set; }
        public byte[] Thumbnail { get; set; }
        public string ThumbnailFilename { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Tags { get; set; }
        public string Uri { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int CreatedBy { get; set; }
        public int UpdatedBy { get; set; }
    }
}
