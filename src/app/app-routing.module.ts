import { UsersScreenComponent } from './core/components-smart/users-screen/users-screen.component';
import { PathConstantSegments } from './core/constants/pathConstantSegments';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PathConstantSegments.Users,
  },
  {
    path: PathConstantSegments.Users,
    component: UsersScreenComponent
    // canActivate: [RootGuard],
    // loadChildren: () => import(`./core/core.module`).then(m => m.CoreModule),
  },
  {
    path: '**',
    redirectTo: PathConstantSegments.Users
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
