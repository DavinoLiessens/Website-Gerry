import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private _http: HttpClient) { }

  GetAllBirds(){
      return this._http.get("http://localhost:4000/api/v1/birds");
  }

}

export interface IBird{
  id: number;
  ringnumber: number;
  geslacht: string;
  typeOfBird: string;
  age: number;
  cageNumber: number;
  ownerID: number;
  owner: IOwner;
}

export interface IOwner{
  id: number;
  firstname: string;
  lastname: string;
}
