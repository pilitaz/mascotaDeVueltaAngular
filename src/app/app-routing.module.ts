import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PetComponent } from './components/pet/pet.component';
import { PetfindingComponent } from './components/petfinding/petfinding.component';
import { PetreportComponent } from './components/petreport/petreport.component';
import { RegistryComponent } from './components/registry/registry.component';
import { SuccessstoriesComponent } from './components/successstories/successstories.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'petreport',
  component: PetreportComponent
}, {
  path: 'petfinding',
  component: PetfindingComponent
}, {
  path: 'successstories',
  component: SuccessstoriesComponent
}, {
  path: 'pet',
  component: PetComponent
}, {
  path: 'registry',
  component: RegistryComponent
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
