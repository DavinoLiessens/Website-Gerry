import { Component, OnInit } from '@angular/core';
import { ApiService, Owner } from '../Services/api.service';
import { OwnerService } from '../Services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  owners: Owner[];
  items: number[];
  sortItems: string[];

  constructor(private apiService: ApiService, private ownerService: OwnerService) { 
    this.items = [5,10,15,20,25,50,100];
    this.sortItems = ["Alles", "Voornaam", "Achternaam"];
  }

  ngOnInit(): void {
    this.GetAllOwners();
  }

  GetAllOwners(){
    try{
      this.ownerService.GetAllOwners().subscribe((res) => this.owners = res);
    }
    catch{
      alert("Er was een probleem.");
    }
  }

  DeleteOwner(id: number){
    if(confirm("Ben je zeker dat je dit item wilt verwijderen?")){
      this.ownerService.DeleteOwner(id).subscribe(result => {
        this.GetAllOwners();
      });
    }
    else{
      alert("Het item is niet verwijderd!");
    }
  }

  get SearchName() {
    return this.apiService.searchnameOwner;
  }

  set SearchName(value: string){
    this.apiService.searchnameOwner = value;
    this.apiService.GetAllOwners().subscribe(result => {
      this.owners = result;
    },
    error => console.log(error));
  }

  get NoOwners(){
    return this.apiService.noOwners;
  }

  set NoOwners(value: number){
    this.apiService.noOwners = value;
    this.apiService.GetAllOwners().subscribe((res) => this.owners = res);
  }

  get SortItemOwners(){
    return this.apiService.sortItemOwners;
  }

  set SortItemOwners(value: string){
    if(value == "Alles"){
      this.apiService.sortItemOwners = '';
    }
    else{
      this.apiService.sortItemOwners = value.toLocaleLowerCase();
    }

    this.apiService.GetAllOwners().subscribe(result => {
      this.owners = result;
    },
    error => {
      console.log(error);
    });    
  }

  ClearFilters(){
    this.apiService.searchnameOwner = '';
    this.apiService.sortItemOwners = 'Alles';
    this.apiService.noOwners = 10;
    
    this.apiService.GetAllOwners().subscribe(result => {
      this.owners = result;
    }, error =>
    console.log("Er liep iets mis!", error));
  }

}
