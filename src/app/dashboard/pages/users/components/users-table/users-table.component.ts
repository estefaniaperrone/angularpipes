import { Component } from '@angular/core';
import { User } from '../../models';


const ELEMENT_DATA: User[] = [{
  id:1,
  name:'Estefania',
  surname:'Perrone',
  direccion:'leadnro gomez',
  phone: 99988,
}
];


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['id', 'fullname', 'direccion', 'phone'];
  dataSource = ELEMENT_DATA;
}
