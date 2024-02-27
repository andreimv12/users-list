import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-user-datails',
  standalone: true,
  imports: [MatListModule,MatDividerModule],
  templateUrl: './user-datails.component.html',
  styleUrl: './user-datails.component.scss'
})
export class UserDatailsComponent {

}
