import { Component, OnInit } from '@angular/core';
import { users } from 'src/db/data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = users;

  constructor() { }

  ngOnInit(): void {
  }

}
