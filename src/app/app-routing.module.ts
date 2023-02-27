import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplyFlitersComponent } from './apply-fliters/apply-fliters.component';
import { CommisionLedgerComponent } from './commision-ledger/commision-ledger.component';
import { ComposemessageComponent } from './composemessage/composemessage.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { FixedTemplateComponent } from './dashboard-routes/fixed-template/fixed-template.component';
import { DashboardWgComponent } from './dashboard-wg/dashboard-wg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarningsComponent } from './earnings/earnings.component';
import { EpinComponent } from './epin/epin.component';
import { FilterResultComponent } from './filter-result/filter-result.component';
import { GenerateEpinComponent } from './generate-epin/generate-epin.component';
import { GenerationDownlineComponent } from './generation-downline/generation-downline.component';
import { GenerationTreeComponent } from './generation-tree/generation-tree.component';
import { HomeComponent } from './home/home.component';
import { IdwisedownlineComponent } from './idwisedownline/idwisedownline.component';
import { InviteLeftComponentComponent } from './invite-left-component/invite-left-component.component';
import { InviteRightComponentComponent } from './invite-right-component/invite-right-component.component';
import { InviteComponent } from './invite/invite.component';
import { LegalDocumentComponent } from './legal-document/legal-document.component';
import { LoginComponent } from './login/login.component';
import { MyDirectComponent } from './my-direct/my-direct.component';
import { MyDownlineComponent } from './my-downline/my-downline.component';
import { NetworkComponent } from './network/network.component';
import { PaymentComponent } from './payment/payment.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowTreeViewComponent } from './show-tree-view/show-tree-view.component';
import { SuccessEpinComponent } from './success-epin/success-epin.component';
import { TDSDetailsComponent } from './tdsdetails/tdsdetails.component';
import { TotalEarningsComponent } from './total-earnings/total-earnings.component';
import { TransferEpinComponent } from './transfer-epin/transfer-epin.component';
import { TreeviewWgComponent } from './treeview-wg/treeview-wg.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UpgradeSubscriptionComponent } from './upgrade-subscription/upgrade-subscription.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'redirect/:parent/redirect',component:UiCardComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: ':id/:branch', component: RegistrationComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'invite', component: InviteComponent},
  {path: 'profile-details', component: ProfileDetailsComponent},
  {path: 'show-tree-view/:parent/tree', component: ShowTreeViewComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'legal-doc', component: LegalDocumentComponent},
  {path: 'network', component: NetworkComponent},
  {path: 'apply-filter', component: ApplyFlitersComponent},
  {path: 'filter-result', component: FilterResultComponent},
  {path: 'my-earnings', component: EarningsComponent},
  {path: 'show-earnings', component: TotalEarningsComponent},
  {path: 'generate-E-pin', component: GenerateEpinComponent},
  {path: 'transfer-E-pin', component: TransferEpinComponent},
  {path: 'success-e-pin', component: SuccessEpinComponent},
  {path: 'upgrade', component: UpgradeSubscriptionComponent},
  {path: 'dashboard-al', component: DashboardWgComponent},
  {path: 'tree', component: TreeviewWgComponent},
  {path: 'ComposeMessage', component: ComposemessageComponent},
  {path: 'GenerationTreeView', component: GenerationTreeComponent},
  {path: 'MyDirect', component: MyDirectComponent},
  {path: 'MyDownline', component: MyDownlineComponent},
  {path: 'GenerationDownline', component: GenerationDownlineComponent},
  {path: 'Idwisedownline', component: IdwisedownlineComponent},
  {path: 'TDSDetails', component: TDSDetailsComponent},
  {path: 'CommisionLedger', component: CommisionLedgerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
