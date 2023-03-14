import { Injectable } from '@angular/core';
import { Class } from "../model/class";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  classes = [
    {
      name:"Graphics",
      teacher:"Kyle",
      maxNoOfStudents:10,
      students:[
        {
          name:"John"
        }, 
        {
          name:"Beth"
        }, 
        {
          name:"Mike"
        }
      ]
    },
    {
      name:"Mechatronics",
      teacher:"Allen",
      maxNoOfStudents:15,
      students:[
        {
          name:"Stewie"
        }, 
        {
          name:"Chris"
        }, 
        {
          name:"Peter"
        }, 
        {
          name:"Brian"
        }
      ]
    },
    {
      name:"Robotics",
      teacher:"Anna",
      maxNoOfStudents:5,
      students:[
        {
          name:"Andrew"
        }, 
        {
          name:"Leia"
        }
      ]
    }
  ];

  filteredClasses: any[] = [];

  constructor() { 
    this.filteredClasses = this.classes; 
  }

  getClasses() {
    return this.classes;
  }

  removeClass(className: any) {
    const index = this.classes.findIndex(c => c.name === className);
    if (index >0) {
      this.classes.splice(index, 1);
      console.log('clasa a fost stearsa')
    }
  }

  addStudent(className: string, newStudent: string) {
    const index = this.classes.findIndex(c => c.name === className);
    if (index !== -1 && this.classes[index].students.length < this.classes[index].maxNoOfStudents) {
      this.classes[index].students.push({ name: newStudent });
    }
    console.log('Studentul a fost adaugat')
  }

 
}
