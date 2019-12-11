using FluxCms.Model;
using FluxCms.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FluxCms.Services
{

    public interface IAuthService
    {
        Task<bool> Login(Users user);

    }



    public class AuthService : IAuthService
    {
        private readonly FluxCmsContext _db;

        public AuthService(FluxCmsContext db)
        {
            _db = db;
        }


        public async Task<bool> Login(Users user)
        {
            Users userByLogin=_db.Users.Where(a=>a.Username==user.Username).FirstOrDefault();


            string[] parts = userByLogin.Password.Split(new char[] { ':' });

            byte[] saltBytes = Convert.FromBase64String(parts[2]);
            byte[] derived;

            int iterations = Convert.ToInt32(parts[0]);

            using (var pbkdf2 = new Rfc2898DeriveBytes(
                user.Password,
                saltBytes,
                iterations,
                HashAlgorithmName.SHA512))
            {
                derived = pbkdf2.GetBytes(64);
            }

            string new_hash = string.Format("{0}:{1}:{2}", 2048, Convert.ToBase64String(derived), Convert.ToBase64String(saltBytes));

            if (userByLogin.Password == new_hash)
                return true;
            else
                return false;



        }
    }
}
