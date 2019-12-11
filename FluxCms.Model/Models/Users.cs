﻿using System;
using System.Collections.Generic;
using System.Text;

namespace FluxCms.Model.Models
{
    public class Users
    {
        public int Id { get; set; }
        public byte[] Avatar { get; set; }
        public string AvatarFilename { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Authority { get; set; }
        
    }
}
