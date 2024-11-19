using System.ComponentModel.DataAnnotations;

namespace PracticaWebApi.Models.Dto
{
    public class RegisterRequestDto
    {

        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
