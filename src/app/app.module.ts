import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { UserEditDialogComponent } from './user/user-edit-dialog/user-edit-dialog.component';
import { UserCreateDialogComponent } from './user/user-create-dialog/user-create-dialog.component';
import { SharedModule } from './shared/shared.module';
import { BalanceComponent } from './balance/balance.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'balance', component: BalanceComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditDialogComponent,
    UserCreateDialogComponent,
    BalanceComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    AppMaterialModule,
    SharedModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UserEditDialogComponent,
    UserCreateDialogComponent
  ]
})
export class AppModule { }
