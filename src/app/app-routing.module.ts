import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassTableComponent } from './class-table/class-table.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '', 
  component: HeaderComponent, 
  children: [
    { path: 'home', component: ClassTableComponent},
    
  ]},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
