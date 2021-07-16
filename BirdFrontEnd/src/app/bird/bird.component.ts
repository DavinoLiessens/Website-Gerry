import { Component, OnInit } from '@angular/core';
import { ApiService, Bird } from '../Services/api.service';
import { BirdService } from '../Services/bird.service';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

    birds: Bird[];
    items: number[];
    sortItems: string[];

    constructor(private birdService: BirdService, private apiService: ApiService) { 
      this.items = [5,10,15,20,25,50,100];
      this.sortItems = ["Alles", "Eigenaar"];
    }

    ngOnInit() {
      this.GetAllBirds();    
    }


    GetAllBirds(){
      try{
        console.log("Alle vogels ophalen.");
        this.apiService.GetAllBirds().subscribe((res) => this.birds = res);
      }
      catch{
        console.log("Er was een probleem");
      }
    }

    get SearchName() {
      return this.birdService.SearchName;
    }
  
    set SearchName(value: string){
      this.birdService.SearchName = value;
      this.apiService.GetAllBirds(value).subscribe(result => {
        this.birds = result;
      },
      error => {
        console.log(error);
        this.apiService.GetAllBirds().subscribe(result => {
          this.birds = result;
        });
      })
    }

    get NoBirds() {
      return this.apiService.noBirds;
    }
  
    set NoBirds(value: number){
      this.apiService.noBirds = value;
      this.apiService.GetAllBirds().subscribe(result => {
        this.birds = result;
      },
      error => {
        console.log(error);
        this.apiService.GetAllBirds().subscribe(result => {
          this.birds   = result;
        });
      })
    }
}
