import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pages
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    PageErrorComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    SobreComponent,
    PageErrorComponent,
    MenuComponent
  ]
})
export class RoutesModule { }
