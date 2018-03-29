import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';
import { LoggingService} from './logging.service';
import { HttpModule, RequestOptions} from '@angular/http';


const appRoutes:Routes=[
  {path:'directory', component:DirectoryComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
