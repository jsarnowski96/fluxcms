import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages/pages.component';
import { CommentsComponent } from './comments/comments.component';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AddNewRoleComponent } from './add-new-role/add-new-role.component';
<<<<<<< HEAD
import { PostsComponent } from './posts/posts.component';
import { StandardUserNavbarComponent } from './standard-user-navbar/standard-user-navbar.component';

=======
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { PostDetailsComponent } from './post-details/post-details.component';
>>>>>>> f921d5edb161eedc237e9b560f41e9bb45d13689
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavMenuComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    RolesComponent,
    ContactComponent,
    PagesComponent,
    CommentsComponent,
    AddNewPageComponent,
    AddNewUserComponent,
    AddNewRoleComponent,
<<<<<<< HEAD
    AddNewPostComponent,
    PostsComponent,
    StandardUserNavbarComponent
=======
    AddPostComponent,
    AddPostComponent,
    PostDetailsComponent
>>>>>>> f921d5edb161eedc237e9b560f41e9bb45d13689
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
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
      { path: 'pages', component: PagesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'contact', component: ContactComponent },
<<<<<<< HEAD
      { path: 'comments', component: CommentsComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'add-new-post', component: AddNewPostComponent }
=======
      { path: 'post/:id', component: PostDetailsComponent },
      { path: 'comments', component: CommentsComponent, canActivate: [AuthGuard]  },
      { path: 'roles', component: RolesComponent, canActivate: [AuthGuard] },
      { path: 'entries', component: EntriesComponent, canActivate: [AuthGuard] }
>>>>>>> f921d5edb161eedc237e9b560f41e9bb45d13689
    ])
  ],
  providers: [AuthGuard,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
