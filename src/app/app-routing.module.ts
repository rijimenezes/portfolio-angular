import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent    
  },
  
  {
    path: 'management',
    loadChildren: () => import('./management/management.module').then( m => m.ManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
