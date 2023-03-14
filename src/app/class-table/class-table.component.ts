import { ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.scss']
})
export class ClassTableComponent implements OnInit{
  classes: any[] = [];

  constructor(private operationsService: OperationsService, public dialog: MatDialog,  private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.classes = this.operationsService.getClasses();
  }

  deleteClass(className: any) {
    this.operationsService.removeClass(className);
   
    
  }
  
  
  onSearch(searchTerm: string) {
    this.classes = this.operationsService.getClasses().filter(c => {
      return c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             c.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  openAddStudentDialog(className: string): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '250px',
      data: { className: className }
    });
  }

  
}

