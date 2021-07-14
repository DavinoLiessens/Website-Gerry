// *** MODULES ***
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

// *** COMPONENTS ***
import { AppComponent } from './app.component';
import { BirdComponent } from './bird/bird.component';
import { BirdDetailComponent } from './bird/bird-detail/bird-detail.component';
import { BirdCreateComponent } from './bird/bird-create/bird-create.component';
import { BirdUpdateComponent } from './bird/bird-update/bird-update.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerDetailComponent } from './owner/owner-detail/owner-detail.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerUpdateComponent } from './owner/owner-update/owner-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdComponent,
    BirdDetailComponent,
    BirdCreateComponent,
    BirdUpdateComponent,
    OwnerComponent,
    OwnerDetailComponent,
    OwnerCreateComponent,
    OwnerUpdateComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
