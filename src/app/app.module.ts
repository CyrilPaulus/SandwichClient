import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CoreModule } from './core/core.module';
import { FormsModule }   from '@angular/forms';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: '', redirectTo:'/user', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, UserComponent]
})
export class AppModule { }
