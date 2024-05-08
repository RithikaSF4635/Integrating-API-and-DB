using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetroAPI
{
    [Table("userInfo", Schema = "public")]
    public class UserInfo
    {
        [Key]
        public int UserID { get; set; }
        public int CardNumber { get; set; }
        
        
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        
        public string PhoneNumber { get; set; }
        
        public double UserBalance { get; set; }
        
        
        
        
        
        
        
        
        
        
    }
}