import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs/operators";

import { routesPaths } from "../../pages/routes";

@Component({
  selector: "app-navigation-menu",
  templateUrl: "./navigation-menu.component.html",
  styleUrl: "./navigation-menu.component.css"
})
export class NavigationMenuComponent {
  currentPath: string = "";
  routesPaths = routesPaths;

  constructor(private router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.url;
      });
  }

  navigateToMainPage(event: MouseEvent) {
    this.router.navigate([routesPaths.main]);
  }

  navigateToAddRecordPage(event: MouseEvent) {
    this.router.navigate([routesPaths.addRecord]);
  }
}
