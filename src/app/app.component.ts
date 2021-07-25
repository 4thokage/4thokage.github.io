import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';

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
