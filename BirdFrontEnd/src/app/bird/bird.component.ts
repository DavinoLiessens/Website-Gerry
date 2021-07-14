import { Component, OnInit } from '@angular/core';
import { BirdService } from '../Services/bird.service';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

    birds: IBird[];

    loading: boolean = true;

    constructor(private birdService: BirdService) { }

    ngOnInit() {
      this.GetAllBirds();
    }


    GetAllBirds(){
      try{
        console.log("Alle vogels ophalen.");
        this.birdService.GetAllBirds().subscribe((res) => console.log(res));
        console.log("Info is opgehaald.");
      }
      catch{
        console.log("Er was een probleem");
      }
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
