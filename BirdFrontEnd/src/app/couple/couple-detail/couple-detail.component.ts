import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { ApiService, Bird, Couple } from 'src/app/Services/api.service';

@Component({
  selector: 'app-couple-detail',
  templateUrl: './couple-detail.component.html',
  styleUrls: ['./couple-detail.component.css']
})
export class CoupleDetailComponent implements OnInit {

  @Input() coupleDetail: Couple;

  updateCouple: Couple;

  couples: TreeNode[];
  disabled: boolean = true;
  birds: Bird[];
  
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.apiService.GetAllBirds().subscribe(res => this.birds = res);
    this.GetCouple();
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
              label: '', type: 'parentright',
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

  UpdateTree(){
    try{
      this.updateCouple = {
        name: this.coupleDetail.name,
        father: this.coupleDetail.father,
        mother: this.coupleDetail.mother,
        child1: this.coupleDetail.child1,
        child2: this.coupleDetail.child2,
        child3: this.coupleDetail.child3,
        child4: this.coupleDetail.child4,
        child5: this.coupleDetail.child5,
        child6: this.coupleDetail.child6,
        description: this.coupleDetail.description
      };

      this.apiService.UpdateCouple(this.coupleDetail.id, this.updateCouple).subscribe(res => {
        this.router.navigate(['/couples']);
        alert("Update Succesfull!");
      });
    }
    catch{
      alert("Het wijzigen van de stamboom is mislukt!");
    }
  }

  GetCouple(){
    try{
      const id = +this.route.snapshot.paramMap.get('id');
      this.apiService.GetCouple(id).subscribe( res => {
        this.coupleDetail = res;
        console.log(this.coupleDetail);
      });
    }
    catch{
      alert("Er is een probleem met het ophalen van dit koppel.\n Probeer het opnieuw");
    }
  }

  get CoupleName(){
    return this.coupleDetail.name;
  }

  set CoupleName(value: string){
    this.coupleDetail.name = value;
  }

  get ParentLeft(){
    return this.coupleDetail.father;
  }

  set ParentLeft(value: string){
    this.coupleDetail.father = value;
  }

  get ParentRight(){
    return this.coupleDetail.mother;
  }

  set ParentRight(value: string){
    this.coupleDetail.mother = value;
  }

  get ChildLeft1(){
    return this.coupleDetail.child1;
  }

  set ChildLeft1(value: string){
    this.coupleDetail.child1 = value;
  }

  get ChildLeft2(){
    return this.coupleDetail.child2;
  }

  set ChildLeft2(value: string){
    this.coupleDetail.child2 = value;
  }

  get ChildLeft3(){
    return this.coupleDetail.child3;
  }

  set ChildLeft3(value: string){
    this.coupleDetail.child3 = value;
  }

  get ChildLeft4(){
    return this.coupleDetail.child4;
  }

  set ChildLeft4(value: string){
    this.coupleDetail.child4 = value;
  }

  get ChildLeft5(){
    return this.coupleDetail.child5;
  }

  set ChildLeft5(value: string){
    this.coupleDetail.child5 = value;
  }

  get ChildLeft6(){
    return this.coupleDetail.child6;
  }

  set ChildLeft6(value: string){
    this.coupleDetail.child6 = value;
  }

  get Description(){
    return this.coupleDetail.description;
  }

  set Description(value: string){
    this.coupleDetail.description = value;
  }
}
