using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class BorrowController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public BorrowController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        } 

        //GET: api/Borrow
        [HttpGet]
        public IActionResult GetBorrow()
        {
            return Ok(_dbContext.borrows.ToList());
        }
        
        //GET: api/Borrow/1
        [HttpGet("{id}")]
        public IActionResult GetBorrow(int id)
        {
            var borrow=_dbContext.borrows.FirstOrDefault(borrow => borrow.BorrowID == id);
            if (borrow==null)
            {
                return NotFound();
            }
            return Ok(borrow);

        }

        //Adding new Borrow
        [HttpPost]
        public IActionResult PostBorrow([FromBody] Borrow borrow)
        {
            _dbContext.borrows.Add(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }

        //Updating a existing user
        [HttpPut("{id}")]
        public IActionResult PutBorrow(int id, [FromBody] Borrow borrow)
        {
            var borrowOld=_dbContext.borrows.FirstOrDefault(borrow => borrow.BorrowID == id);
            if (borrowOld == null)
            {
                return NotFound();
            }
            borrowOld.BookID=borrow.BookID;
            borrowOld.UserID=borrow.UserID;
            borrowOld.BorrowedDate=borrow.BorrowedDate;
            borrowOld.BorrowBookCount=borrow.BorrowBookCount;
            borrowOld.Status=borrow.Status;
            borrowOld.PaidFineAmount=borrow.PaidFineAmount;
            
            _dbContext.SaveChanges();
            return Ok();
        }


        //Deleting an existing borrow
        [HttpDelete("{id}")]
        public IActionResult DeleteBorrow(int id)
        {
            var borrow = _dbContext.borrows.FirstOrDefault(borrow => borrow.BorrowID== id);
            if (borrow ==null)
            {
                return NotFound();
            }
            _dbContext.borrows.Remove(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }








    }
}