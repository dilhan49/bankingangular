import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { MyTransactionsComponent } from './pages/my-transactions/my-transactions.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MyContactListComponent } from './pages/my-contact-list/my-contact-list.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MainAdminPageComponent } from './pages/main-admin-page/main-admin-page.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'confirm-register',
    component: ConfirmRegisterComponent
  },
  {
    path: 'user',
    component: MainPageComponent,
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'my-transactions',
        component: MyTransactionsComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'my-contact-list',
        component: MyContactListComponent
      },
      {
        path: 'new-transaction',
        component: NewTransactionComponent
      },
      {
        path: 'new-contact/:idContact',
        component: NewContactComponent
      },
      {
        path: 'new-contact',
        component: NewContactComponent
      },
      {
        path: 'profile',
        component: MyProfileComponent
      }
    ]
  },
  {
    path: 'admin',
    component: MainAdminPageComponent,
    children: [
      {
        path: 'customers',
        component: ManageUsersComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'profile',
        component: MyProfileComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
