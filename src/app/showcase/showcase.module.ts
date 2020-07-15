import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ShowcaseRoutingModule} from './showcase-routing.module';
import {ShowcaseComponent} from './showcase.component';
import {ProjectService} from './project.service';


@NgModule({
  declarations: [ShowcaseComponent],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService]
})
export class ShowcaseModule {
}
