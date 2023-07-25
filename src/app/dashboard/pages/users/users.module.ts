import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{ReactiveFormsModule} from '@angular/forms';
import { UsersTableComponent } from './components/users-table/users-table.component'
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
