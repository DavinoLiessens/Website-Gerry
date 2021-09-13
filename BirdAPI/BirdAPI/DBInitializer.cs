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
            //context.Database.EnsureDeleted();

            // database aanmaken als er geen bestaat
            context.Database.EnsureCreated();

            // nakijken of de database niet leeg is
            if (!context.Birds.Any())
            {
                Bird bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10, bird11, bird12, bird13, bird14, bird15, bird16, bird17, bird18, bird19, bird20;
                Owner owner1, owner2, owner3, owner4, owner5, owner6, owner7, owner8, owner9, owner10, owner11, owner12;

                // OWNERS
                owner1 = new Owner()
                {
                    Voornaam = "Davino",
                    Achternaam = "Liessens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner2 = new Owner()
                {
                    Voornaam = "Gerry",
                    Achternaam = "Liessens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner3 = new Owner()
                {
                    Voornaam = "Lolo",
                    Achternaam = "Liessens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner4 = new Owner()
                {
                    Voornaam = "Laureanne",
                    Achternaam = "Vanbellingen",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner5 = new Owner()
                {
                    Voornaam = "Nicole",
                    Achternaam = "Vancraeybex",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner6 = new Owner()
                {
                    Voornaam = "Franky",
                    Achternaam = "Liessens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner7 = new Owner()
                {
                    Voornaam = "Wilfried",
                    Achternaam = "Liessens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner8 = new Owner()
                {
                    Voornaam = "Rudy",
                    Achternaam = "Janssens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner9 = new Owner()
                {
                    Voornaam = "Eddy",
                    Achternaam = "Liessens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner10 = new Owner()
                {
                    Voornaam = "Tom",
                    Achternaam = "Van Grieken",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner11 = new Owner()
                {
                    Voornaam = "Paul",
                    Achternaam = "Janssens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };
                owner12 = new Owner()
                {
                    Voornaam = "Oby",
                    Achternaam = "Liessens",
                    Telefoon = "+32471300157",
                    Email = "davino.liessens@hotmail.com"
                };

                // BIRDS
                bird1 = new Bird()
                {
                    Ringnummer = 1003456,
                    Geslacht = "Pop",
                    Soort = "Vink",
                    Jaartal = 2005,
                    Kotnummer = 7,
                    Eigenaar = owner1,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird2 = new Bird()
                {
                    Ringnummer = 1234456,
                    Geslacht = "Man",
                    Soort = "Goudvink",
                    Jaartal = 2021,
                    Kotnummer = 5,
                    Eigenaar = owner2,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird3 = new Bird()
                {
                    Ringnummer = 1004789,
                    Geslacht = "Man",
                    Soort = "Roodborst",
                    Jaartal = 2019,
                    Kotnummer = 2,
                    Eigenaar = owner3,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird4 = new Bird()
                {
                    Ringnummer = 1257604,
                    Geslacht = "Man",
                    Soort = "Goudvink",
                    Jaartal = 2019,
                    Kotnummer = 2,
                    Eigenaar = owner6,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird5 = new Bird()
                {
                    Ringnummer = 1789654,
                    Geslacht = "Man",
                    Soort = "Kanarie",
                    Jaartal = 2014,
                    Kotnummer = 6,
                    Eigenaar = owner10,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird6 = new Bird()
                {
                    Ringnummer = 3457810,
                    Geslacht = "Pop",
                    Soort = "Kanarie",
                    Jaartal = 2020,
                    Kotnummer = 4,
                    Eigenaar = owner8,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird7 = new Bird()
                {
                    Ringnummer = 7891456,
                    Geslacht = "Man",
                    Soort = "Roodborst",
                    Jaartal = 2017,
                    Kotnummer = 3,
                    Eigenaar = owner9,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird8 = new Bird()
                {
                    Ringnummer = 9874210,
                    Geslacht = "Pop",
                    Soort = "Papegaai",
                    Jaartal = 2009,
                    Kotnummer = 9,
                    Eigenaar = owner12,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird9 = new Bird()
                {
                    Ringnummer = 4781230,
                    Geslacht = "Man",
                    Soort = "Parkiet",
                    Jaartal = 2019,
                    Kotnummer = 5,
                    Eigenaar = owner11,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird10 = new Bird()
                {
                    Ringnummer = 6145789,
                    Geslacht = "Man",
                    Soort = "Parkiet",
                    Jaartal = 2019,
                    Kotnummer = 7,
                    Eigenaar = owner1,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird11 = new Bird()
                {
                    Ringnummer = 5426798,
                    Geslacht = "Man",
                    Soort = "Distelvink",
                    Jaartal = 2013,
                    Kotnummer = 3,
                    Eigenaar = owner4,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird12 = new Bird()
                {
                    Ringnummer = 8885471,
                    Geslacht = "Pop",
                    Soort = "Roodborst",
                    Jaartal = 2018,
                    Kotnummer = 6,
                    Eigenaar = owner6,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird13 = new Bird()
                {
                    Ringnummer = 6678451,
                    Geslacht = "Pop",
                    Soort = "Mus",
                    Jaartal = 2019,
                    Kotnummer = 1,
                    Eigenaar = owner2,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird14 = new Bird()
                {
                    Ringnummer = 3347899,
                    Geslacht = "Man",
                    Soort = "Papegaai",
                    Jaartal = 2019,
                    Kotnummer = 5,
                    Eigenaar = owner10,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird15 = new Bird()
                {
                    Ringnummer = 2014578,
                    Geslacht = "Man",
                    Soort = "Parkiet",
                    Jaartal = 2019,
                    Kotnummer = 3,
                    Eigenaar = owner5,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird16 = new Bird()
                {
                    Ringnummer = 3478520,
                    Geslacht = "Man",
                    Soort = "Mus",
                    Jaartal = 2019,
                    Kotnummer = 4,
                    Eigenaar = owner7,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird17 = new Bird()
                {
                    Ringnummer = 9462057,
                    Geslacht = "Man",
                    Soort = "Distelvink",
                    Jaartal = 2019,
                    Kotnummer = 4,
                    Eigenaar = owner8,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird18 = new Bird()
                {
                    Ringnummer = 6704132,
                    Geslacht = "Man",
                    Soort = "Vink",
                    Jaartal = 2019,
                    Kotnummer = 8,
                    Eigenaar = owner4,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird19 = new Bird()
                {
                    Ringnummer = 1603478,
                    Geslacht = "Man",
                    Soort = "Kanarie",
                    Jaartal = 2019,
                    Kotnummer = 8,
                    Eigenaar = owner5,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };
                bird20 = new Bird()
                {
                    Ringnummer = 4567308,
                    Geslacht = "Man",
                    Soort = "Parkiet",
                    Jaartal = 2020,
                    Kotnummer = 8,
                    Eigenaar = owner9,
                    Kleur = "Grijs",
                    Kweker = "Davino Liessens"
                };

                // ADD BIRDS TO CONTEXT
                {
                    context.Birds.Add(bird1);
                    context.Birds.Add(bird2);
                    context.Birds.Add(bird3);
                    context.Birds.Add(bird4);
                    context.Birds.Add(bird5);
                    context.Birds.Add(bird6);
                    context.Birds.Add(bird7);
                    context.Birds.Add(bird8);
                    context.Birds.Add(bird9);
                    context.Birds.Add(bird10);
                    context.Birds.Add(bird11);
                    context.Birds.Add(bird12);
                    context.Birds.Add(bird13);
                    context.Birds.Add(bird14);
                    context.Birds.Add(bird15);
                    context.Birds.Add(bird16);
                    context.Birds.Add(bird17);
                    context.Birds.Add(bird18);
                    context.Birds.Add(bird19);
                    context.Birds.Add(bird20);
                }

                // ADD OWNERS TO CONTEXT
                {
                    context.Owners.Add(owner1);
                    context.Owners.Add(owner2);
                    context.Owners.Add(owner3);
                    context.Owners.Add(owner4);
                    context.Owners.Add(owner5);
                    context.Owners.Add(owner6);
                    context.Owners.Add(owner7);
                    context.Owners.Add(owner8);
                    context.Owners.Add(owner9);
                    context.Owners.Add(owner10);
                    context.Owners.Add(owner11);
                    context.Owners.Add(owner12);
                }
                context.SaveChanges();
            }
        }
    }
}
