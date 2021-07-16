import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, Bird } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class BirdService {

  public Birds: Bird[];
  private searchName: string;

  constructor(private _http: HttpClient, private apiService: ApiService) { }

  get SearchName(){
    return this.searchName;
  }

  set SearchName(value: string){
    this.searchName = value;
    this.apiService.GetAllBirds(this.searchName);
  }

  GetAllBirds(){
      this.Birds = [];
      return this.apiService.GetAllBirds(this.searchName);
  }

  GetBird(id: number){
    return this.apiService.GetBird(id);
  }

  CreateBird(newBird: Bird){
    return this.apiService.CreateBird(newBird);
  }

  UpdateBird(updateBird: Bird){
    return this.apiService.UpdateBird(updateBird);
  }

  DeleteBird(id: number){
    return this.apiService.DeleteBird(id);
  }
}
