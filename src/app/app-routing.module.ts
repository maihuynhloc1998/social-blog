import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadComponent: () => import("./core/auth/auth.component").then((m) => m.AuthComponent)
  },
  {
    path: "register",
    loadComponent: () =>
      import("./core/auth/auth.component").then((m) => m.AuthComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
