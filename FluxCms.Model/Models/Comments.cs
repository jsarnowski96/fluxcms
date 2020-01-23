using System;
using System.Collections.Generic;

namespace FluxCms.Models
{
    public partial class Comments
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public bool IsMarkedAsSpam { get; set; }
        public string Uri { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public int Pageid { get; set; }
    }
}
