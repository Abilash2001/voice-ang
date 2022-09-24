import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DongleComponent } from './dongle/dongle.component';
import { PlansComponent } from './plans/plans.component';
import { BillsComponent } from './bills/bills.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HelpmeComponent } from './helpme/helpme.component';
import { MetaComponent } from './meta/meta.component';
import { OtpComponent } from './otp/otp.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OffersComponent } from './offers/offers.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpackComponent } from './admin/admin.component';
import { AdminuserCategoryComponent } from './admin/admin.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SubscriberComponent,
    AboutusComponent,
    DongleComponent,
    PlansComponent,
    BillsComponent,
    InvoiceComponent,
    TestimonialComponent,
    HelpmeComponent,
    MetaComponent,
    OtpComponent,
    FeedbackComponent,
    OffersComponent,
    AdminComponent,
    AdminpackComponent,
    AdminuserCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
