import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // SORTING AND FILTERING AND PAGING
  public noBirds: number = 5;
  public sortItemBirds: string;

  public noOwners: number = 3;
  public sortItemOwners: string;

  constructor(private _http: HttpClient) { }

  // ***** BIRD CALLS *****
  GetAllBirds(query: string = '') {
    //return this._http.get<Bird[]>(`http://localhost:4000/api/v1/birds?name=${query}&length=${this.noBirds}&sort=${this.sortItemBirds}`);
    return this._http.get<Bird[]>(`http://localhost:4000/api/v1/birds?name=${query}`);
  }

  GetBird(id: number) {
    return this._http.get<Bird>(`http://localhost:4000/api/v1/birds/${id}`);
  }

  CreateBird(newBird: Bird) {
    return this._http.post<Bird>(`http://localhost:4000/api/v1/birds`, newBird, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  UpdateBird(updateBird: Bird) {
    return this._http.put<Bird>(`http://localhost:4000/api/v1/birds`, updateBird);
  }

  DeleteBird(id: number) {
    console.log(id);
    return this._http.delete<Bird>(`http://localhost:4000/api/v1/birds/${id}`);
  }

  // ***** OWNER CALLS *****
  GetAllOwners(query: string = '') {
    //return this._http.get<Bird[]>(`http://localhost:4000/api/v1/birds?name=${query}&length=${this.noOwners}&sort=${this.sortItemOwners}`);
    return this._http.get<Owner[]>(`http://localhost:4000/api/v1/owners?name=${query}`);
  }

  GetOwner(id: number) {
    return this._http.get<Owner>(`http://localhost:4000/api/v1/owners/${id}`);
  }

  CreateOwner(newOwner: Owner) {
    return this._http.post<Owner>(`http://localhost:4000/api/v1/owners`, newOwner, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  UpdateOwner(updateOwner: Owner) {
    return this._http.put<Owner>(`http://localhost:4000/api/v1/owners`, updateOwner);
  }

  DeleteOwner(id: number) {
    console.log(id);
    return this._http.delete<Owner>(`http://localhost:4000/api/v1/owners/${id}`);
  }  
}

export interface Bird{
  ID?: number;
  ringnummer: number;
  geslacht: string;
  soort: string;
  jaartal: number;
  kotnummer: number;
  ownerFullName: string;
  eigenaarID: number;
  eigenaar?: Owner;
}

export interface Owner{
  ID?: number;
  voornaam: string;
  achternaam: string;
}
