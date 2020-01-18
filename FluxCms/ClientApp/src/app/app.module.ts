import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpRequest, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from 'ng2-charts';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService as AuthGuard } from './helpers/auth.guard';
import { PostsComponent } from './posts/posts.component';
import { EntriesComponent } from './entries/entries.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages/pages.component';
import { CommentsComponent } from './comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavMenuComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    PostsComponent,
    EntriesComponent,
    UsersComponent,
    RolesComponent,
    ContactComponent,
    PagesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'entries', component: EntriesComponent}
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
