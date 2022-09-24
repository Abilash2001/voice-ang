import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DongleComponent } from './dongle/dongle.component';
import { FeedbackComponent } from './feedback/feedback.component'
import { OffersComponent } from './offers/offers.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component : LoginComponent},
  {path:'signup', component : RegisterComponent},
  {path:'otp', component : OtpComponent},
  {path:'aboutus', component : AboutusComponent},
  {path:'dongle', component: DongleComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'admin', component: AdminComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
