using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MetroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TicketController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        //GET: api/ticket
        [HttpGet]
        public IActionResult GetTicket()
        {
            return Ok(_dbContext.tickets.ToList());
        }

        //GET: api/ticket/1
        [HttpGet("{id}")]
        public IActionResult GetTicket(int id)
        {
            var ticket=_dbContext.tickets.FirstOrDefault(ticket => ticket.TicketID == id);
            if (ticket==null)
            {
                return NotFound();
            }
            return Ok(ticket);

        }

        //Adding new ticket
        [HttpPost]
        public IActionResult PostTicket([FromBody] Ticket ticket)
        {
            _dbContext.tickets.Add(ticket);
            _dbContext.SaveChanges();
            return Ok();
        }


        //Updating a existing ticket
        [HttpPut("{id}")]
        public IActionResult PutTicket(int id, [FromBody] Ticket ticket)
        {
            var ticketOld=_dbContext.tickets.FirstOrDefault(ticket => ticket.TicketID == id);
            if (ticketOld == null)
            {
                return NotFound();
            }
            ticketOld.FromLocation=ticket.FromLocation;
            ticketOld.ToLocation=ticket.ToLocation;
            ticketOld.TicketPrice=ticket.TicketPrice;
            _dbContext.SaveChanges();
            return Ok();
        }

        //Deleting an existing ticket
        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(int id)
        {
            var ticket = _dbContext.tickets.FirstOrDefault(ticket => ticket.TicketID == id);
            if (ticket ==null)
            {
                return NotFound();
            }
           _dbContext.tickets.Remove(ticket);
            _dbContext.SaveChanges();
            return Ok();
        }


    }
}