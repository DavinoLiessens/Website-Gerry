import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
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
