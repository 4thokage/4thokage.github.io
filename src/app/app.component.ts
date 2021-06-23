import {Component, HostListener} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  private currentNavigationId = 0;
  private isReady = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){

        console.log(event.urlAfterRedirects);
        gtag('config', 'G-04P2RSXZYB', {page_path: event.urlAfterRedirects});
      }
    });
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ('j' === event.key) {
      this.navigateForward();
    }
    else if ('k' === event.key) {
      this.navigateBackward();
    }
  }

  private navigateForward() {
    ++this.currentNavigationId;
    if (this.currentNavigationId > 2) {
      this.currentNavigationId = 0;
    }
    const aux = this.router.config[this.currentNavigationId].path;
    this.router.navigate([aux]).then(r => this.isReady = r);
  }

  private navigateBackward() {
    --this.currentNavigationId;
    if (this.currentNavigationId < 0) {
      this.currentNavigationId = 2;
    }
    const aux = this.router.config[this.currentNavigationId].path;
    this.router.navigate([aux]).then(r => this.isReady = r);
  }
}
