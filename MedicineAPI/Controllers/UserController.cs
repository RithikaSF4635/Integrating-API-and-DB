using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MedicineAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase{
        private readonly ApplicationDBContext _dbContext;
        public UserController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        // private static List<User> _User=new List<User>
        // {
        //     //Add the user details
        //     new User {UserID=1,Email="xyz@gmail.com",Password="12345",ConfirmPassword="12345",PhoneNumber="9876543218",UserBalance=150},
        //     new User {UserID=2,Email="abc@gmail.com",Password="12333",ConfirmPassword="12333",PhoneNumber="9876543111",UserBalance=250},
        //     new User {UserID=3,Email="lmn@gmail.com",Password="11345",ConfirmPassword="11345",PhoneNumber="8886543218",UserBalance=100}
        // };

        //GET: api/User
        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(_dbContext.users.ToList());
        }
        
        //GET: api/User/1
        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user=_dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (user==null)
            {
                return NotFound();
            }
            return Ok(user);

        }
        
        //Adding new User
        [HttpPost]
        public IActionResult PostUser([FromBody] UserInfo user)
        {
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        //Updating a existing user
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, [FromBody] UserInfo user)
        {
            var userOld=_dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (userOld == null)
            {
                return NotFound();
            }
            userOld.Email=user.Email;
            userOld.Password=user.Password;
            userOld.ConfirmPassword=user.ConfirmPassword;
            userOld.PhoneNumber=user.PhoneNumber;
            userOld.UserBalance=user.UserBalance;
            _dbContext.SaveChanges();
            return Ok();
        }

        //Deleting an existing user
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (user ==null)
            {
                return NotFound();
            }
           _dbContext.users.Remove(user);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}