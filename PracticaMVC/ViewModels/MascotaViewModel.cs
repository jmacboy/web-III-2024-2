using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace PracticaMVC.ViewModels
{
    public class MascotaViewModel
    {
        public int? MascotaId { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public int TipoMascota { get; set; }
        [Required]
        public int PersonaId { get; set; }
        public SelectList? ListaPersonas { get; set; }
        public MascotaViewModel() { }
    }
}
