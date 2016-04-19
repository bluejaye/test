import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HomeComponent} from './home.component';
import {UserComponent} from './user.component';
import {PostComponent} from './post.component';
import {NavBarComponent} from './navbar.component';


@RouteConfig([
    {path:'/', name:'Home', component:HomeComponent, useAsDefault:true},
    {path:'/user', name:'User', component:UserComponent},
    {path:'/post', name:'Post', component:PostComponent},
    {path:'/*other', name:'Other', redirectTo:['Home']}
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives:[ROUTER_DIRECTIVES, NavBarComponent]
})
export class AppComponent {
}
