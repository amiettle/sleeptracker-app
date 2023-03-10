import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sleep-logger',
    loadChildren: () => import('./sleep-logger/sleep-logger/sleep-logger.module').then( m => m.SleepLoggerPageModule)
  },
  {
    path: 'sleepiness-logger',
    loadChildren: () => import('./sleepiness-logger/sleepiness-logger/sleepiness-logger.module').then( m => m.SleepinessLoggerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
