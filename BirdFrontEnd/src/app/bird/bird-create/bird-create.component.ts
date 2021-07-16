import { Component, OnInit } from '@angular/core';
import { Bird } from 'src/app/Services/api.service';

@Component({
  selector: 'app-bird-create',
  templateUrl: './bird-create.component.html',
  styleUrls: ['./bird-create.component.css']
})
export class BirdCreateComponent implements OnInit {

  private bird: Bird;
  private ringnummer: number = 123456;
  private geslacht: string = "Pop";
  private soort: string = "Parkiet";
  private jaartal: number = 2020;
  private kotnummer: number = 1;
  private eigenaarID: number = 2;
  
  // createbird methode nog afwerken met github vergelijken
  // eerst ownerservice maken en GetAllOwners roepen voor ik verder kan doen
  // ownerservice aanmaken en overerven van methodes uit api service
  constructor() { }

  ngOnInit(): void {
  }

  CreateBird() : void{

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
