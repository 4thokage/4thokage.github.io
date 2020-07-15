import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main id="home" class="container-center">
      <h1>
        José
        <span>Rodrigues</span>
      </h1>
      <div class="half-opaque">
        <h2>
          Web Developer & Java nerd.
        </h2>
        <em>You can use j and k to navigate between pages</em>
      </div>
      <div class="icons">
        <svg accesskey="g" role="button" xmlns="http://www.w3.org/2000/svg"
             (click)="onIconClicked('https://www.github.com/4thokage')">
          <title>Github</title>
          <use xlink:href="assets/icons/icons.svg#github"></use>
        </svg>
        <svg accesskey="c" role="button" xmlns="http://www.w3.org/2000/svg"
             (click)="onIconClicked('https://jose-rodrigues.info/cv')">
          <title>Curriculum Vitae</title>
          <use xlink:href="assets/icons/icons.svg#cv"></use>
        </svg>
        <svg accesskey="b" role="button" xmlns="http://www.w3.org/2000/svg"
             (click)="onIconClicked('https://blog.jose-rodrigues.info')">
          <title>Blog</title>
          <use xlink:href="assets/icons/icons.svg#blog"></use>
        </svg>
        <svg accesskey="l" role="button" xmlns="http://www.w3.org/2000/svg"
             (click)="onIconClicked('https://www.linkedin.com/in/jos%C3%A9-rodrigues-b4b526b2')">
          <title>Linkedin</title>
          <use xlink:href="assets/icons/icons.svg#linkedin"></use>
        </svg>
      </div>
    </main>
  `,
})
export class HomeComponent {

  onIconClicked(iconEndpoint: string) {
    window.location.href = iconEndpoint;
  }
}
