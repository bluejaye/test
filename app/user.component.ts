import {Component, OnInit} from 'angular2/core';
import {UserService} from './user.service';

@Component({
    selector:'route-outlet',
    templateUrl:'/app/user.component.html',
    providers: [UserService]
})
export class UserComponent implements OnInit{
    userList;
    /**
     *
     */
    constructor(private _user:UserService) {
    }
    
    ngOnInit(){
        this._user.getUsers()
            .subscribe(users=>this.userList = users);
    }
}