import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, Bird, ChangeBird, CreateBird } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class BirdService {

  public Birds: Bird[];
  private searchName: string;

  public noBirds: number = this.apiService.noBirds;
  public sortItemBirds: string = this.apiService.sortItemBirds;

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

  CreateBird(newBird: CreateBird){
    return this.apiService.CreateBird(newBird);
  }

  UpdateBird(id: number, updateBird: ChangeBird){
    return this.apiService.UpdateBird(id, updateBird);
  }

  DeleteBird(id: number){
    return this.apiService.DeleteBird(id);
  }
}
