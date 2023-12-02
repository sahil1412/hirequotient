import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{NgxPaginationModule} from 'ngx-pagination'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import{FormsModule,NgForm} from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    {provide: String, useValue: "dummy"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
