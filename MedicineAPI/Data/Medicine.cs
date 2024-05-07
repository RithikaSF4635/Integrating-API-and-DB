using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicineAPI
{
    [Table("medicine", Schema = "public")]
    public class Medicine
    {
        [Key]
        public int MedicineID { get; set; }
        public string MedicineName { get; set; }
        public int MedicinePrice { get; set; }
        public int MedicineCount { get; set; }
        public DateTime ExpiryDate { get; set; }
    }
}