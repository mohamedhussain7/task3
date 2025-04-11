import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManComponent } from './pages/man/man.component';
import { WomenComponent } from './pages/women/women.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"man",component:ManComponent},
  {path:"women",component:WomenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
