import { Routes } from '@angular/router';
import { AllPropertiesComponent } from './pages/general/all-properties/all-properties.component';
import { DetailsPropertyComponent } from './pages/general/details-property/details-property.component';
import { LandingPageComponent } from './pages/general/landing-page/landing-page.component';
import { LoginComponent } from './pages/general/login/login.component';
import { RegisterComponent } from './pages/general/register/register.component';
import { OtpValidatorComponent } from './pages/general/otp-validator/otp-validator.component';
import { BecomeOwnerComponent } from './pages/general/become-owner/become-owner.component';
import { ChatComponent } from './pages/general/chat/chat.component';
import { NotFoundPageComponent } from './pages/general/not-found-page/not-found-page.component';
import { RegisterSpecFormsComponent } from './pages/general/register-spec-forms/register-spec-forms.component';
import { ReviewsComponent } from './pages/general/reviews/reviews.component';
import { HomePageComponent } from './pages/owner/home-page/home-page.component';
import { DocumentsComponent } from './pages/owner/documents/documents.component';
import { ApplyingComponent } from './pages/owner/applying/applying.component';
import { ProfilsComponent } from './pages/owner/profils/profils.component';
import { PropertiesComponent } from './pages/owner/properties/properties.component';


export const routes: Routes = [
  // General routing
  { path: '', component: LandingPageComponent },
  { path: 'details', component: AllPropertiesComponent  },
  { path: 'details/house/:slug', component: DetailsPropertyComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'otp_validator', component: OtpValidatorComponent },
  {path: 'become_owner', component: BecomeOwnerComponent},
  {path: 'chat', component: ChatComponent },
  {path: 'register_special_forms', component: RegisterSpecFormsComponent},
  {path: 'reviews', component: ReviewsComponent },
  // {path: 'popup_validator', component: },





  //Owner routing
  {path: 'home', component: HomePageComponent },
  {path: 'home/documents', component: DocumentsComponent },
  {path: 'home/applying', component: ApplyingComponent },
  {path: 'home/profils', component: ProfilsComponent },
  {path: 'home/properties', component: PropertiesComponent },






  ///404 Error Page
  {path: '**', component: NotFoundPageComponent },
];
