import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInitComponent } from './components/on-init/on-init.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { DoCheckComponent } from './components/do-check/do-check.component';
import { OnDestroyComponent } from './components/on-destroy/on-destroy.component';
import { TitleComponent } from './components/on-destroy/title/title.component';



@NgModule({
  declarations: [
    OnInitComponent,
    OnChangesComponent,
    DoCheckComponent,
    OnDestroyComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OnInitComponent,
    OnChangesComponent,
    DoCheckComponent,
    OnDestroyComponent
  ]
})
export class CicloDeVidaComponentesModule { }
