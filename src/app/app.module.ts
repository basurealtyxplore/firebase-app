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

/* Services */
import { FirebaseService } from './services/firebase.service';


/* App Routing */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path:'about', component: AboutComponent }
]


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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
