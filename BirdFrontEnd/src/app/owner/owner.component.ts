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
    this.sortItems = ["Alles", "Voornaam"];
  }

  public noOwners: number = this.ownerService.noOwners;
  public sortItemOwners: string = this.ownerService.sortItemOwners;

  ngOnInit(): void {
    this.GetAllOwners();
  }

  GetAllOwners(){
    try{
      console.log("Eigenaars ophalen.");
      this.ownerService.GetAllOwners().subscribe((res) => this.owners = res);
    }
    catch{
      console.log("Er was eenprobleem.");
    }
  }

  DeleteOwner(id: number){
    this.ownerService.DeleteOwner(id).subscribe(result => {
      console.log("Item verwijderd!");
      this.GetAllOwners();
    });
  }

  get SearchName(){
    return this.ownerService.SearchName;
  }

  set SearchName(value: string){
    this.ownerService.SearchName = value;
    this.apiService.GetAllOwners(value).subscribe((res) => this.owners = res);
  }

  get NoOwners(){
    return this.ownerService.noOwners;
  }

  set NoOwners(value: number){
    this.ownerService.noOwners = value;
    this.apiService.GetAllOwners().subscribe((res) => this.owners = res);
  }

}
