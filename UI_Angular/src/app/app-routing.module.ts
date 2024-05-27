import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainPageComponent } from "./pages/main-page/main-page.component";
import { AddRecordPageComponent } from "./pages/add-record-page/add-record-page.component";
import { routesWithoutLeadingSlash as routesPaths } from "./pages/routes";

const routes: Routes = [
  { path: routesPaths.main, component: MainPageComponent },
  { path: routesPaths.addRecord, component: AddRecordPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
