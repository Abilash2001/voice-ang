import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BankComponent } from './bank/bank.component';
import { DongleComponent } from './dongle/dongle.component';
import { FeedbackComponent } from './feedback/feedback.component'
import { OffersComponent } from './offers/offers.component';
import { AdminComponent } from './admin/admin.component';
import { ViewpackComponent } from './admin/admin.component';
import { NewplanComponent } from './admin/admin.component';
import { EditplanComponent } from './admin/admin.component';
import { NewdongleplanComponent } from './admin/admin.component';
import { ViewdonglepackComponent } from './admin/admin.component';
import { EditdongleComponent} from './admin/admin.component';
import { FetchfbComponent } from './feedback/feedback.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { SubscriberComponent } from './subscriber/subscriber.component';

const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component : LoginComponent},
  {path:'signup', component : RegisterComponent},
  {path:'otp', component : OtpComponent},
  {path:'aboutus', component : AboutusComponent},
  {path:'bank', component: BankComponent},
  {path:'dongle', component: DongleComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/viewpack', component: ViewpackComponent},
  {path: 'admin/newplan', component : NewplanComponent},
  {path: 'admin/editplan',component : EditplanComponent},
  {path: 'admin/newdongleplan', component : NewdongleplanComponent},
  {path: 'admin/viewdonglepack', component: ViewdonglepackComponent},
  {path: 'admin/editdongle',component : EditdongleComponent},
  {path: 'feedback/fetchfb',component : FetchfbComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'terms',component:TermsComponent},
  {path: 'connection', component: SubscriberComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
