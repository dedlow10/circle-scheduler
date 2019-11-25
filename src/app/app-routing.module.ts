import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulingComponent } from './scheduling/scheduling.component';


const routes: Routes = [
  {
    path: '',
    component: SchedulingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
