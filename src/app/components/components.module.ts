import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PackageBoxComponent } from './package-box/package-box.component';
import { ServiceBoxComponent } from './service-box/service-box.component';
import { GalleryImageBoxComponent } from './gallery-image-box/gallery-image-box.component';
import { ReviewBoxComponent } from './review-box/review-box.component';
import { ContactBoxComponent } from './contact-box/contact-box.component';
import { FooterBoxComponent } from './footer-box/footer-box.component';
import { HeadingComponent } from './heading/heading.component';
import { IonicModule } from '@ionic/angular';

const exports = [
  HeaderComponent,
  LogoComponent,
  NavbarComponent,
  LoginFormComponent,
  PackageBoxComponent,
  ServiceBoxComponent,
  GalleryImageBoxComponent,
  ReviewBoxComponent,
  ContactBoxComponent,
  FooterBoxComponent,
  HeadingComponent,
];

@NgModule({
  declarations: exports,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports
})
export class ComponentsModule { }
