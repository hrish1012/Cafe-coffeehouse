import menuCoffee from '../assets/photos/menu-coffee.jpg';
import menuTea from '../assets/photos/menu-tea.jpg';
import menuColdDrinks from '../assets/photos/menu-cold-drinks.jpg';
import menuBreakfast from '../assets/photos/menu-breakfast.jpg';
import menuTreats from '../assets/photos/menu-treats.jpg';

export const menuSections = [
    {id: 'drinks',
    section: 'Drinks',
    subsections: [
        {type: 'Coffee',
        id: 'coffee',
        image: menuCoffee,
        items: [
                {subtype: 'Espresso',
                ingredients: 'Espresso'
                },
                {subtype: 'Americano',
                ingredients: 'Espresso, Hot Water'
                },
                {subtype: 'Latte',
                ingredients: 'Espresso, Creamy Steamed Milk'
                },
                {subtype: 'Cappuccino',
                ingredients: 'Espresso, Milk Foam'
                },
                {subtype: 'Mocha',
                ingredients: 'Espresso, Steamed Milk, Chocolate'
                },
                {subtype: 'Caramel Macchiato',
                ingredients: 'Espresso, Steamed Milk, Vanilla, Caramel'
                }
            ]
        },
        {type: 'Tea',
        id: 'tea',
        image: menuTea,
        items: [
                {subtype: 'English Breakfast Tea',
                ingredients: 'Black Tea'
                },
                {subtype: 'Chai Tea',
                ingredients: 'Black Tea, Cinnamon, Black Pepper'
                },
                {subtype: 'Chai Tea Latte',
                ingredients: 'Black Tea, Cinnamon, Black Pepper, Steamed Milk'
                },
                {subtype: 'Earl Grey Tea',
                ingredients: 'Black Tea, Bergamot Essence'
                },
                {subtype: 'Chamomile Mint Tea',
                ingredients: 'Chamomile Tea, Lemongrass, Mint'
                },
                {subtype: 'Green Ginger Tea',
                ingredients: 'Green Tea, Fresh Ginger'
                },
                {subtype: 'Blueberry Green Tea',
                ingredients: 'Green Tea, Lemonade, Blueberry'
                },
            ]
        },
        {type: 'Cold Drinks',
        id: 'cold-drinks',
        image: menuColdDrinks,
        items: [
                {subtype: 'Cold Brew',
                ingredients: 'Cold Coffee, Ice'
                },
                {subtype: 'Iced Latte',
                ingredients: 'Espresso, Cold Milk, Ice'
                },
                {subtype: 'Iced Mocha',
                ingredients: 'Espresso, Cold Milk, Chocolate, Ice'
                },
                {subtype: 'Iced Vanilla Mocha',
                ingredients: 'Espresso, Cold Milk, Chocolate, Vanilla, Ice'
                },
                {subtype: 'Tropical Tea',
                ingredients: 'Green Tea, Pineapple Notes, Ice'
                },
                {subtype: 'Iced Green Tea Lemonade',
                ingredients: 'Green Tea, Lemonade, Ice'
                },
                {subtype: 'Iced Chai Tea Latte',
                ingredients: 'Black Tea, Cinnamon, Cold Milk, Black Pepper, Ice'
                },
            ]
        }
    ]
    },
    {id: 'food',
    section: 'Food',
    subsections: [
        {type: 'Breakfast & Lunch',
        id: 'breakfast-lunch',
        image: menuBreakfast,
        items: [
                {subtype: 'Veg Alfredo',
                ingredients: 'A creamy cheese sauce tossed in garlic olive oil and exotic veggies with grated parmesan'
                },
                {subtype: 'French Platter',
                ingredients: 'French toast, croque madame,fruits and mashed potato'
                },
                {subtype: 'Cottage Cheese Pestroni',
                ingredients: 'Cottage cheese mixed with rich creamy pesto sauce placed on a toast and baked'
                },
                {subtype: 'Veg Noodles',
                ingredients: 'Steamed Noodles wok fried with lot of Veggies - Onions,Capsicums, carrots, cabbage'
                },
                {subtype: 'Turkey Sandwich',
                ingredients: 'Wheat Bread, Tomato, Smoked Turkey Breast, Pesto'
                },
                {subtype: 'Sausage Sandwich',
                ingredients: 'Bread, Sausage, Egg, Dutch Cheese, Bacon'
                }
            ]
        },
        {type: 'Snacks & Treats',
        id: 'snacks-treats',
        image: menuTreats,
        items: [
                {subtype: 'CH Cake',
                ingredients: 'Coffee Cake, Caramel Brown Sugar, Cinnamon Topping'
                },
                {subtype: 'Sandwich Chocolate ',
                ingredients: 'A Hearty Delicious Sandwich Filled Creamy Vanilla with Two Crunchy Biscuits'
                },
                {subtype: 'Cherry Bakewells',
                ingredients: 'Buttery Dough, Cherry Jam, Sweet Fondant'
                },
                {subtype: 'Strawberries Muffin',
                ingredients: 'Muffin, Strawberries, Strawberry Jam'
                },
                {subtype: 'Chocolate Biscuit',
                ingredients: 'Peanut Butter Biscuit, Chocolate Button'
                },
                {subtype: 'Chocolate Donut',
                ingredients: 'Donut, Chocolate Glaze'
                },
            ]
        }
    ]
    }
];