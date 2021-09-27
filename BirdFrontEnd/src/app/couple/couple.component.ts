import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Bird } from '../Services/api.service';
import { BirdService } from '../Services/bird.service';

@Component({
  selector: 'app-couple',
  templateUrl: './couple.component.html',
  styleUrls: ['./couple.component.css']
})
export class CoupleComponent implements OnInit {

  constructor() {}

  ngOnInit() : void{
    
  }
}
