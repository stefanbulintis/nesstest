import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassTableComponent } from './class-table/class-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { FormsModule } from '@angular/forms';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component';
import { SearchComponent } from './class-table/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassTableComponent,
    HeaderComponent,
    OccupancyComponent,
    SearchComponent,
    AddStudentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
