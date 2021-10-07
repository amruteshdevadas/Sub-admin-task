import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dasboard',
    path: '/dashboard',
    icon: "fas fa-fw fa-tachometer-alt",
  },
  {
    title: 'Components',
    path: '/dashboard',
    icon: "fas fa-fw fa-cog",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Buttons',
        path: '/buttons',
        cName: 'sub-nav'
      },
      {
        title: 'Cards',
        path: '/cards',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Utilities',
    path: '',
    icon: "fas fa-fw fa-wrench",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Colors',
        path: '/colors',
        cName: 'sub-nav'
      },
      {
        title: 'Borders',
        path: '/borders',
        cName: 'sub-nav'
      },
      {
        title: 'Animations',
        path: '/animation',
        cName: 'sub-nav'
      },
      {
        title: 'Other',
        path: '/others',
        cName: 'sub-nav'
      }
    ]
  },
  
  {
    title: 'Pages',
    path: '',
    icon: "fas fa-fw fa-folder",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Register',
        path: '/register',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '404 Page',
        path: '/notfound',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Blank Page',
        path: '/blankpage',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Charts',
    path: '/charts',
    icon: "fas fa-fw fa-chart-area"
  },
  {
    title: 'Tables',
    path: '/tables',
    icon: "fas fa-fw fa-table"
  }
];