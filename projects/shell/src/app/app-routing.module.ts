import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell1Component } from './shell1/shell1.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'shell1',
    component: Shell1Component,
  },
  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Module').then((m) => m.AppModule),
  },
  {
    path: 'mfe2',
    loadChildren: () => import('mfe2/Module').then((m) => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
