import { Injectable } from '@angular/core';
import { ApiService, Owner } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public Owners: Owner[];

  constructor(private apiService: ApiService) { }

  GetAllOwners(){
    this.Owners = [];
    return this.apiService.GetAllOwners();
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
