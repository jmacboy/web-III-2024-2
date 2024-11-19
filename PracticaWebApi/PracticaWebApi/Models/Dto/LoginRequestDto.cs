using System.ComponentModel.DataAnnotations;

namespace PracticaWebApi.Models.Dto
{
    public class LoginRequestDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

    }
}
