namespace PracticaMVC.Models
{
    public class Mascota
    {
        public int MascotaId { get; set; }
        public string Nombre { get; set; }
        public int TipoMascota { get; set; }
        public Persona Persona { get; set; }
    }
}
