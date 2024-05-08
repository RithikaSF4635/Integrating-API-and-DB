using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetroAPI
{
    [Table("ticket", Schema = "public")]
    public class Ticket
    {
        [Key]
        public int TicketID { get; set; }
        public string FromLocation { get; set; }
        public string ToLocation { get; set; }
        public int TicketPrice { get; set; }
        
        
        
        
        
        
        
        
    }
}