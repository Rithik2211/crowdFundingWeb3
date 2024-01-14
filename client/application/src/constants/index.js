import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'Payment',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'Withdraw',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];