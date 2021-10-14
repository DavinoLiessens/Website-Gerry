import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { ApiService, Couple } from 'src/app/Services/api.service';

@Component({
  selector: 'app-couple-detail',
  templateUrl: './couple-detail.component.html',
  styleUrls: ['./couple-detail.component.css']
})
export class CoupleDetailComponent implements OnInit {

  @Input() coupleDetail: Couple;

  couples: TreeNode[];
  disabled: boolean = true;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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

  get ParentLeft(){
    return this.coupleDetail.father;
  }

  get ParentRight(){
    return this.coupleDetail.mother;
  }

  get ChildLeft1(){
    return this.coupleDetail.child1;
  }

  get ChildLeft2(){
    return this.coupleDetail.child2;
  }

  get ChildLeft3(){
    return this.coupleDetail.child3;
  }

  get ChildLeft4(){
    return this.coupleDetail.child4;
  }

  get ChildLeft5(){
    return this.coupleDetail.child5;
  }

  get ChildLeft6(){
    return this.coupleDetail.child6;
  }
}
