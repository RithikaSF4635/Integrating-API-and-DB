using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }


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
            userOld.UserName=user.UserName;
            userOld.Gender=user.Gender;
            userOld.Department=user.Department;
            userOld.PhoneNumber=user.PhoneNumber;
            userOld.Email=user.Email;
            userOld.Password=user.Password;
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