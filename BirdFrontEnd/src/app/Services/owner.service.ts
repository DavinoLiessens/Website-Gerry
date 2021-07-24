import { Injectable } from '@angular/core';
import { ApiService, Owner } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public Owners: Owner[];
  private searchName: string;

  public noOwners: number = this.apiService.noOwners;
  public sortItemOwners: string = this.apiService.sortItemOwners;

  constructor(private apiService: ApiService) { }

  get SearchName(){
    return this.searchName;
  }

  set SearchName(value: string){
    this.searchName = value;
    this.apiService.GetAllOwners(this.searchName);
  }

  GetAllOwners(query: string = ''){
    this.Owners = [];
    return this.apiService.GetAllOwners(query);
  }

  GetOwner(id: number){
    return this.apiService.GetOwner(id);
  }

  CreateOwner(owner: Owner){
    return this.apiService.CreateOwner(owner);
  }

  UpdateOwner(owner: Owner){
    return this.apiService.UpdateOwner(owner);
  }

  DeleteOwner(id: number){
    return this.apiService.DeleteOwner(id);
  }
}
