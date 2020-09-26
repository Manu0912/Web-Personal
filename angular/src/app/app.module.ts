import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,

    ContactComponent,

    TecnologiesComponent,


    FooterComponentComponent,

    AdminPageComponent,

    PrincipalComponent,

    LoginComponent,

    NotFoundComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    Ng2PageScrollModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
