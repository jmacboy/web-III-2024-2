using System.ComponentModel.DataAnnotations;

namespace PracticaMVC.Models
{
    public class Persona
    {
        public int PersonaID { get; set; }
       
        [Required(ErrorMessage ="Ingrese un nombre")]
        [StringLength(50)]
        [Display(Name = "Nombres")]
        public string Nombres { get; set; }

        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string Ciudad { get; set; }
        [Required]
        public int Edad { get; set; }
        
        [DataType(DataType.Date)]
        [Display(Name = "Fecha de Nacimiento")]
        public DateTime FechaNacimiento { get; set; }
    }
}
