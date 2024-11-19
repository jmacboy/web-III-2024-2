using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PracticaWebApi.Models.Dto;
using System;
using PracticaWebApi.Data;
using PracticaWebApi.Services;

namespace PracticaWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly TokenService _tokenService;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        public AuthController(TokenService tokenService,
                    SignInManager<IdentityUser> signInManager,
            UserManager<IdentityUser> userManager)
        {
            _tokenService = tokenService;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto request)
        {

            IdentityUser? duplicateUser = await _userManager.FindByEmailAsync(request.Email);

            if (duplicateUser != null)
            {
                return BadRequest("User already exists");
            }

            var user = new IdentityUser
            {
                UserName = request.Username,
                Email = request.Email,
            };
            var result = await _userManager.CreateAsync(user, request.Password);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            var token = _tokenService.CreateToken(user);

            return Ok(new
            {
                Message = "User created successfully",
            });
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto request)
        {
            IdentityUser? user = await _userManager.FindByEmailAsync(request.Email);

            if (user == null)
            {
                return Unauthorized("Invalid credentials 1");
            }


            var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, lockoutOnFailure: false);

            if (!result.Succeeded)
            {
                return Unauthorized("Invalid credentials 2");
            }

            // Generate token
            var token = _tokenService.CreateToken(user);

            // Return the token
            return Ok(new AuthResponseDto { Token = token });
        }
    }
}
