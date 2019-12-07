using System;
using System.Collections.Generic;

namespace FluxCms.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public byte[] Avatar { get; set; }
        public string AvatarFilename { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
    }
}
