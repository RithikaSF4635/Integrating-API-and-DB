using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MedicineAPI.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public OrderController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        // private static List<Order> _Order=new List<Order>
        // {
        //     //Adding Orders
        //     new Order { OrderID=101,MedicineID=1001,UserID=1,MedicineName="Paracetomol",MedicineCount=5,OrderStatus="Ordered"},
        //     new Order { OrderID=102,MedicineID=1002,UserID=2,MedicineName="Colpal",MedicineCount=3,OrderStatus="Ordered"},
        // };

        // GET: api/Order
        [HttpGet]
        public IActionResult GetOrder()
        {
            return Ok(_dbContext.orders.ToList());
        }

        // GET: api/Order/1
        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(order => order.OrderID == id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        //Adding a new Order
        // POST: api/Order
        [HttpPost]
        public IActionResult PostOrder([FromBody] Order order)
        {
            _dbContext.orders.Add(order);
            _dbContext.SaveChanges();
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        // Updating an existing Order
        // PUT: api/Order/1
        [HttpPut("{id}")]
        public IActionResult PutOrder(int id, [FromBody] Order order)
        {
            var orderOld = _dbContext.orders.FirstOrDefault(order => order.OrderID == id);
            if (orderOld ==null)
            {
                return NotFound();
            }
            orderOld.UserID=order.UserID;
            orderOld.MedicineID=order.MedicineID;
            orderOld.MedicineName=order.MedicineName;
            orderOld.MedicineCount=order.MedicineCount;
            orderOld.OrderStatus=order.OrderStatus;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing Order
        // DELETE: api/Order/1
        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(order => order.OrderID== id);
            if (order == null)
            {
                return NotFound();
            }
            _dbContext.orders.Remove(order);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

    }

}