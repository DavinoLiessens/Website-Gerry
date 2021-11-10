import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ApiService, Bird, Couple } from '../Services/api.service';
import { BirdService } from '../Services/bird.service';

@Component({
  selector: 'app-couple',
  templateUrl: './couple.component.html',
  styleUrls: ['./couple.component.css']
})
export class CoupleComponent implements OnInit {

  couples: Couple[];
  couple: Couple;
  constructor(private apiService: ApiService) {}

  ngOnInit() : void{
    this.GetAllCouples();
  }

  GetAllCouples(){
    try{
      this.apiService.GetAllCouples().subscribe( res => {
        this.couples = res;
        console.log(this.couples);
      });
    }
    catch{
      alert("Er was een probleem bij het ophalen van de stambomen!");
    }
  }

  DeleteCouple(id: number){
    if(confirm("Ben je zeker dat je deze stamboom wilt verwijderen?")){
      this.apiService.DeleteCouple(id).subscribe(res => {
        this.GetAllCouples();
      });
    }
    else{
      alert("De stamboom is niet verwijderd!");
    }
  }
}
