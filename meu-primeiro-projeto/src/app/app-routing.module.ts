import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './routes/pages/home/home.component';
import { SobreComponent } from './routes/pages/sobre/sobre.component';
import { PageErrorComponent } from './routes/pages/page-error/page-error.component';

// Routes Guards
import { RoutesGuardsComponent } from './routes-guards/routes-guards.component';

const routes: Routes = [
  /* {path: "home", component: HomeComponent},
  {path: "sobre", component: SobreComponent, children: [
    {path: ":victor", component: SobreComponent},
  ]},
  {
    path: "dashboard", 
    loadChildren: () => import('./routes/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {path: "404", component: PageErrorComponent},
  {path: "**", redirectTo: "404"}, */
  {
    path: 'routes-guards', 
    loadChildren: () => import('./routes-guards/routes-guards.module').then(m => m.RoutesGuardsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
