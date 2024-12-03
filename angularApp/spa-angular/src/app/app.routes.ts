import { Routes } from '@angular/router';
import { FakultasComponent } from './components/fakultas/fakultas.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'fakultas', component: FakultasComponent }
];