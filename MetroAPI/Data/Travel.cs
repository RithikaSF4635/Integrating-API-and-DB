using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetroAPI
{
    [Table("travel", Schema = "public")]
    public class Travel
    {
        [Key]
        public int TravelID { get; set; }
        public int CardNumber { get; set; }
        public string FromLocation { get; set; }
        public string ToLocation { get; set; }
        public DateTime DateTravel { get; set; }
        public int TravelCost { get; set; }
        
        
        
        
        
        
        
        
        
        
        
        
    }
}