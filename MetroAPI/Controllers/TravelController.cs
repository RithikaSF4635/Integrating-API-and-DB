using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MetroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TravelController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }


        //GET: api/Travels
        [HttpGet]
        public IActionResult GetTravel()
        {
            return Ok(_dbContext.travels.ToList());
        }

        //GET: api/Travel/1
        [HttpGet("{id}")]
        public IActionResult GetTravel(int id)
        {
            var travel=_dbContext.travels.FirstOrDefault(travel => travel.TravelID == id);
            if (travel==null)
            {
                return NotFound();
            }
            return Ok(travel);

        }


        //Adding new Travel
        [HttpPost]
        public IActionResult PostTravel([FromBody] Travel travel)
        {
            _dbContext.travels.Add(travel);
            _dbContext.SaveChanges();
            return Ok();
        }

        //Updating a existing travel
        [HttpPut("{id}")]
        public IActionResult PutTravel(int id, [FromBody] Travel travel)
        {
            var travelOld=_dbContext.travels.FirstOrDefault(travel => travel.TravelID == id);
            if (travelOld == null)
            {
                return NotFound();
            }
            travelOld.CardNumber=travel.CardNumber;
            travelOld.FromLocation=travel.FromLocation;
            travelOld.ToLocation=travel.ToLocation;
            travelOld.DateTravel=travel.DateTravel;
            travelOld.TravelCost=travel.TravelCost;
            _dbContext.SaveChanges();
            return Ok();
        }

        //Deleting an existing travel
        [HttpDelete("{id}")]
        public IActionResult DeleteTravel(int id)
        {
            var travel = _dbContext.travels.FirstOrDefault(travel => travel.TravelID == id);
            if (travel ==null)
            {
                return NotFound();
            }
           _dbContext.travels.Remove(travel);
            _dbContext.SaveChanges();
            return Ok();
        }



    }
}