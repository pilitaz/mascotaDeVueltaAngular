import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PetreportComponent } from './components/petreport/petreport.component';
import { PetfindingComponent } from './components/petfinding/petfinding.component';
import { SuccessstoriesComponent } from './components/successstories/successstories.component';
import { PetComponent } from './components/pet/pet.component';
import { RegistryComponent } from './components/registry/registry.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetreportComponent,
    PetfindingComponent,
    SuccessstoriesComponent,
    PetComponent,
    RegistryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
