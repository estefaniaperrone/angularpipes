import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  nameControl = new FormControl(null, [Validators.required]);
  surnameControl = new FormControl();
  phoneControl =new FormControl();
  direccionControl = new FormControl();
  


  

userForm = new FormGroup({
  name: this.nameControl,
  surname: this.surnameControl,
  direccion: this.direccionControl,
  cel: this.phoneControl
});

onSubmit(): void{
  alert(JSON.stringify(this.userForm.value));
}
}



