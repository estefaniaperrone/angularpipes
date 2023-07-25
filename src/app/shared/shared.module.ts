import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FullNamePipe } from './pipes/full-name.pipe';



@NgModule({
  declarations: [
    FullNamePipe
  ],
  imports: [
    CommonModule,

  ],

  exports:[
    MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  FullNamePipe

],

  
})
export class SharedModule { }
