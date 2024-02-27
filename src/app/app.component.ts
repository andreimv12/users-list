import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserDatailsComponent} from "./components/user-datails/user-datails.component";
import {FilterComponent} from "./components/filter/filter.component";
import {UsersListComponent} from "./components/users-list/users-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserDatailsComponent,FilterComponent,UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
