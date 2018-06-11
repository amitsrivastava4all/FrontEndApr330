import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import {ErrorComponent} from './error/error.component';
import {OfficeComponent} from './office/office.component';
import {CorpofficeComponent} from './corpoffice/corpoffice.component';
export const route:Routes=[
  {path: '', component:HomeComponent},
  {path: 'aboutus/:name/:job', component:AboutusComponent},
  {path: 'news/:type/:subtype', component: NewsComponent},
  {path: 'contactus', component: ContactusComponent,children:[
    {path:'office',component:OfficeComponent},
    {path:'corporateoffice',component:CorpofficeComponent}
  ]},
  {path:'error' , component:ErrorComponent},
  {path:'**',redirectTo:'error'}
];
