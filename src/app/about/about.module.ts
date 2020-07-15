import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {HttpClientModule} from '@angular/common/http';
import {JobService} from './job.service';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule
  ],
  providers: [JobService]
})
export class AboutModule {
}
