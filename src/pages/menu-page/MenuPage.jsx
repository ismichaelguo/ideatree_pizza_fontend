import React from 'react';
import MainNav from '../../components/main-nav/MainNav';
import MenuNav from '../../components/menu-nav/MenuNav';

const MenuPage = (props) => {
  console.log(props);
  const pathname = props.location.pathname;
  const hashtag = props.location.hash;
  return (
    <div>
      <MainNav pathname={pathname} />
      <MenuNav hashtag={hashtag} />
      <div className='SubMenuContainer'>
            <header>
                <h3 className='title'><span className='titleBold'>{props.name1}</span> <span>{props.name2}</span></h3>
            </header>
            <div className='line'></div>
            <section className='SubMenuContainer_body'>
                <ProductSelectionItemCard
                    imgAlt='The Big Cheese'
                    imgSrc={imgPizza}
                    name='The Big Cheese'
                    description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped wit...'
                    price={18.20}
                    calories={9520}
                    id={1}
                />
                <ProductSelectionItemCard
                    imgAlt='The Big Pepperoni, Sausage & Mushroom'
                    imgSrc={imgPizza}
                    name='The Big Pepperoni, Sausage & Mushroom'
                    description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic'
                    price={19.20}
                    calories={10320}
                    id={2}
                />
                <ProductSelectionItemCard
                    imgAlt='The Big Pepperoni, Sausage & Mushroom'
                    imgSrc={imgPizza}
                    name='The Big Pepperoni, Sausage & Mushroom'
                    description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic '
                    price={19.20}
                    calories={10320}
                    id={3}
                />
                <ProductSelectionItemCard
                    imgAlt='The Big Pepperoni, Sausage & Mushroom'
                    imgSrc={imgPizza}
                    name='The Big Pepperoni, Sausage & Mushroom'
                    description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic '
                    price={19.20}
                    calories={10320}
                    id={4}
                />
                <ProductSelectionItemCard
                    imgAlt='The Big Pepperoni, Sausage & Mushroom'
                    imgSrc={imgPizza}
                    name='The Big Pepperoni, Sausage & Mushroom'
                    description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic '
                    price={19.20}
                    calories={10320}
                    id={5}
                />
                <ProductSelectionItemCard
                    imgAlt='The Big Pepperoni, Sausage & Mushroom'
                    imgSrc={imgPizza}
                    name='The Big Pepperoni, Sausage & Mushroom'
                    description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic soft and foldable New York style dough topped...'
                    price={19.20}
                    calories={10320}
                    id={6}
                />
                <ProductSelectionItemCard
                    imgAlt='The Big Pepperoni, Sausage & Mushroom'
                    imgSrc={imgPizza}
                    name='The Big Pepperoni, Sausage & Mushroom'
                    description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic soft and foldable New York style dough topped...'
                    price={19.20}
                    calories={10320}
                    id={7}
                    />
            </section>
        </div>
    </div>
  );
}

export default MenuPage;
