
// import pizza cover photos
import gcbrCover from '../../asset/Images/pizza cover/GARLIC_CHICKEN&BACON_RANCH.png';
import cbaCover from '../../asset/Images/pizza cover/CHICKEN_BACON&AVOCADO.png';
import lsCover from '../../asset/Images/pizza cover/LOADED_SUPREME.png';
import mmcover from '../../asset/Images/pizza cover/MEGA_MEATLOVERS.png';
import ccCover from '../../asset/Images/pizza cover/CHICKEN_CAMEMBERT.png';
import ppcCover from '../../asset/Images/pizza cover/PERI PERI CHICKEN.png';
import bcrbCover from '../../asset/Images/pizza cover/BBQ CHICKEN & RASHER BACON.png';
import gpCover from '../../asset/Images/pizza cover/GARLIC PRAWN.png';

// import pizza detail photos

import gcbrDetail from '../../asset/Images/pizza detail/GARLIC_CHICKEN&BACON_RANCH .png';
import cbaDetail from '../../asset/Images/pizza detail/CHICKEN_BACON&AVOCADO.png';
import lsDetail from '../../asset/Images/pizza detail/LOADED_SUPREME.png';
import mmDetail from '../../asset/Images/pizza detail/MEGA_MEATLOVERS.png';
import ccDetail from '../../asset/Images/pizza detail/CHICKEN_CAMEMBERT.png';
import ppcDetail from '../../asset/Images/pizza detail/PERI PERI CHICKEN.png';
import bcrbDetail from '../../asset/Images/pizza detail/BBQ CHICKEN & RASHER BACON.png';
import gpDetail from '../../asset/Images/pizza detail/GARLIC PRAWN.png';



const FOOD_ITEM_DATA = [
  {
    itemID: 1,
    itemFirstName: "NEW",
    itemLastName: "PRODUCTS",
    locationID: "PIZZAS#NEW_PRODUCTS",
    items: [{
      id: 1,
      imgSrc: gcbrCover,
      imgDetail:"https://i.ibb.co/8bs8jsw/BBQ-CHICKEN-RASHER-BACON.png",
      imgAlt: 'Garlic Chicken & Bacon Ranch',
      name: 'Garlic Chicken & Bacon Ranch',
      description: 'Succulent chicken, crispy rasher bacon, spinach and red onion, topped with a creamy ranch sauce and...',
      price: 16.80,
      calories: 5312,
      category: 'PREMIUM PIZZAS'
    },
    {
      id: 2,
      imgSrc: cbaCover,
      imgDetail:cbaDetail,
      imgAlt: 'Chicken, Bacon & Avocado',
      name: 'Chicken, Bacon & Avocado',
      description: 'Succulent seasoned chicken, creamy avocado, crispy rasher bacon & red onion, topped with hollandais...',
      price: 16.90,
      calories: 5688,
      category: 'PREMIUM PIZZAS'
    },
    {
      id: 3,
      imgSrc: lsCover,
      imgDetail:lsDetail,
      imgAlt: 'Loaded Supreme',
      name: 'Loaded Supreme',
      description: 'Ground beef, crispy rasher bacon, mushroom, pepperoni, Italian sausage, fresh baby spinach,  smoked...',
      price: 17.20,
      calories: 5488,
      category: 'PREMIUM PIZZAS'
    },]
  },
  {
    itemID: 2,
    itemFirstName: "PREMIUM",
    itemLastName: "PIZZAS",
    locationID: "PIZZAS#PREMIUM_PIZZAS",
    items: [{
      id: 4,
      imgSrc: mmcover,
      imgDetail:mmDetail,
      imgAlt: 'Mega Meatlovers',
      name: 'Mega Meatlovers',
      description: 'Mega loaded, mega tasty. Featuring seasoned chicken, pork & fennel sausage, crumbled beef, pepperon...',
      price: 16.80,
      calories: 5832,
      category: 'PREMIUM PIZZAS'
    },
    {
      id: 5,
      imgSrc: ccCover,
      imgDetail:ccDetail,
      imgAlt: 'Chicken & Camembert',
      name: 'Chicken & Camembert',
      description: 'Succulent chicken, melted camembert, crispy rasher bacon, Italian cherry tomatoes, baby spinach & s...',
      price: 17.20,
      calories: 5848,
      category: 'PREMIUM PIZZAS'
    },
    {
      id: 6,
      imgSrc: ppcCover,
      imgDetail:ppcDetail,
      imgAlt: 'Peri Peri Chicken',
      name: 'Peri Peri Chicken',
      description: 'A flavoursome pairing of seasoned chicken pieces, Italian cherry tomatoes, sliced red onion & baby ...',
      price: 16.20,
      calories: 4752,
      category: 'PREMIUM PIZZAS'

    },]
  },
  {
    itemID: 3,
    itemFirstName: "TRADITIONAL",
    itemLastName: "PIZZAS",
    locationID: "PIZZAS#TRADITIONAL_PIZZAS",
    items: [
      {
        id: 7,
        imgSrc: bcrbCover,
        imgDetail:bcrbDetail,
        imgAlt: 'BBQ Chicken & Rasher Bacon',
        name: 'BBQ Chicken & Rasher Bacon',
        description: 'The perfect combination of succulent chicken pieces, crispy rasher bacon & slices of red onion on a...',
        price: 16.80,
        calories: 5080,
        category: 'PREMIUM PIZZAS'

      },
      {
        id: 8,
        imgSrc: gpCover,
        imgDetail:gpDetail,
        imgAlt: 'Garlic Prawn',
        name: 'Garlic Prawn',
        description: 'Juicy prawns, paired with fresh baby spinach & diced tomato on a crème fraiche & zesty garlic sauce...',
        price: 17.20,
        calories: 4264,
        category: 'PREMIUM PIZZAS'
      },
    ]
  },
  {
    itemID: 4,
    itemFirstName: "D1",
    itemLastName: "d1",
    locationID: "DESSERTS#D1",
    items: [
      {
        id: 9,
        imgSrc: bcrbCover,
        imgDetail:bcrbDetail,
        imgAlt: 'BBQ Chicken & Rasher Bacon',
        name: 'BBQ Chicken & Rasher Bacon',
        description: 'The perfect combination of succulent chicken pieces, crispy rasher bacon & slices of red onion on a...',
        price: 16.80,
        calories: 5080,
        category: 'PREMIUM PIZZAS'

      },
      {
        id: 10,
        imgSrc: gpCover,
        imgDetail:gpDetail,
        imgAlt: 'Garlic Prawn',
        name: 'Garlic Prawn',
        description: 'Juicy prawns, paired with fresh baby spinach & diced tomato on a crème fraiche & zesty garlic sauce...',
        price: 17.20,
        calories: 4264,
        category: 'PREMIUM PIZZAS'
      },
    ]
  },
  {
    itemID: 5,
    itemFirstName: "D2",
    itemLastName: "d2",
    locationID: "DESSERTS#D2",
    items: [
      {
        id: 11,
        imgSrc: bcrbCover,
        imgDetail:bcrbDetail,
        imgAlt: 'BBQ Chicken & Rasher Bacon',
        name: 'BBQ Chicken & Rasher Bacon',
        description: 'The perfect combination of succulent chicken pieces, crispy rasher bacon & slices of red onion on a...',
        price: 16.80,
        calories: 5080,
        category: 'PREMIUM PIZZAS'

      },
      {
        id: 12,
        imgSrc: gpCover,
        imgDetail:gpDetail,
        imgAlt: 'Garlic Prawn',
        name: 'Garlic Prawn',
        description: 'Juicy prawns, paired with fresh baby spinach & diced tomato on a crème fraiche & zesty garlic sauce...',
        price: 17.20,
        calories: 4264,
        category: 'PREMIUM PIZZAS'
      },
    ]
  },
  {
    itemID: 6,
    itemFirstName: "D3",
    itemLastName: "d3",
    locationID: "DESSERTS#D3",
    items: [
      {
        id: 13,
        imgSrc: bcrbCover,
        imgDetail:bcrbDetail,
        imgAlt: 'BBQ Chicken & Rasher Bacon',
        name: 'BBQ Chicken & Rasher Bacon',
        description: 'The perfect combination of succulent chicken pieces, crispy rasher bacon & slices of red onion on a...',
        price: 16.80,
        calories: 5080,
        category: 'PREMIUM PIZZAS'

      },
      {
        id: 14,
        imgSrc: gpCover,
        imgDetail:gpDetail,
        imgAlt: 'Garlic Prawn',
        name: 'Garlic Prawn',
        description: 'Juicy prawns, paired with fresh baby spinach & diced tomato on a crème fraiche & zesty garlic sauce...',
        price: 17.20,
        calories: 4264,
        category: 'PREMIUM PIZZAS'
      },
    ]
  },
  {
    itemID: 7,
    itemFirstName: "coke",
    itemLastName: "cola",
    locationID: "DRINKS",
    items: [
      {
        id: 15,
        imgSrc: bcrbCover,
        imgDetail:bcrbDetail,
        imgAlt: 'BBQ Chicken & Rasher Bacon',
        name: 'BBQ Chicken & Rasher Bacon',
        description: 'The perfect combination of succulent chicken pieces, crispy rasher bacon & slices of red onion on a...',
        price: 16.80,
        calories: 5080,
        category: 'PREMIUM PIZZAS'

      },
      {
        id: 6,
        imgSrc: gpCover,
        imgDetail:gpDetail,
        imgAlt: 'Garlic Prawn',
        name: 'Garlic Prawn',
        description: 'Juicy prawns, paired with fresh baby spinach & diced tomato on a crème fraiche & zesty garlic sauce...',
        price: 17.20,
        calories: 4264,
        category: 'PREMIUM PIZZAS'
      },
    ]
  },
];

export default FOOD_ITEM_DATA;