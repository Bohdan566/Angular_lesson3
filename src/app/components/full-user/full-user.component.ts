import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { users } from 'src/db/data';
import {User} from "../../models/user";


@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  users = users;
  fullUser!: User;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((value) => {
      console.log(value.id);
      for (const user of this.users) {
        if(+value.id === user.id){
          this.fullUser = user;
          // console.log(this.fullUser);
          // console.log(typeof(+value.id));
          // console.log(typeof(user.id));
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
