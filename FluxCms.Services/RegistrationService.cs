using FluxCms.Model;
using FluxCms.Model.Models;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FluxCms.Services
{
    public interface IRegistrationService 
    {
        Task<bool> RegisterUserAsync(Users user);

    }

    public class RegistrationService:IRegistrationService
    {
        private readonly FluxCmsContext _db;

        public RegistrationService(FluxCmsContext db)
        {
            _db = db;
        }
        public async Task<bool> RegisterUserAsync(Users user)
        {

            var newUser = user;
            //set password 
            var c = new RNGCryptoServiceProvider();
            byte[] salt = new byte[128];
            byte[] passResult;
            c.GetBytes(salt);
           // Convert.ToBase64String(salt);
           using(var hash=new Rfc2898DeriveBytes(
               user.Password,
               salt,
               2048,
               HashAlgorithmName.SHA512))
            {
                passResult = hash.GetBytes(64);
            }
            user.Password = string.Format("{0}:{1}:{2}", 2048, Convert.ToBase64String(passResult), Convert.ToBase64String(salt));





            await _db.Users.AddAsync(newUser);
            await _db.SaveChangesAsync();
            return true;

        }
    }
}
