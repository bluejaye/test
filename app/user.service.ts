import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import 'rxjs/add/operator/map'

export interface User{
    username: string;
    email:string;
}

@Injectable()
export class UserService{
    /**
     *
     */
    constructor(private _http:Http) {
    }
    getUsers(){
        var url = 'http://jsonplaceholder.typicode.com/users';
        return this._http.get(url)
            .map(user=>user.json);
    }
}