import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.scss']
})
export class OccupancyComponent {
  @Input() maxNoOfStudents!: number;
  @Input() students!: any[];

  get occupancyPercentage(): number {
    return Math.round((this.students.length / this.maxNoOfStudents) * 100);
  }
}
