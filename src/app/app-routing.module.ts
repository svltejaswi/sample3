import { NgModule } from '@angular/core';
import { Route,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NopageComponent } from './nopage/nopage.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';


const routes: Route[] = [
{path:''    ,redirectTo: '/home', pathMatch:'full'},
{path: 'home',component:HomeComponent},
{path:'settings',
component:SettingsComponent,
children:[
{path:'profile',component:ProfileComponent},
{path:'contact',component:ContactComponent},
]

},
{path:'**',component:NopageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
