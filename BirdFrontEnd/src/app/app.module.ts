// *** MODULES ***
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { CheckboxModule } from 'primeng/checkbox';

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
import { CoupleComponent } from './couple/couple.component';
import { CoupleCreateComponent } from './couple/couple-create/couple-create.component';
import { CoupleDetailComponent } from './couple/couple-detail/couple-detail.component';

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
    PageNotFoundComponent,
    CoupleComponent,
    CoupleCreateComponent,
    CoupleDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    VirtualScrollerModule,
    FormsModule,
    InputTextModule,
    DropdownModule, 
    PanelModule,
    InputTextareaModule,
    OrganizationChartModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
