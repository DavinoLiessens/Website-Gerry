import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Bird, ChangeBird, Owner } from 'src/app/Services/api.service';
import { BirdService } from 'src/app/Services/bird.service';
import { OwnerService } from 'src/app/Services/owner.service';

@Component({
  selector: 'app-bird-update',
  templateUrl: './bird-update.component.html',
  styleUrls: ['./bird-update.component.css']
})
export class BirdUpdateComponent implements OnInit {

  @Input() bird: Bird;

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

  private disabled: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerService, private birdService: BirdService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.GetBird();
    this.apiService.GetAllOwners().subscribe((res) => this.ownerOptions = res);
  }

  GetBird(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.birdService.GetBird(id).subscribe(bird => {
      this.bird = bird,
        console.log(this.bird);
    }
    );
  }

  SaveBird(): void {
    
    let changeBirdVM: ChangeBird = {
      ringnummer: this.bird.ringnummer,
      kotnummer: this.bird.kotnummer,
      eigenaarID: this.bird.eigenaarID,
      kweker: this.bird.kweker,
      omschrijving: this.bird.omschrijving
    };

    console.log(changeBirdVM);

    this.birdService.UpdateBird(this.bird.id, changeBirdVM).subscribe(res => {
      this.router.navigate(['/birds']);
      alert("Update Succesfull!");
    }, err => alert(err));
    // this.ownerService.GetAllOwners(this.bird.ownerFullName).subscribe(result => {

    //   if(result.length == 0){
    //     alert("De eigenaar bestaat niet!");
    //     return;
    //   }

    //   var owner: Owner = result[0];
    //   this.bird.eigenaarID = owner.ID;
    //   this.bird.eigenaar = owner;

    //   console.log(this.bird.eigenaarID);
    //   console.log(owner);

    //   this.birdService.UpdateBird(this.bird).subscribe(res => {
    //     this.router.navigate(['/birds']);
    //     console.log("Update Succesfull!");
    //   }),
    //   console.error();
    //   ;
    // });
  }

  get Ringnummer() {
    return this.ringnummer;
  }

  set Ringnummer(value: string) {
    this.ringnummer = value.toUpperCase();
  }

  get Geslacht() {
    return this.geslacht;
  }

  set Geslacht(value: string) {
    this.geslacht = value;
  }

  get Soort() {
    return this.soort;
  }

  set Soort(value: string) {
    this.soort = value;
  }

  get Jaartal() {
    return this.jaartal;
  }

  set Jaartal(value: number) {
    this.jaartal = value;
  }

  get Kotnummer() {
    return this.kotnummer;
  }

  set Kotnummer(value: number) {
    this.kotnummer = value;
  }

  get EigenaarID() {
    return this.eigenaarID;
  }

  set EigenaarID(value: number) {
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
