import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
// import AiOutlineClose from "react-icons/ai"
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const Sidebardata = [

  {
    title: 'Trending',
    path: './',
    list: {
      li1: 'Best Sellers',
      li2: 'New Releases',
      li3: 'Movers & Shakers',
    },
    cName: 'nave-text'
  },

  {
    title: 'Digital Content And Devices',
    path: './',
    list: {
      li1: 'Echo & Alexa ',
      li2: 'Kindle',
      li3: 'Fire tables & Fire TV',
    },
    cName: 'nave-text'
  },

  {
    title: 'Shop By Department',
    path: './',
    list: {
      li1: 'Audible Audiobooks ',
      li2: 'Amazon Prime Video',
      li3: 'Amazon Music',
      li4: 'Appstore for Android',
    },
    cName: 'nave-text'
  },

  {
    title: 'Programs & Features',
    path: './',
    list: {
      li1: 'Amazon Prime ',
      li2: ' Saving Programs',
      li3: 'Gift Cards',
      li4: 'Boutiques Francophones',
    },
    cName: 'nave-text'
  },

] 
