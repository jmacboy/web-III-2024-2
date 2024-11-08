using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PracticaMVC.Data;
using PracticaMVC.Models;
using PracticaMVC.ViewModels;

namespace PracticaMVC.Controllers
{
    public class MascotasController : Controller
    {
        private readonly PracticaMVCContext _context;

        public MascotasController(PracticaMVCContext context)
        {
            _context = context;
        }

        // GET: Mascotas
        public async Task<IActionResult> Index()
        {
            return View(await _context.Mascota
                .Include(m => m.Persona)
                .ToListAsync());
        }

        // GET: Mascotas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mascota = await _context.Mascota
                .FirstOrDefaultAsync(m => m.MascotaId == id);
            if (mascota == null)
            {
                return NotFound();
            }

            return View(mascota);
        }

        // GET: Mascotas/Create
        public IActionResult Create()
        {
            MascotaViewModel mvm = new MascotaViewModel();
            mvm.ListaPersonas = new SelectList(_context.Persona, "PersonaID", "Nombres");

            return View(mvm);
        }

        // POST: Mascotas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Nombre,TipoMascota,PersonaId")] MascotaViewModel mascota)
        {
            if (ModelState.IsValid)
            {
                Mascota m = new()
                {
                    Nombre = mascota.Nombre,
                    TipoMascota = mascota.TipoMascota,
                    PersonaID = mascota.PersonaId
                };
                _context.Add(m);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            mascota.ListaPersonas = new SelectList(_context.Persona, "PersonaID", "Nombres");

            return View(mascota);
        }

        // GET: Mascotas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mascota = await _context.Mascota.FindAsync(id);
            if (mascota == null)
            {
                return NotFound();
            }
            MascotaViewModel mvm = new()
            {
                MascotaId = mascota.MascotaId,
                Nombre = mascota.Nombre,
                TipoMascota = mascota.TipoMascota,
                PersonaId = mascota.PersonaID,
                ListaPersonas = new SelectList(_context.Persona, "PersonaID", "Nombres")
            };

            return View(mvm);
        }

        // POST: Mascotas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("MascotaId,Nombre,TipoMascota,PersonaId")] MascotaViewModel mascota)
        {
            if (id != mascota.MascotaId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    Mascota m = new()
                    {
                        MascotaId = mascota.MascotaId ?? 0,
                        Nombre = mascota.Nombre,
                        TipoMascota = mascota.TipoMascota,
                        PersonaID = mascota.PersonaId
                    };
                    _context.Update(m);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MascotaExists(mascota.MascotaId ?? 0))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            mascota.ListaPersonas = new SelectList(_context.Persona, "PersonaID", "Nombres");

            return View(mascota);
        }

        // GET: Mascotas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mascota = await _context.Mascota
                .FirstOrDefaultAsync(m => m.MascotaId == id);
            if (mascota == null)
            {
                return NotFound();
            }

            return View(mascota);
        }

        // POST: Mascotas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var mascota = await _context.Mascota.FindAsync(id);
            if (mascota != null)
            {
                _context.Mascota.Remove(mascota);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MascotaExists(int id)
        {
            return _context.Mascota.Any(e => e.MascotaId == id);
        }
    }
}
