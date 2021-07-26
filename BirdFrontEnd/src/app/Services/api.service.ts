import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // SORTING AND FILTERING AND PAGING
  public noBirds: number = 10;
  public sortItemBirds: string = 'Alles';
  public searchnameBird: string = '';

  public noOwners: number = 5;
  public sortItemOwners: string;
  public searchnameOwner: string = '';

  constructor(private _http: HttpClient) { }

  // ***** BIRD CALLS *****
  GetAllBirds() {
    //return this._http.get<Bird[]>(`http://localhost:4000/api/v1/birds?name=${query}&length=${this.noBirds}&sort=${this.sortItemBirds}`);
    return this._http.get<Bird[]>(`http://localhost:4000/api/v1/birds?owner=${this.searchnameBird}&sort=${this.sortItemBirds}&length=${this.noBirds}&dir=asc`);
    // http://localhost:4000/api/v1/birds?length=${this.noBirds}&dir=asc
  }

  GetBird(id: number) {
    return this._http.get<Bird>(`http://localhost:4000/api/v1/birds/${id}`);
  }

  CreateBird(newBird: CreateBird) {
    return this._http.post<CreateBird>(`http://localhost:4000/api/v1/birds`, newBird, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  UpdateBird(id: number, updateBird: ChangeBird) {
    return this._http.patch<ChangeBird>(`http://localhost:4000/api/v1/birds/${id}`, updateBird, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
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
  id?: number;
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
  id?: number;
  voornaam: string;
  achternaam: string;
}

export interface CreateBird{
  ringnummer: number;
  geslacht: string;
  soort: string;
  jaartal: number;
  kotnummer: number;
  eigenaarID: number;
}

export interface ChangeBird {
  ringnummer: number;
  kotnummer: number;
  eigenaarID: number;
}