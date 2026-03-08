// The Pantry Car - Complete Menu Data
// Railway-themed restaurant in Sector 78, Noida

export const menuCategories = [
  'Pizza & Pasta',
  'Sandwiches',
  'Indian Main Course - Veg',
  'Indian Main Course - Non-Veg',
  'Rice & Biryani',
  'Soups',
  'Starters & Kebabs',
  'Non-Veg Appetizers',
  'Chinese & Indo-Chinese',
  'Sides & Salads',
  'Potato Corner',
  'Breads',
  'Sizzlers',
];

export const menuItems = {
  'Pizza & Pasta': [
    { name: 'Cheese Garlic Bread', desc: 'Toasted bread with garlic butter and melted cheese', price: 149, veg: true, tag: 'Bestseller' },
    { name: 'Exotica Veggie Garlic Bread', desc: 'Loaded with exotic vegetables and herbs', price: 179, veg: true, tag: 'Veg Fav' },
    { name: 'Pasta Alfredo (White Sauce)', desc: 'Creamy white sauce pasta with vegetables', price: 249, veg: true, tag: 'Creamy' },
    { name: 'Pasta Arrabiata (Red Sauce)', desc: 'Spicy tomato sauce pasta with fresh herbs', price: 239, veg: true, tag: 'Spicy' },
    { name: 'Pasta Pink Sauce', desc: 'Blend of white and red sauce pasta', price: 259, veg: true, tag: 'Special' },
    { name: 'Margherita Pizza', desc: 'Classic tomato, cheese and basil pizza', price: 299, veg: true, tag: 'Classic' },
    { name: 'OTC Pizza', desc: 'Onion, Tomato, Capsicum loaded pizza', price: 329, veg: true, tag: 'Popular' },
    { name: 'Corn Mushroom Pizza', desc: 'Sweet corn and mushroom topping', price: 349, veg: true, tag: 'Veg' },
    { name: 'Pizza De Grande', desc: 'Supreme loaded pizza with all veggies', price: 449, veg: true, tag: 'Large' },
    { name: 'Paneer Tikka Pizza', desc: 'Tandoori paneer chunks on pizza base', price: 399, veg: true, tag: 'Indian Twist' },
    { name: 'Chicken Afghani Pizza', desc: 'Creamy chicken mughlai style pizza', price: 499, veg: false, tag: 'Popular' },
    { name: 'Chicken Tikka Pizza', desc: 'Classic chicken tikka topping', price: 479, veg: false, tag: 'Classic' },
  ],

  'Sandwiches': [
    { name: 'Paneer Grilled Sandwich', desc: 'Grilled paneer with spices and cheese', price: 179, veg: true, tag: 'Veg' },
    { name: 'Chicken Grilled Sandwich', desc: 'Grilled chicken with fresh vegetables', price: 219, veg: false, tag: 'Popular' },
    { name: 'Veg Coleslaw', desc: 'Fresh coleslaw sandwich', price: 159, veg: true, tag: 'Light' },
    { name: 'Chicken Coleslaw', desc: 'Chicken coleslaw sandwich', price: 199, veg: false, tag: 'Fresh' },
    { name: 'Bombay Sandwich', desc: 'Mumbai style spicy potato sandwich', price: 169, veg: true, tag: 'Street Style' },
  ],

  'Indian Main Course - Veg': [
    { name: 'Paneer Butter Masala', desc: 'Cottage cheese in rich buttery tomato gravy', price: 289, veg: true, tag: 'Classic' },
    { name: 'Palak Paneer', desc: 'Paneer in creamy spinach gravy', price: 279, veg: true, tag: 'Healthy' },
    { name: 'Paneer Lababdar', desc: 'Paneer in bold spiced tomato gravy', price: 299, veg: true, tag: 'Rich' },
    { name: 'Paneer Tikka Masala', desc: 'Tandoori paneer in spicy tomato gravy', price: 309, veg: true, tag: 'Bestseller' },
    { name: 'Paneer Do Pyaza', desc: 'Paneer cooked with double onions', price: 279, veg: true, tag: 'Aromatic' },
    { name: 'Paneer Makhni', desc: 'Paneer in creamy butter sauce', price: 299, veg: true, tag: 'Creamy' },
    { name: 'Paneer Methi Malai', desc: 'Paneer with fenugreek in cream', price: 289, veg: true, tag: 'Flavorful' },
    { name: 'Dal Makhani', desc: 'Slow-cooked black lentils in cream', price: 249, veg: true, tag: 'Must Try' },
    { name: 'Dal Tadka', desc: 'Yellow lentils tempered with spices', price: 229, veg: true, tag: 'Home Style' },
    { name: 'Dal Fry', desc: 'Simple spiced yellow dal', price: 219, veg: true, tag: 'Light' },
    { name: 'Mushroom Masala', desc: 'Mushrooms in spiced tomato gravy', price: 259, veg: true, tag: 'Veg' },
    { name: 'Subz Taka Tak', desc: 'Mixed vegetables bhuna style', price: 269, veg: true, tag: 'Spicy' },
    { name: 'Veg Jalfrezi', desc: 'Mixed vegetables in spicy sauce', price: 259, veg: true, tag: 'Hot' },
    { name: 'Kadai Vegetable', desc: 'Vegetables cooked in kadai masala', price: 269, veg: true, tag: 'Spicy' },
    { name: 'Mix Veg', desc: 'Seasonal vegetables in mild gravy', price: 239, veg: true, tag: 'Healthy' },
    { name: 'Malai Kofta', desc: 'Cheese dumplings in creamy gravy', price: 299, veg: true, tag: 'Royal' },
    { name: 'Shahi Paneer', desc: 'Royal style paneer in cashew gravy', price: 309, veg: true, tag: 'Premium' },
    { name: 'Aloo Gobi', desc: 'Potato and cauliflower curry', price: 199, veg: true, tag: 'Classic' },
    { name: 'Bhindi Masala', desc: 'Okra cooked with spices', price: 199, veg: true, tag: 'Traditional' },
    { name: 'Baingan Bharta', desc: 'Roasted eggplant mash', price: 219, veg: true, tag: 'Smoky' },
  ],

  'Indian Main Course - Non-Veg': [
    { name: 'Chicken Butter Masala', desc: 'Chicken in creamy butter tomato gravy', price: 329, veg: false, tag: 'Bestseller' },
    { name: 'Chicken Kadhai', desc: 'Chicken with bell peppers in kadai masala', price: 319, veg: false, tag: 'Spicy' },
    { name: 'Chicken Tikka Masala', desc: 'Tandoori chicken in spiced gravy', price: 339, veg: false, tag: 'Classic' },
    { name: 'Chicken Tariwala', desc: 'Chicken in flavorful gravy', price: 329, veg: false, tag: 'Delicious' },
    { name: 'Chicken Do Pyaza', desc: 'Chicken cooked with double onions', price: 319, veg: false, tag: 'Aromatic' },
    { name: 'Chicken Hawa', desc: 'Dhungar method smoked chicken', price: 349, veg: false, tag: 'Special' },
    { name: 'Chicken Lababdar', desc: 'Chicken in rich tomato gravy', price: 339, veg: false, tag: 'Rich' },
    { name: 'Mutton Roganjosh', desc: 'Kashmiri style mutton curry', price: 449, veg: false, tag: 'Premium' },
    { name: 'Mutton Rara', desc: 'Minced mutton with big pieces', price: 479, veg: false, tag: 'Special' },
    { name: 'Mutton Bombay Keema', desc: 'Spicy minced mutton Mumbai style', price: 429, veg: false, tag: 'Spicy' },
    { name: 'Mutton Classic Curry', desc: 'Traditional home style mutton', price: 399, veg: false, tag: 'Classic' },
    { name: 'Egg Curry', desc: 'Eggs in spiced onion tomato gravy', price: 249, veg: false, tag: 'Eggetarian' },
    { name: 'Beliram Chicken', desc: 'Amritsari style chicken', price: 399, veg: false, tag: 'Punjabi' },
    { name: 'Rara Chicken', desc: 'Chicken with mince in gravy', price: 389, veg: false, tag: 'Rich' },
    { name: 'Kadaknath Chicken', desc: 'Black chicken specialty dish', price: 599, veg: false, tag: 'Premium' },
  ],

  'Rice & Biryani': [
    { name: 'Jaipuri Aloo Pyaz Paneer', desc: 'Rajasthani style rice with paneer', price: 249, veg: true, tag: 'Rajasthani' },
    { name: 'Aloo Gobhi Adarki', desc: 'Rice with potato and cauliflower', price: 229, veg: true, tag: 'Comfort' },
    { name: 'Kashmiri Bharwa Aloo', desc: 'Stuffed potatoes in rice', price: 239, veg: true, tag: 'Kashmiri' },
    { name: 'Chana Masala Rice', desc: 'Rice with spiced chickpeas', price: 229, veg: true, tag: 'Protein' },
    { name: 'Veg Biryani', desc: 'Fragrant basmati with fresh vegetables', price: 269, veg: true, tag: 'Aromatic' },
    { name: 'Chicken Biryani', desc: 'Classic chicken biryani with raita', price: 329, veg: false, tag: 'Bestseller' },
    { name: 'Mutton Biryani', desc: 'Rich mutton biryani with raita', price: 429, veg: false, tag: 'Premium' },
    { name: 'Masala Chaap Biryani', desc: 'Soy chaap biryani', price: 289, veg: true, tag: 'Veg Protein' },
    { name: 'Steam Rice', desc: 'Plain steamed basmati rice', price: 149, veg: true, tag: 'Simple' },
    { name: 'Jeera Rice', desc: 'Cumin flavored rice', price: 169, veg: true, tag: 'Flavorful' },
  ],

  'Soups': [
    { name: 'Cream of Tomato', desc: 'Rich and creamy tomato soup', price: 149, veg: true, tag: 'Classic' },
    { name: 'Tamatar Dhaniya Shorba', desc: 'Tomato coriander clear soup', price: 139, veg: true, tag: 'Light' },
    { name: 'Manchow Soup', desc: 'Spicy vegetable soup with crispy noodles', price: 159, veg: true, tag: 'Spicy' },
    { name: 'Sweet Corn Soup', desc: 'Creamy corn soup', price: 149, veg: true, tag: 'Creamy' },
    { name: 'Hot & Sour Soup', desc: 'Tangy and spicy soup', price: 149, veg: true, tag: 'Asian' },
    { name: 'Lemon Coriander Soup', desc: 'Refreshing lemon and coriander', price: 139, veg: true, tag: 'Refreshing' },
    { name: 'Chicken Clear Soup', desc: 'Light chicken broth', price: 179, veg: false, tag: 'Light' },
    { name: 'Chicken Lemon Coriander', desc: 'Chicken with lemon coriander', price: 189, veg: false, tag: 'Fresh' },
    { name: 'Chicken Manchow', desc: 'Spicy chicken soup with noodles', price: 199, veg: false, tag: 'Spicy' },
  ],

  'Starters & Kebabs': [
    { name: 'Paneer Tikka', desc: 'Cottage cheese marinated and tandoor grilled', price: 279, veg: true, tag: 'Bestseller' },
    { name: 'Paneer Malai Tikka', desc: 'Creamy marinated paneer tikka', price: 299, veg: true, tag: 'Creamy' },
    { name: 'Paneer Achari Tikka', desc: 'Pickle spiced paneer tikka', price: 289, veg: true, tag: 'Tangy' },
    { name: 'Paneer Hariyali Tikka', desc: 'Herb marinated green paneer tikka', price: 299, veg: true, tag: 'Fresh' },
    { name: 'Paneer Masala Tikka', desc: 'Spiced paneer tikka', price: 279, veg: true, tag: 'Classic' },
    { name: 'Chaap Tikka', desc: 'Soy chaap tandoori style', price: 249, veg: true, tag: 'Veg Protein' },
    { name: 'Mushroom Tikka', desc: 'Tandoor grilled mushrooms', price: 249, veg: true, tag: 'Earth' },
    { name: 'Veg Tikka Platter', desc: 'Assorted vegetable tikkas', price: 449, veg: true, tag: 'Platter' },
    { name: 'Hara Bhara Kebab', desc: 'Spinach and green pea kebabs', price: 239, veg: true, tag: 'Healthy' },
    { name: 'Dahi Ke Kabab', desc: 'Hung yogurt kebabs', price: 259, veg: true, tag: 'Melt in Mouth' },
    { name: 'Dahi Ke Sholey', desc: 'Crispy yogurt spiced kebabs', price: 279, veg: true, tag: 'Crispy' },
    { name: 'Muttur Mushkil', desc: 'Green pea kebabs', price: 229, veg: true, tag: 'Classic' },
  ],

  'Non-Veg Appetizers': [
    { name: 'Chicken Seekh Kebab', desc: 'Minced chicken skewers', price: 329, veg: false, tag: 'Popular' },
    { name: 'Mutton Seekh Kebab', desc: 'Minced mutton skewers', price: 429, veg: false, tag: 'Premium' },
    { name: 'Chicken Lollipop', desc: 'Crispy chicken wings', price: 319, veg: false, tag: 'Kids Fav' },
    { name: 'Chilli Chicken', desc: 'Spicy chilli chicken', price: 329, veg: false, tag: 'Spicy' },
    { name: 'Chicken Manchurian', desc: 'Indo-chinese chicken balls', price: 339, veg: false, tag: 'Fusion' },
    { name: 'Butter Garlic Chicken', desc: 'Garlic butter glazed chicken', price: 349, veg: false, tag: 'Garlic Lover' },
    { name: 'Tandoori Chicken (Half)', desc: 'Half chicken tandoori style', price: 399, veg: false, tag: 'Tandoor' },
    { name: 'Tandoori Chicken (Full)', desc: 'Full chicken tandoori style', price: 749, veg: false, tag: 'Tandoor' },
    { name: 'Afghani Chicken (Half)', desc: 'Creamy marinated half chicken', price: 429, veg: false, tag: 'Creamy' },
    { name: 'Afghani Chicken (Full)', desc: 'Creamy marinated full chicken', price: 799, veg: false, tag: 'Creamy' },
    { name: 'Chicken Tikka', desc: 'Boneless chicken tikka', price: 349, veg: false, tag: 'Classic' },
    { name: 'Chicken Malai Tikka', desc: 'Creamy boneless tikka', price: 379, veg: false, tag: 'Creamy' },
    { name: 'Jungli Murg Tikka', desc: 'Wild spiced chicken tikka', price: 369, veg: false, tag: 'Spicy' },
    { name: 'Non-Veg Platter', desc: 'Assorted non-veg starters', price: 699, veg: false, tag: 'Platter' },
  ],

  'Chinese & Indo-Chinese': [
    { name: 'Hakka Noodles', desc: 'Stir-fried noodles', price: 199, veg: true, tag: 'Classic' },
    { name: 'Singaporean Noodles', desc: 'Curry flavored noodles', price: 219, veg: true, tag: 'Spicy' },
    { name: 'Chilli Garlic Noodles', desc: 'Spicy garlic noodles', price: 229, veg: true, tag: 'Garlic' },
    { name: 'Veg Fried Rice', desc: 'Vegetable fried rice', price: 179, veg: true, tag: 'Classic' },
    { name: 'Singaporean Fried Rice', desc: 'Curry fried rice', price: 199, veg: true, tag: 'Spicy' },
    { name: 'Schezwan Fried Rice', desc: 'Spicy schezwan rice', price: 209, veg: true, tag: 'Spicy' },
    { name: 'Roasted Garlic Fried Rice', desc: 'Garlic flavored fried rice', price: 199, veg: true, tag: 'Garlic' },
    { name: 'Chilli Paneer', desc: 'Spicy paneer in chilli sauce', price: 249, veg: true, tag: 'Popular' },
    { name: 'Chilli Mushroom', desc: 'Spicy mushroom in chilli sauce', price: 249, veg: true, tag: 'Spicy' },
    { name: 'Chilli Chaap', desc: 'Spicy soy chaap', price: 229, veg: true, tag: 'Veg Protein' },
    { name: 'Veg Salt & Pepper', desc: 'Seasoned vegetables', price: 219, veg: true, tag: 'Asian' },
    { name: 'Veg Manchurian', desc: 'Veggie balls in gravy', price: 249, veg: true, tag: 'Classic' },
    { name: 'Veggies in Hot Garlic Sauce', desc: 'Veggies in garlic sauce', price: 259, veg: true, tag: 'Garlic' },
  ],

  'Sides & Salads': [
    { name: 'Roasted Papad', desc: 'Crispy roasted papad', price: 29, veg: true, tag: 'Crispy' },
    { name: 'Masala Papad', desc: 'Spiced crispy papad', price: 39, veg: true, tag: 'Spicy' },
    { name: 'Green Salad', desc: 'Fresh garden salad', price: 79, veg: true, tag: 'Healthy' },
    { name: 'Mix Veg Pakoda', desc: 'Vegetable fritters', price: 149, veg: true, tag: 'Monsoon Fav' },
    { name: 'Paneer Pakoda', desc: 'Cottage cheese fritters', price: 179, veg: true, tag: 'Crunchy' },
    { name: 'Chinese Bhel', desc: 'Indo-chinese crunchy snack', price: 149, veg: true, tag: 'Fusion' },
    { name: 'Kuchumber Salad', desc: 'Indian style chopped salad', price: 89, veg: true, tag: 'Traditional' },
    { name: 'Aaloo Chana Chaat Salad', desc: 'Potato chickpea salad', price: 99, veg: true, tag: 'Street Style' },
  ],

  'Potato Corner': [
    { name: 'French Fries', desc: 'Classic salted fries', price: 99, veg: true, tag: 'Classic' },
    { name: 'Peri Peri Fries', desc: 'Spicy peri peri fries', price: 129, veg: true, tag: 'Spicy' },
    { name: 'Cheese Loaded Fries', desc: 'Fries loaded with cheese', price: 149, veg: true, tag: 'Cheesy' },
    { name: 'Potato Wedges', desc: 'Seasoned potato wedges', price: 119, veg: true, tag: 'Wedges' },
    { name: 'Mashed Potato', desc: 'Creamy mashed potatoes', price: 99, veg: true, tag: 'Comfort' },
    { name: 'Loaded Potato', desc: 'Loaded baked potato', price: 179, veg: true, tag: 'Loaded' },
  ],

  'Breads': [
    { name: 'Tandoori Roti', desc: 'Whole wheat bread', price: 19, veg: true, tag: 'Tandoor' },
    { name: 'Missi Roti', desc: 'Besan flavored roti', price: 29, veg: true, tag: 'Flavorful' },
    { name: 'Hari Mirchi Ki Roti', desc: 'Green chili roti', price: 29, veg: true, tag: 'Spicy' },
    { name: 'Jungli Roti', desc: 'Multi-grain roti', price: 39, veg: true, tag: 'Healthy' },
    { name: 'Lachha Parantha', desc: 'Layered parantha', price: 39, veg: true, tag: 'Flaky' },
    { name: 'Plain Naan', desc: 'Soft leavened bread', price: 29, veg: true, tag: 'Classic' },
    { name: 'Butter Naan', desc: 'Naan brushed with butter', price: 39, veg: true, tag: 'Buttery' },
    { name: 'Garlic Naan', desc: 'Garlic flavored naan', price: 49, veg: true, tag: 'Garlic' },
    { name: 'Stuffed Naan (Paneer)', desc: 'Paneer stuffed naan', price: 59, veg: true, tag: 'Stuffed' },
    { name: 'Stuffed Naan (Aloo)', desc: 'Potato stuffed naan', price: 49, veg: true, tag: 'Stuffed' },
    { name: 'Spicy Cheese Naan', desc: 'Cheese and chili naan', price: 69, veg: true, tag: 'Cheesy' },
    { name: 'Kashmiri Naan', desc: 'Sweet and savory naan', price: 69, veg: true, tag: 'Kashmiri' },
    { name: 'Pudhina Paratha', desc: 'Mint flavored parantha', price: 49, veg: true, tag: 'Minty' },
    { name: 'Rumali Roti', desc: 'Handkerchief thin roti', price: 39, veg: true, tag: 'Thin' },
    { name: 'Amritsari Kulcha', desc: 'Stuffed kulcha', price: 59, veg: true, tag: 'Punjabi' },
  ],

  'Sizzlers': [
    { name: 'Chinese Sizzler', desc: 'Indo-chinese sizzling platter', price: 449, veg: true, tag: 'Hot' },
    { name: 'Steaming Sizzler', desc: 'Classic vegetable sizzler', price: 399, veg: true, tag: 'Hot' },
    { name: 'Non-Veg Sizzler', desc: 'Chicken sizzler with sides', price: 549, veg: false, tag: 'Premium' },
  ],
};

// Chef's Special Platter
export const chefSpecialPlatter = {
  name: "Chef's Special Platter",
  description: 'A curated selection of our finest dishes - starters, mains & sides, for two.',
  price: 799,
  items: ['Paneer Tikka', 'Butter Chicken', 'Dal Makhani', 'Naan', 'Rice', 'Dessert'],
};

// Get menu items for a category
export const getMenuItems = (category) => {
  return menuItems[category] || [];
};

// Filter items by dietary preference
export const filterMenu = (category, filter) => {
  const items = getMenuItems(category);
  if (filter === 'All') return items;
  return items.filter(item =>
    filter === 'Veg' ? item.veg : !item.veg
  );
};
