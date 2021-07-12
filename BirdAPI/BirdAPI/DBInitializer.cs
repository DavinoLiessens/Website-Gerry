using DAL;
using DAL.DB_Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BirdAPI
{
    public class DBInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            // database terug leegmaken als we opnieuw opstarten
            context.Database.EnsureDeleted();

            // database aanmaken als er geen bestaat
            context.Database.EnsureCreated();

            // nakijken of de database niet leeg is
            if (!context.Birds.Any())
            {
                Bird bird1, bird2, bird3;
                Owner owner1, owner2, owner3;

                owner1 = new Owner()
                {
                    Voornaam = "Davino",
                    Achternaam = "Liessens"
                };

                owner2 = new Owner()
                {
                    Voornaam = "Gerry",
                    Achternaam = "Liessens"
                };

                owner3 = new Owner()
                {
                    Voornaam = "Lolo",
                    Achternaam = "Liessens"
                };

                bird1 = new Bird()
                {
                    Ringnummer = 1003456,
                    Geslacht = "Pop",
                    Soort = "Vink",
                    Jaartal = 2005,
                    Kotnummer = 7,
                    Eigenaar = owner1
                };

                bird2 = new Bird()
                {
                    Ringnummer = 123456,
                    Geslacht = "Man",
                    Soort = "Goudvink",
                    Jaartal = 2021,
                    Kotnummer = 5,
                    Eigenaar = owner2
                };

                bird3 = new Bird()
                {
                    Ringnummer = 1004789,
                    Geslacht = "Man",
                    Soort = "Roodborst",
                    Jaartal = 2019,
                    Kotnummer = 2,
                    Eigenaar = owner3
                };

                context.Birds.Add(bird1);
                context.Birds.Add(bird2);
                context.Birds.Add(bird3);
                context.Owners.Add(owner1);
                context.Owners.Add(owner2);
                context.Owners.Add(owner3);

                context.SaveChanges();
            }
        }
    }
}
