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
    path: 'login',
    loadChildren: () => import('./home/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./home/register/register.module').then(m => m.RegisterPageModule)
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
    path: 'achievement/:idgame',
    loadChildren: () => import('./home/games/achievement/achievement.module').then(m => m.AchievementPageModule)
  },
  {
    path: 'teams/:idgame',
    loadChildren: () => import('./home/games/teams/teams.module').then(m => m.TeamsPageModule)
  },
  {
    path: 'team-member/:idteam',
    loadChildren: () => import('./home/games/teams/team-member/team-member.module')
      .then(m => m.TeamMemberPageModule)
  },

  {
    path: 'our-schedule',
    loadChildren: () => import('./home/schedule/schedule.module').then(m => m.SchedulePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'schedule_detail/:index',
    loadChildren: () => import('./home/schedule/schedule-detail/schedule-detail.module').then(m => m.ScheduleDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
