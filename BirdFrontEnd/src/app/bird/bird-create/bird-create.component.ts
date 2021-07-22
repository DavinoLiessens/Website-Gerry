import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, Bird, Owner, CreateBird } from 'src/app/Services/api.service';
import { OwnerService } from 'src/app/Services/owner.service';

@Component({
  selector: 'app-bird-create',
  templateUrl: './bird-create.component.html',
  styleUrls: ['./bird-create.component.css']
})
export class BirdCreateComponent implements OnInit {

  private newBird: CreateBird;
  private ringnummer: number;
  private geslacht: string;
  private soort: string;
  private jaartal: number;
  private kotnummer: number;
  private eigenaarID: number;
  

  public GeslachtOptions: string[];
  public typeOfBirdOptions: string[];
  public ownerOptions: Owner[];

  // createbird methode nog afwerken met github vergelijken
  // eerst ownerservice maken en GetAllOwners roepen voor ik verder kan doen
  // ownerservice aanmaken en overerven van methodes uit api service
  
  constructor(private apiService: ApiService, private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
    this.GeslachtOptions = ['Pop', 'Man'];
    this.typeOfBirdOptions = ['Kanarie', 'Goudvink', 'Vink', 'Parkiet', 'Papegaai', 'Mus', 'Distelvink', 'Roodborst'];
    this.apiService.GetAllOwners().subscribe((res) => this.ownerOptions = res);
  }

  CreateBird() : void{
    this.ownerService.GetAllOwners().subscribe(result => {

      if(result.length == 0){
        alert("This owner doesn't exist");
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
         eigenaarID: this.eigenaarID
      };

      this.apiService.CreateBird(this.newBird).subscribe(result => {
        alert("Succesfull Created!");
        this.router.navigate(['/birds']);
      },
      error => {
        alert("Create failed!");
        console.log(error);
        console.log(this.newBird);
      });
    });
  }

  get Ringnummer(){
    return this.ringnummer;
  }

  set Ringnummer(value: number){
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
}
