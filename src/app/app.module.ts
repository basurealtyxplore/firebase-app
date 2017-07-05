/* Core Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';



/* 3rd party Modules */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';


/* Services */
import { FirebaseService } from './services/firebase.service';
import { SchoolsService } from './services/schools.service';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { MeanStackComponent } from './components/service-page/sub-pages/mean-stack/mean-stack.component';


/* App Routing */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'services', component: ServicePageComponent },
  { path:'services/mean', component: MeanStackComponent }
]

/* Firebase configuration */
export const firebaseConfig = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBED000V0fvARoL4wOGnrweO-BR7YmFYCo",
    authDomain: "aiobee-b1390.firebaseapp.com",
    databaseURL: "https://aiobee-b1390.firebaseio.com",
    projectId: "aiobee-b1390",
    storageBucket: "aiobee-b1390.appspot.com",
    messagingSenderId: "104208339689"
  }
}

/* Dependancy Injection */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    HomeProductsComponent,
    HomeServicesComponent,
    HomeContactComponent,
    AboutComponent,
    ContactComponent,
    ContactFormComponent,
    DashboardComponent,
    ServicePageComponent,
    MeanStackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SchoolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
