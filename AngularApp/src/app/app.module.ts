import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { ShowreviewComponent } from './showreview/showreview.component';
import { AddbothComponent } from './addboth/addboth.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DashboardComponent,
    UpdateComponent,
    AddreviewComponent,
    ShowreviewComponent,
    AddbothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
