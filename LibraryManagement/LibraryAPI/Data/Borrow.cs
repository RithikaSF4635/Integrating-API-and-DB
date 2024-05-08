using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LibraryAPI
{
    [Table("borrow", Schema = "public")]
    public class Borrow
    {
        [Key]
        public int BorrowID { get; set; }
        public int BookID { get; set; }
        public int UserID { get; set; }
        public DateTime BorrowedDate { get; set; }
        public int BorrowBookCount  { get; set; }
        public string Status { get; set; }
        public int PaidFineAmount { get; set; }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
}