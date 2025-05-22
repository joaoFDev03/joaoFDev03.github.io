import { Routes } from '@angular/router';
import { LandingpageComponent } from './features/landingpage/landingpage.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
    },
    {
        path: 'contacts',
        loadChildren: () => import('./features/contacts/contacts.routes').then(m => m.CONTACTS_ROUTES)
    },
    {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.routes').then(m => m.PROJECTS_ROUTES)
    },
    {
        path:'about',
        loadChildren: () => import('./features/about/about.routes').then(m => m.ABOUT_ROUTES)
    }
];

