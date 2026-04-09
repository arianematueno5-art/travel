import { Routes } from '@angular/router';

import { Main }    from './components/main/main';
import { Service } from './components/service/service';
import { About }   from './components/about/about';
import { Contact} from './components/contact/contact';

export const routes: Routes = [
    
  // Route par défaut : quand l'URL est "/" (page d'accueil)
  { path: '', component: Main },

  // Page service → localhost:4200/service
  { path: 'service',  component: Service },

  // Page about → localhost:4200/about
  { path: 'about',    component: About },

  // Page contact → localhost:4200/contact
  { path: 'contact',  component: Contact },

  // Route wildcard : si l'URL n'existe pas → redirige vers l'accueil
  { path: '**', redirectTo: '' },
];
