import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItemGroup } from 'primeng/api/selectitemgroup';
import { ApiService, Bird, Owner, CreateBird } from 'src/app/Services/api.service';
import { OwnerService } from 'src/app/Services/owner.service';

@Component({
  selector: 'app-bird-create',
  templateUrl: './bird-create.component.html',
  styleUrls: ['./bird-create.component.css']
})
export class BirdCreateComponent implements OnInit {

  private newBird: CreateBird;
  private ringnummer: string;
  private geslacht: string;
  private soort: string;
  private jaartal: number;
  private kotnummer: number;
  private eigenaarID: number;
  private kweker: string;
  private kleur: string;
  private omschrijving: string;

  public GeslachtOptions: string[];
  public typeOfBirdOptions: string[];
  public ownerOptions: Owner[];
  public colorOptions: string[];
  public kanarieColors: string[];
  public goudvinkColors: string[];
  public distelvinkColors: string[];
  public sijzenColors: string[];
  public appelvinkColors: string[];
  public fischeriColors: string[];
  public barmsijzenColors: string[];
  public roodmusColors: string[];

  // grouped colors
  public groupedColors: SelectItemGroup[];

  public Kanarie: boolean = false;
  public Goudvink: boolean = false;
  public Distelvink: boolean = false;
  public Sijzen: boolean = false;
  public Appelvink: boolean = false;
  public Fischeri: boolean = false;
  public Barmsijzen: boolean = false;
  public Roodmus: boolean = false;

  constructor(private apiService: ApiService, private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
    this.GeslachtOptions = ['Pop', 'Man'];
    this.typeOfBirdOptions = ['Kanarie', 'Goudvink', 'Distelvink', 'Sijzen', 'Appelvink', 'Fischeri', 'Barmsijzen', 'Mexicaanse Roodmus'];

    // grouped colors
    this.groupedColors = [
      {
        label: 'Kanarie', value: 'kanarie',
        items: [
            {label: 'Intensief', value: 'Intensief'},
            {label: 'Schimmel', value: 'Schimmel'},
            {label: 'Wit', value: 'Wit'},
            {label: 'Agaat Wit', value: 'Agaat Wit'},
            {label: 'Agaat Geel', value: 'Agaat Geel'},
            {label: 'Agaat Groen', value: 'Agaat Groen'},
            {label: 'Agaat Rood', value: 'Agaat Rood'}
        ]
      },
      {
        label: 'Goudvink', value: 'Goudvink',
        items: [
            {label: 'Wildkleur', value: 'Wildkleur'},
            {label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin'},
            {label: 'Wildkleur/Bruin Pastel', value: 'Wildkleur/Bruin Pastel'},
            {label: 'Bruin', value: 'Bruin'},
            {label: 'Bruin Pastel', value: 'Bruin Pastel'},
        ]
      },
      {
        label: 'Distelvink', value: 'Distelvink',
        items: [
            {label: 'Bruin', value: 'Bruin'},
            {label: 'Agaat', value: 'Agaat'},
            {label: 'Agaat Bruin', value: 'Agaat Bruin'},
            {label: 'Agaat Pastel', value: 'Agaat Pastel'},            
            {label: 'Isabel', value: 'Isabel'},
            {label: 'Satinet', value: 'Satinet'},
            {label: 'Eumo', value: 'Eumo'},
            {label: 'Pastel', value: 'Pastel'},
            {label: 'Bruin Pastel', value: 'Bruin Pastel'},
            {label: 'Witkop', value: 'Witkop'},
        ]
      },
      {
        label: 'Sijzen', value: 'Sijzen',
        items: [
            {label: 'Wildkleur', value: 'Wildkleur'},
            {label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin'},
            {label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor'},
            {label: 'Bruin', value: 'Bruin'},
            {label: 'Ivoor', value: 'Ivoor'},
            {label: 'Zwartkop', value: 'Zwartkop'}
        ]
      },
      {
        label: 'Appelvink', value: 'Appelvink',
        items: [
            {label: 'Wildkleur', value: 'Wildkleur'}
        ]
      },
      {
        label: 'Fischeri', value: 'Fischeri',
        items: [
            {label: 'Groen', value: 'Groen'},
            {label: 'Blauw', value: 'Blauw'},
            {label: 'Lutino', value: 'Lutino'},
            {label: 'Paars', value: 'Paars'},
            {label: 'Wit', value: 'Wit'}
        ]
      },
      {
        label: 'Barmsijzen', value: 'Barmsijzen',
        items: [
            {label: 'Wildkleur', value: 'Wildkleur'},
            {label: 'Wildkleur/Satinet', value: 'Wildkleur/Satinet'},
            {label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor'},
            {label: 'Satinet', value: 'Satinet'},
            {label: 'Ivoor', value: 'Ivoor'}
        ]
      },
      {
        label: 'Roodmus', value: 'Mexicaanse Roodmus',
        items: [
            {label: 'Wildkleur', value: 'Wildkleur'}
        ]
      },
    ];

    this.apiService.noOwners = 100;
    this.apiService.GetAllOwners().subscribe((res) => {
      this.ownerOptions = res;
      console.log(res);
    this.apiService.noOwners = 10;
    });
  }

  CreateBird() : void{
    this.ownerService.GetAllOwners().subscribe(result => {

      if(result.length == 0){
        alert("Deze Kweker bestaat niet!");
        return;
      }

      var owner: Owner = result[0];

      console.log(owner);
      this.newBird = {
         ringnummer: this.ringnummer,
         geslacht: this.geslacht,
         soort: this.soort,
         jaartal: this.jaartal,
         kotnummer: this.kotnummer,
         eigenaarID: this.eigenaarID,
         kweker: this.kweker,
         kleur: this.kleur,
         omschrijving: this.omschrijving
      };

      this.apiService.CreateBird(this.newBird).subscribe(result => {
        alert("Vogel succesvol aangemaakt!");
        console.log(this.newBird);
        this.router.navigate(['/birds']);
      },
      error => {
        alert("Er liep iets mis!");
        console.log(error);
        console.log(this.newBird);
      });
    });
  }

  get Ringnummer(){
    return this.ringnummer;
  }

  set Ringnummer(value: string){
    this.ringnummer = value;
  }

  get Geslacht(){
    return this.geslacht;
  }

  set Geslacht(value: string){
    this.geslacht = value;
  }

  get Soort(){
    return this.soort;
  }

  set Soort(value: string){
    this.soort = value;
  }

  get Jaartal(){
    return this.jaartal;
  }

  set Jaartal(value: number){
    this.jaartal = value;
  }

  get Kotnummer(){
    return this.kotnummer;
  }

  set Kotnummer(value: number){
    this.kotnummer = value;
  }

  get EigenaarID(){
    return this.eigenaarID;
  }

  set EigenaarID(value: number){
    this.eigenaarID = value;
  }

  get Kweker(){
    return this.kweker;
  }

  set Kweker(value: string){
    this.kweker = value;
  }

  get Kleur(){
    return this.kleur;
  }

  set Kleur(value: string){
    this.kleur = value;
  }

  get Omschrijving(){
    return this.omschrijving;
  }

  set Omschrijving(value: string){
    this.omschrijving = value;
  }
}
