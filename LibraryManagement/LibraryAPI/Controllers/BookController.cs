using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public BookController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }


        //GET: api/Book
        [HttpGet]
        public IActionResult GetBook()
        {
            return Ok(_dbContext.books.ToList());
        }

        //GET: api/Borrow/1
        [HttpGet("{id}")]
        public IActionResult GetBook(int id)
        {
            var book=_dbContext.books.FirstOrDefault(book => book.BookID == id);
            if (book==null)
            {
                return NotFound();
            }
            return Ok(book);

        }

        //Adding new Book
        [HttpPost]
        public IActionResult PostBook([FromBody] Book book)
        {
            _dbContext.books.Add(book);
            _dbContext.SaveChanges();
            return Ok();
        }

        //Updating a existing book
        [HttpPut("{id}")]
        public IActionResult PutBook(int id, [FromBody] Book book)
        {
            var bookOld=_dbContext.books.FirstOrDefault(book => book.BookID == id);
            if (bookOld == null)
            {
                return NotFound();
            }
            bookOld.BookID=book.BookID;
            bookOld.BookName=book.BookName;
            bookOld.AuthorName=book.AuthorName;
            bookOld.BookCount=book.BookCount;
            _dbContext.SaveChanges();
            return Ok();
        }


        //Deleting an existing book
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = _dbContext.books.FirstOrDefault(book => book.BookID == id);
            if (book ==null)
            {
                return NotFound();
            }
            _dbContext.books.Remove(book);
            _dbContext.SaveChanges();
            return Ok();
        }





    }
}