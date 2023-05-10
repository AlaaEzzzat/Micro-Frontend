import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExComponent } from './ex/ex.component';

const routes: Routes = [{ path: '', component: ExComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
