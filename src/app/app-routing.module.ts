import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },

  {
    path: 'about',
    loadChildren: () => import('./home/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./home/games/games.module').then(m => m.GamesPageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./home/games/achievement/achievement.module').then(m => m.AchievementPageModule)
  },
  {
    path: 'teams/:index',
    loadChildren: () => import('./home/games/teams/teams.module').then(m => m.TeamsPageModule)
  },
  {
    path: 'our-schedule',
    loadChildren: () => import('./home/schedule/schedule.module').then(m => m.SchedulePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
