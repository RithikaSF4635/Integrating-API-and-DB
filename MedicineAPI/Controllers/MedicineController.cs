using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicineAPI.Controllers;

using Microsoft.AspNetCore.Mvc;

namespace MedicineAPI
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicineController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public MedicineController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        //private static List<Medicine> _Medicine = new List<Medicine>
        //{
        //    // Add more Contacts here if needed
        //    new Medicine { MedicineID = 1001, MedicineName = "Paracetomol", MedicinePrice = 5, MedicineCount = 50, ExpiryDate = new DateTime(2025/11/20)},
        //    new Medicine { MedicineID = 1002, MedicineName = "Colpal", MedicinePrice = 5, MedicineCount = 60, ExpiryDate = new DateTime(2024/11/20) },
        //    new Medicine { MedicineID = 1003, MedicineName = "Stepsil", MedicinePrice = 5, MedicineCount = 70, ExpiryDate =new DateTime(2025/10/20) },
        //    new Medicine { MedicineID = 1004, MedicineName = "Iodex", MedicinePrice = 5, MedicineCount = 80, ExpiryDate =new DateTime(2025/10/10) },
        //    new Medicine { MedicineID = 1005, MedicineName = "Acetherol", MedicinePrice = 5, MedicineCount = 100, ExpiryDate =new DateTime(2024/10/20) }
        //};

        [HttpGet]
        public IActionResult GetMedicine()
        {
            return Ok(_dbContext.medicines.ToList());
        }
        // GET: api/Medicine/1
        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var medicine = _dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            
            return Ok(medicine);
        }

        //Adding a new medicine
        // POST: api/Medicine
        [HttpPost]
        public IActionResult PostMedicine([FromBody] Medicine medicine)
        {
            _dbContext.medicines.Add(medicine);
            _dbContext.SaveChanges();
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        // Updating an existing medicine
        // PUT: api/Medicine/1
        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] Medicine medicine)
        {
            var medicineOld =_dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == id);
            if (medicineOld == null)
            {
                return NotFound();
            }
            medicineOld.MedicineCount=medicine.MedicineCount;
            medicineOld.ExpiryDate=medicine.ExpiryDate;
            medicineOld.MedicineName=medicine.MedicineName;
            medicineOld.MedicinePrice=medicine.MedicinePrice;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing medicine
        // DELETE: api/Medicine/1
        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int id)
        {
            var medicine = _dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            _dbContext.medicines.Remove(medicine);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}