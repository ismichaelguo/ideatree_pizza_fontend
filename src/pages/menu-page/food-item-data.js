import imgPizza from '../../asset/Images/pizzaCard.jpeg';

const FOOD_ITEM_DATA = [
  {
    itemID: 1,
    itemFirstName: "NEW",
    itemLastName: "PRODUCTS",
    locationID: "PIZZAS#NEW_PRODUCTS",
    items: [{
      id: 1,
      imgSrc: imgPizza,
      imgAlt: 'Garlic Chicken & Bacon Ranch',
      name: 'Garlic Chicken & Bacon Ranch',
      description: 'Succulent chicken, crispy rasher bacon, spinach and red onion, topped with a creamy ranch sauce and...',
      price: 16.80,
      calories: 5312,
      category: 'PREMIUM PIZZAS'
    },
    {
      id: 2,
      imgSrc: imgPizza,
      imgAlt: 'Chicken, Bacon & Avocado',
      name: 'Chicken, Bacon & Avocado',
      description: 'Succulent seasoned chicken, creamy avocado, crispy rasher bacon & red onion, topped with hollandais...',
      price: 16.90,
      calories: 5688,
      category: 'PREMIUM PIZZAS'
    },
    {
      id: 3,
      imgSrc: imgPizza,
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
      imgSrc: imgPizza,
      imgAlt: 'Mega Meatlovers',
      name: 'Mega Meatlovers',
      description: 'Mega loaded, mega tasty. Featuring seasoned chicken, pork & fennel sausage, crumbled beef, pepperon...',
      price: 16.80,
      calories: 5832,
      category: 'PREMIUM PIZZAS'
    },
    {
      id: 5,
      imgSrc: imgPizza,
      imgAlt: 'Chicken & Camembert',
      name: 'Chicken & Camembert',
      description: 'Succulent chicken, melted camembert, crispy rasher bacon, Italian cherry tomatoes, baby spinach & s...',
      price: 17.20,
      calories: 5848,
      category: 'PREMIUM PIZZAS'
    },
    {
      id: 6,
      imgSrc: imgPizza,
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
        imgSrc: imgPizza,
        imgAlt: 'BBQ Chicken & Rasher Bacon',
        name: 'BBQ Chicken & Rasher Bacon',
        description: 'The perfect combination of succulent chicken pieces, crispy rasher bacon & slices of red onion on a...',
        price: 16.80,
        calories: 5080,
        category: 'PREMIUM PIZZAS'

      },

      {
        id: 8,
        imgSrc: imgPizza,
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