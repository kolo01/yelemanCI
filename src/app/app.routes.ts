import { Routes } from '@angular/router';
import { AllHouseComponent } from './pages/general/details/all-house/all-house.component';
import { HouseComponent } from './pages/general/details/house/house.component';

export const routes: Routes = [
  { path: 'details', component: AllHouseComponent },
  { path: 'details/house/:slug', component: HouseComponent },
];
