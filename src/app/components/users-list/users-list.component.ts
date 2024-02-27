import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {UsersList} from "../../data/users-list";
import {Iuser} from "../../interfaces/user/user.interface";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatTableModule,],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  userslist: Iuser[] = UsersList;

  displayedColumns: string[] = ['name', 'date', 'status'];
  dataSource = UsersList;

  onUsersSelected(user:Iuser){
    console.log(user);
  }
}
