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
                Bird bird1;
                Owner owner1, owner2, owner3;
                Couple couple1;

                // COUPLES
                couple1 = new Couple()
                {
                    Name = "Koppel Goudvinken",
                    Father = "ARP4000NR001",
                    Mother = "ARP4000NR002",
                    Child1 = "ARP4000NR003",
                    Child2 = "ARP4000NR004",
                    Child3 = "ARP4000NR005",
                    Child4 = "ARP4000NR006",
                    Child5 = "ARP4000NR007",
                    Child6 = "ARP4000NR008"
                };

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
                    Telefoon = "+32478365276",
                    Email = "gerry.liessens@telenet.be"
                };                
                owner3 = new Owner()
                {
                    Voornaam = "Franky",
                    Achternaam = "Liessens",
                    Telefoon = "+32478365276",
                    Email = "gerry.liessens@telenet.be"
                };               

                // BIRDS
                bird1 = new Bird()
                {
                    Ringnummer = "ARP001NR009",
                    Geslacht = "Pop",
                    Soort = "Vink",
                    Jaartal = 2005,
                    Kotnummer = 7,
                    Eigenaar = owner2,
                    Kleur = "Grijs",
                    Kweker = "Gerry Liessens",
                    Omschrijving = ""
                };
                {
                //    bird2 = new Bird()
                //    {
                //        Ringnummer = "1234456",
                //        Geslacht = "Man",
                //        Soort = "Goudvink",
                //        Jaartal = 2021,
                //        Kotnummer = 5,
                //        Eigenaar = owner2,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird3 = new Bird()
                //    {
                //        Ringnummer = "1004789",
                //        Geslacht = "Man",
                //        Soort = "Roodborst",
                //        Jaartal = 2019,
                //        Kotnummer = 2,
                //        Eigenaar = owner3,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird4 = new Bird()
                //    {
                //        Ringnummer = "1257604",
                //        Geslacht = "Man",
                //        Soort = "Goudvink",
                //        Jaartal = 2019,
                //        Kotnummer = 2,
                //        Eigenaar = owner6,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird5 = new Bird()
                //    {
                //        Ringnummer = "1789654",
                //        Geslacht = "Man",
                //        Soort = "Kanarie",
                //        Jaartal = 2014,
                //        Kotnummer = 6,
                //        Eigenaar = owner10,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird6 = new Bird()
                //    {
                //        Ringnummer = "3457810",
                //        Geslacht = "Pop",
                //        Soort = "Kanarie",
                //        Jaartal = 2020,
                //        Kotnummer = 4,
                //        Eigenaar = owner8,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird7 = new Bird()
                //    {
                //        Ringnummer = "7891456",
                //        Geslacht = "Man",
                //        Soort = "Roodborst",
                //        Jaartal = 2017,
                //        Kotnummer = 3,
                //        Eigenaar = owner9,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird8 = new Bird()
                //    {
                //        Ringnummer = "9874210",
                //        Geslacht = "Pop",
                //        Soort = "Papegaai",
                //        Jaartal = 2009,
                //        Kotnummer = 9,
                //        Eigenaar = owner12,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird9 = new Bird()
                //    {
                //        Ringnummer = "4781230",
                //        Geslacht = "Man",
                //        Soort = "Parkiet",
                //        Jaartal = 2019,
                //        Kotnummer = 5,
                //        Eigenaar = owner11,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird10 = new Bird()
                //    {
                //        Ringnummer = "6145789",
                //        Geslacht = "Man",
                //        Soort = "Parkiet",
                //        Jaartal = 2019,
                //        Kotnummer = 7,
                //        Eigenaar = owner1,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird11 = new Bird()
                //    {
                //        Ringnummer = "5426798",
                //        Geslacht = "Man",
                //        Soort = "Distelvink",
                //        Jaartal = 2013,
                //        Kotnummer = 3,
                //        Eigenaar = owner4,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird12 = new Bird()
                //    {
                //        Ringnummer = "8885471",
                //        Geslacht = "Pop",
                //        Soort = "Roodborst",
                //        Jaartal = 2018,
                //        Kotnummer = 6,
                //        Eigenaar = owner6,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird13 = new Bird()
                //    {
                //        Ringnummer = "6678451",
                //        Geslacht = "Pop",
                //        Soort = "Mus",
                //        Jaartal = 2019,
                //        Kotnummer = 1,
                //        Eigenaar = owner2,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird14 = new Bird()
                //    {
                //        Ringnummer = "3347899",
                //        Geslacht = "Man",
                //        Soort = "Papegaai",
                //        Jaartal = 2019,
                //        Kotnummer = 5,
                //        Eigenaar = owner10,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird15 = new Bird()
                //    {
                //        Ringnummer = "2014578",
                //        Geslacht = "Man",
                //        Soort = "Parkiet",
                //        Jaartal = 2019,
                //        Kotnummer = 3,
                //        Eigenaar = owner5,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird16 = new Bird()
                //    {
                //        Ringnummer = "3478520",
                //        Geslacht = "Man",
                //        Soort = "Mus",
                //        Jaartal = 2019,
                //        Kotnummer = 4,
                //        Eigenaar = owner7,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird17 = new Bird()
                //    {
                //        Ringnummer = "9462057",
                //        Geslacht = "Man",
                //        Soort = "Distelvink",
                //        Jaartal = 2019,
                //        Kotnummer = 4,
                //        Eigenaar = owner8,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird18 = new Bird()
                //    {
                //        Ringnummer = "6704132",
                //        Geslacht = "Man",
                //        Soort = "Vink",
                //        Jaartal = 2019,
                //        Kotnummer = 8,
                //        Eigenaar = owner4,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird19 = new Bird()
                //    {
                //        Ringnummer = "1603478",
                //        Geslacht = "Man",
                //        Soort = "Kanarie",
                //        Jaartal = 2019,
                //        Kotnummer = 8,
                //        Eigenaar = owner5,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                //    bird20 = new Bird()
                //    {
                //        Ringnummer = "4567308",
                //        Geslacht = "Man",
                //        Soort = "Parkiet",
                //        Jaartal = 2020,
                //        Kotnummer = 8,
                //        Eigenaar = owner9,
                //        Kleur = "Grijs",
                //        Kweker = "Davino Liessens",
                //        Omschrijving = ""
                //    };
                }

                // ADD BIRDS TO CONTEXT
                {
                    context.Birds.Add(bird1);
                    {
                        //context.Birds.Add(bird2);
                        //context.Birds.Add(bird3);
                        //context.Birds.Add(bird4);
                        //context.Birds.Add(bird5);
                        //context.Birds.Add(bird6);
                        //context.Birds.Add(bird7);
                        //context.Birds.Add(bird8);
                        //context.Birds.Add(bird9);
                        //context.Birds.Add(bird10);
                        //context.Birds.Add(bird11);
                        //context.Birds.Add(bird12);
                        //context.Birds.Add(bird13);
                        //context.Birds.Add(bird14);
                        //context.Birds.Add(bird15);
                        //context.Birds.Add(bird16);
                        //context.Birds.Add(bird17);
                        //context.Birds.Add(bird18);
                        //context.Birds.Add(bird19);
                        //context.Birds.Add(bird20);
                    }
                }

                // ADD OWNERS TO CONTEXT
                {
                    context.Owners.Add(owner1);
                    context.Owners.Add(owner2);
                    context.Owners.Add(owner3);
                }

                // ADD COUPLES TO CONTEXT
                context.Couples.Add(couple1);

                // SAVE CHANGES
                context.SaveChanges();
            }
        }
    }
}
