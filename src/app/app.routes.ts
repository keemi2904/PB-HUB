import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'tab1',
        loadComponent: () => import('./tab1/tab1.page').then( m => m.Tab1Page)
      },
      {
        path: 'tab2',
        loadComponent: () => import('./tab2/tab2.page').then( m => m.Tab2Page)
      },
      {
        path: 'tab3',
        loadComponent: () => import('./tab3/tab3.page').then( m => m.Tab3Page)
      },
    ]
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },  {
    path: 'checkout-one',
    loadComponent: () => import('./checkout-one/checkout-one.page').then( m => m.CheckoutOnePage)
  },
  {
    path: 'checkout-two',
    loadComponent: () => import('./checkout-two/checkout-two.page').then( m => m.CheckoutTwoPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'seller',
    loadComponent: () => import('./seller/seller.page').then( m => m.SellerPage)
  },
  {
    path: 'seller-chat',
    loadComponent: () => import('./seller-chat/seller-chat.page').then( m => m.SellerChatPage)
  },
  {
    path: 'add',
    loadComponent: () => import('./add/add.page').then( m => m.AddPage)
  },

];
