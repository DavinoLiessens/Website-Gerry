import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Bird } from 'src/app/Services/api.service';
import { BirdService } from 'src/app/Services/bird.service';

@Component({
  selector: 'app-couple-create',
  templateUrl: './couple-create.component.html',
  styleUrls: ['./couple-create.component.css']
})
export class CoupleCreateComponent implements OnInit {

  // init private variables
  private couplename: string;  
  private parentLeft: string;
  private parentRight: string;
  private childLeft1: string;
  private childLeft2: string;
  private childLeft3: string;
  private childRight1: string;
  private childRight2: string;
  private childRight3: string;

  // create array to show tree and init all birds
  birds: Bird[];
  couples: TreeNode[];

  // create array to show only the ringnumbers of the birds
  ringnumbers: string[];

  constructor(private birdService: BirdService) { }

  ngOnInit(): void {
    this.GetAllBirds();
    this.couples = [{
      label: '', type:'name',
      expanded: true,
      children: [
          {
              label: '', type: 'parentleft',
              expanded: true,
              children: [
                  {
                      label: '', type: 'childleft1',
                  },
                  {
                      label: '', type: 'childleft2',
                  },
                  {
                      label: '', type: 'childleft3',
                  }
              ]
          },
          {
              label: 'EAR178962NR002', type: 'parentright',
              expanded: true,
              children: [
                  {
                      label: '', type: 'childright1',
                  },
                  {
                      label: '', type: 'childright2',
                  },
                  {
                      label: '', type: 'childright3',
                  }
              ]
          }
      ]
  }];
  }

  GetAllBirds(){
    try{
      this.birdService.GetAllBirds().subscribe((res) => {
        this.birds = res;
        console.log(this.birds);
      });
      
    }
    catch{
      alert("Er was een probleem bij het ophalen van alle vogels!");
      console.error();
      
    }
  }

  CreateTree() : void{

  }

  get CoupleName(){
    return this.couplename;
  }

  set CoupleName(value: string){
    this.couplename = value;
  }

  get ParentLeft(){
    return this.parentLeft;
  }

  set ParentLeft(value: string){
    this.parentLeft = value;
  }

  get ParentRight(){
    return this.parentRight;
  }

  set ParentRight(value: string){
    this.parentRight = value;
  }

  get ChildLeft1(){
    return this.childLeft1;
  }

  set ChildLeft1(value: string){
    this.childLeft1 = value;
  }

  get ChildLeft2(){
    return this.childLeft2;
  }

  set ChildLeft2(value: string){
    this.childLeft2 = value;
  }

  get ChildLeft3(){
    return this.childLeft3;
  }

  set ChildLeft3(value: string){
    this.childLeft3 = value;
  }

  get ChildRight1(){
    return this.childRight1;
  }

  set ChildRight1(value: string){
    this.childRight1 = value;
  }

  get ChildRight2(){
    return this.childRight2;
  }

  set ChildRight2(value: string){
    this.childRight2 = value;
  }
  
  get ChildRight3(){
    return this.childRight3;
  }

  set ChildRight3(value: string){
    this.childRight3 = value;
  }

}
