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
      this.sortItems = ["Alles", "Eigenaar", "Ringnummer", "Kotnummer", "Soort"];
    }

    ngOnInit() {
      this.GetAllBirds();    
    }


    GetAllBirds(){
      try{
        this.birdService.GetAllBirds().subscribe((res) => {
          this.birds = res;
        });
        
      }
      catch{
        alert("Er was een probleem bij het ophalen van alle vogels!");
      }
    }

    DeleteBird(id: number){
      this.birdService.DeleteBird(id).subscribe(result => {
        this.GetAllBirds();
      });
    }

    get SearchName() {
      return this.apiService.searchnameBird;
    }
  
    set SearchName(value: string){
      this.apiService.searchnameBird = value;
      this.apiService.GetAllBirds().subscribe(result => {
        this.birds = result;
      },
      error => console.log(error));
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
      })
    }

    get SortItemBirds() {
      return this.apiService.sortItemBirds;
    }
  
    set SortItemBirds(value: string){
      if(value == "Alles"){
        this.apiService.sortItemBirds = '';
      }
      else{
        this.apiService.sortItemBirds = value.toLocaleLowerCase();
      }
      
      console.log(this.apiService.sortItemBirds.toLocaleLowerCase());
      this.apiService.GetAllBirds().subscribe(result => {
        this.birds = result;
      },
      error => {
        console.log(error);
      });
    }

    get RingNumber(){
      return this.apiService.ringNumber;
    }

    set RingNumber(value: number){
      this.apiService.ringNumber = value;

      this.apiService.GetAllBirdsWithRingNumber().subscribe(result => {
        this.birds = result;
      },
      error => {
        console.log(error);
      });
    }

    get KotNumber(){
      return this.apiService.kotNumber;
    }

    set KotNumber(value: number){
      this.apiService.kotNumber = value;

      this.apiService.GetAllBirdsWithKotNumber().subscribe(result => {
        this.birds = result;
      },
      error => {
        console.log(error);
      });
    }

    ClearFilters(){
      this.apiService.searchnameBird = '';
      this.apiService.sortItemBirds = 'Alles';
      this.apiService.kotNumber = null;
      this.apiService.ringNumber = null;
      this.apiService.noBirds = 10;
      
      this.apiService.GetAllBirds().subscribe(result => {
        this.birds = result;
      }, error =>
      console.log("Er liep iets mis!", error));
    }
}
