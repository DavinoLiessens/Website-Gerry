import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, Owner } from 'src/app/Services/api.service';
import { OwnerService } from 'src/app/Services/owner.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  private newOwner: Owner;
  private voornaam: string;
  private achternaam: string;
  private telefoon: string;
  private email: string;

  constructor(private apiService: ApiService, private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
  }

  CreateOwner() : void{
    this.newOwner = {
      voornaam: this.voornaam,
      achternaam: this.achternaam,
      telefoon: this.telefoon,
      email: this.email
    };

    this.ownerService.CreateOwner(this.newOwner).subscribe(result => {
      alert("Eigenaar succesvol aangemaakt!");
      console.log(this.newOwner);
      this.router.navigate(['/owners']);
    },
    error => {
      alert("Er liep iets mis!");
      console.log(error);
    });    
  }

  get Voornaam(){
    return this.voornaam;
  }

  set Voornaam(value: string){
    this.voornaam = value;
  }

  get Achternaam(){
    return this.achternaam;
  }

  set Achternaam(value: string){
    this.achternaam = value;
  }
    
  get Telefoon(){
    return this.telefoon;
  }

  set Telefoon(value: string){
    this.telefoon = value;
  }

  get Email(){
    return this.email;
  }

  set Email(value: string){
    this.email = value;
  }
}
