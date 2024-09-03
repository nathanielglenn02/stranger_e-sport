import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'achievements/:gameId',
    loadChildren: () => import('./home/games/achievement/achievement.module').then(m => m.AchievementPageModule)
  },
  {
    path: 'teams/:gameId',
    loadChildren: () => import('./home/games/teams/teams.module').then(m => m.TeamsPageModule)
  },
  {
    path: 'our-schedule',
    loadChildren: () => import('./home/schedule/schedule.module').then(m => m.SchedulePageModule)
  },
  {
    path: 'schedule-detail/:eventId',
    loadChildren: () => import('./home/schedule/schedule-detail/schedule-detail.module').then(m => m.ScheduleDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
