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
import { JavaStackComponent } from './components/service-page/sub-pages/java-stack/java-stack.component';
import { BrandingPageComponent } from './components/service-page/sub-pages/branding-page/branding-page.component';
import { CmsPageComponent } from './components/service-page/sub-pages/cms-page/cms-page.component';
import { ECommercePageComponent } from './components/service-page/sub-pages/e-commerce-page/e-commerce-page.component';
import { XamppPageComponent } from './components/service-page/sub-pages/xampp-page/xampp-page.component';
import { MobileAppPageComponent } from './components/service-page/sub-pages/mobile-app-page/mobile-app-page.component';
import { CloudPageComponent } from './components/service-page/sub-pages/cloud-page/cloud-page.component';
import { DigitalMarketingPageComponent } from './components/service-page/sub-pages/digital-marketing-page/digital-marketing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddBlogComponent } from './components/blog/blog-components/add-blog/add-blog.component';
import { ViewBlogComponent } from './components/blog/blog-components/view-blog/view-blog.component';


/* App Routing */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'services', component: ServicePageComponent },
  { path:'services/mean', component: MeanStackComponent },
  { path:'services/java', component: JavaStackComponent },
  { path:'services/branding', component: BrandingPageComponent },
  { path:'services/cms', component: CmsPageComponent },
  { path:'services/ecommerce', component: ECommercePageComponent },
  { path:'services/xampp', component: XamppPageComponent },
  { path:'services/mobile', component: MobileAppPageComponent },
  { path:'services/cloud', component: CloudPageComponent },
  { path:'services/digital-marketing', component: DigitalMarketingPageComponent },
  { path:'blog', component: BlogComponent },
  { path:'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }

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
    MeanStackComponent,
    JavaStackComponent,
    BrandingPageComponent,
    CmsPageComponent,
    ECommercePageComponent,
    XamppPageComponent,
    MobileAppPageComponent,
    CloudPageComponent,
    DigitalMarketingPageComponent,
    PageNotFoundComponent,
    LoginComponent,
    BlogComponent,
    AddBlogComponent,
    ViewBlogComponent
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
  bootstrap: [AppComponent, NavbarComponent, FooterComponent]
})
export class AppModule { }
