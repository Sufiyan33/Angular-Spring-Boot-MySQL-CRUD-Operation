import { Routes } from '@angular/router';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';
import { GetAllCustomerComponent } from './components/get-all-customer/get-all-customer.component';

export const routes: Routes = [
    {
        path: 'customer',
        component: PostCustomerComponent
    },
    {
        path: '',
        component: GetAllCustomerComponent
    }
];
