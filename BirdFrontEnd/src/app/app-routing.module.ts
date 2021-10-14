import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdCreateComponent } from './bird/bird-create/bird-create.component';
import { BirdDetailComponent } from './bird/bird-detail/bird-detail.component';
import { BirdUpdateComponent } from './bird/bird-update/bird-update.component';
import { BirdComponent } from './bird/bird.component';
import { CoupleCreateComponent } from './couple/couple-create/couple-create.component';
import { CoupleDetailComponent } from './couple/couple-detail/couple-detail.component';
import { CoupleComponent } from './couple/couple.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerDetailComponent } from './owner/owner-detail/owner-detail.component';
import { OwnerUpdateComponent } from './owner/owner-update/owner-update.component';
import { OwnerComponent } from './owner/owner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // BIRD
  {path: "birds", component: BirdComponent},  
  {path: "birds/create", component: BirdCreateComponent},
  {path: "birds/update/:id", component: BirdUpdateComponent},
  {path: "birds/:id", component: BirdDetailComponent},

  // OWNER
  {path: "owners", component: OwnerComponent},
  {path: "owners/create", component: OwnerCreateComponent},
  // {path: "owners/update/:id", component: OwnerUpdateComponent},
  {path: "owners/:id", component: OwnerDetailComponent},

  // COUPLE
  {path: "couples", component: CoupleComponent},
  {path: "couples/create", component: CoupleCreateComponent},
  {path: "couples/detail/:id", component: CoupleDetailComponent},
  
  // PAGE NOT FOUND
  {path: "signout", component: PageNotFoundComponent},
  {path: "*", component: PageNotFoundComponent},

  // OTHER  
  {path: "", redirectTo: "birds", pathMatch: "full"}
];
/*
    /birds
    /birds/:id
    /birds/create
    /birds/update/:id

    /owners
    /owners/:id
    /owners/create
    /owners/update/:id ?? niet echt nodig, beter verwijderen en nieuwe aanmaken.

    /* -> PageNotFound component aanmaken
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
