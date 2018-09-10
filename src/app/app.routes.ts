import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MethodologyComponent } from './components/methodology/methodology.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'methodology/:id', component: MethodologyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
