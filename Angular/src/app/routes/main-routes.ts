import { AdministrationComponent } from "../screens/administration/administration.component";
import { RegistrationComponent } from "../screens/registration/registration.component";
import { WelcomeComponent } from "../screens/welcome/welcome.component";


export const mainRoutes = [
  { 
    path: '', 
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'registration', 
    component: RegistrationComponent,
    pathMatch: 'full'
  },
  {
    path: 'administration',
    component : AdministrationComponent
  }
]