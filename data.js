// Indian restaurant menu data
const menuData = [
    // Appetizers/Starters
    {
        id: 1,
        name: "Samosa",
        description: "Crispy triangular pastries filled with spiced potatoes and peas, served with mint and tamarind chutney",
        price: "₹120",
        category: "appetizers",
        image: "https://wallpapercave.com/wp/wp6619344.jpg"
    },
    {
        id: 2,
        name: "Paneer Tikka",
        description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions",
        price: "₹280",
        category: "appetizers",
        image: "https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg"
    },
    {
        id: 3,
        name: "Shahi Paneer",
        description: "A curry made with cottage cheese cubes cooked in a gravy of onions tomatoes and spices and garnished with dried fenugreek leaves.",
        price: "₹320",
        category: "appetizers",
        image: "https://foodiewish.com/wp-content/uploads/2020/07/shahi-Paneer1-758x683.jpg"
    },
    {
        id: 4,
        name: "Aloo Tikki",
        description: "Crispy potato patties served with yogurt, mint chutney, and tamarind sauce",
        price: "₹150",
        category: "appetizers",
        image: "https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Aloo-Tikki-Chaat61.jpg"
    },
    {
        id: 5,
        name: "Papdi Chaat",
        description: "Crispy wafers topped with yogurt, chutneys, and spices - a popular street food",
        price: "₹180",
        category: "appetizers",
        image: "https://ministryofcurry.com/wp-content/uploads/2022/07/Papdi-Chat_-3.jpg"
    },

    // Main Courses
    {
        id: 6,
        name: "Butter Paneer Masala",
        description: "Tender Paneer in rich, creamy tomato-based sauce with aromatic spices",
        price: "₹350",
        category: "mains",
        image: "https://myfoodstory.com/wp-content/uploads/2021/10/Paneer-Butter-Masala-1-2.jpg"
    },
    {
        id: 7,
        name: "Palak Paneer",
        description: "Fresh cottage cheese cubes in creamy spinach gravy with traditional spices",
        price: "₹380",
        category: "mains",
        image: "https://latashaskitchen.com/wp-content/uploads/2019/06/SS_533073802_Palak-Paneer_500k.jpg"
    },
    {
        id: 8,
        name: "Biryani (Veg)",
        description: "Fragrant basmati rice layered with spiced paneer, cooked in traditional dum style",
        price: "₹320",
        category: "mains",
        image: "https://revi.b-cdn.net/wp-content/uploads/2017/01/paneer-biryani-1.jpg"
    },
    {
        id: 9,
        name: "Dal Makhani",
        description: "Slow-cooked black lentils in rich, creamy tomato gravy with butter and cream",
        price: "₹320",
        category: "mains",
        image: "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg"
    },
    {
        id: 10,
        name: "Special Rajma ",
        description: "Slow-cooked red kidney beans simmered in a rich tomato-onion gravy with aromatic spices, served with steamed rice for a comforting North Indian classic",
        price: "₹280",
        category: "mains",
        image: "https://www.quicklly.com/upload_images/blog/1625645557-special-rajma-recipe-by-quicklly-world-of-recipes.jpg"
    },
    {
        id: 11,
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with fluffy deep-fried bread",
        price: "₹180",
        category: "mains",
        image: "https://1.bp.blogspot.com/-L66VrQhkQuU/YLdkIJoFEsI/AAAAAAAASNU/8cGZe6gFsQ8e8Tb7n_Q3nJUXl6dWZ0fswCLcBGAsYHQ/s2000/IMG_20210601_190018%257E2_compress9.jpg"
    },
    {
        id: 12,
        name: "Egg Curry",
        description: "Boiled eggs simmered in a spicy, flavorful tomato-onion gravy infused with aromatic Indian spices, served hot with rice or roti",
        price: "₹280",
        category: "mains",
        image: "https://images.services.kitchenstories.io/vmRyyK5xOTfkP0Jatqunl2h-11w=/1200x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2899-photo-final-3x4.jpg"
    },

    // Desserts
    {
        id: 13,
        name: "Gulab Jamun",
        description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
        price: "₹180",
        category: "desserts",
        image: "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg"
    },
    {
        id: 14,
        name: "Rasmalai",
        description: "Soft cottage cheese dumplings in sweetened, thickened milk with cardamom",
        price: "₹220",
        category: "desserts",
        image: "https://www.rachnas-kitchen.com/wp-content/uploads/2016/02/image-4.jpeg"
    },
    {
        id: 15,
        name: "Kulfi",
        description: "Traditional Indian ice cream made with milk, cardamom, and pistachios",
        price: "₹150",
        category: "desserts",
        image: "https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/04/kulfi-17.jpg"
    },
    {
        id: 16,
        name: "Kheer",
        description: "Creamy rice pudding flavored with cardamom, saffron, and garnished with nuts",
        price: "₹160",
        category: "desserts",
        image: "https://i0.wp.com/www.honeywhatscooking.com/wp-content/uploads/2020/10/Rice-Kheer-Indian-Rice-Pudding44.jpg?w=1536&ssl=1"
    },

    // Beverages
    {
        id: 17,
        name: "Masala Chai",
        description: "Traditional spiced tea brewed with milk, cardamom, ginger, and other aromatic spices",
        price: "₹80",
        category: "drinks",
        image: "https://masalaandchai.com/wp-content/uploads/2021/07/Masala-Chai-Featured.jpg"
    },
    {
        id: 18,
        name: "Mango Lassi",
        description: "Refreshing yogurt-based drink blended with sweet mango pulp",
        price: "₹120",
        category: "drinks",
        image: "https://www.beyondthebayoublog.com/wp-content/uploads/2024/03/Mango-Lassi-Recipe-A-Refreshing-Tropical-Delight.png"
    },
    {
        id: 19,
        name: "Fresh Lime Water",
        description: "Refreshing drink made with fresh lime juice, water, and a hint of mint",
        price: "₹60",
        category: "drinks",
        image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322556_1100-800x825.jpg"
    },
    {
        id: 20,
        name: "Buttermilk (Chaas)",
        description: "Traditional yogurt-based drink seasoned with cumin, mint, and black salt",
        price: "₹70",
        category: "drinks",
        image: "https://culinaryshades.com/wp-content/uploads/2021/05/indian-buttermilk-rc-scaled.jpeg"
    },
    {
        id: 21,
        name: "Rose Milk",
        description: "Chilled milk flavored with rose syrup and garnished with rose petals",
        price: "₹90",
        category: "drinks",
        image: "https://www.spiceupthecurry.com/wp-content/uploads/2023/04/rose-milk-recipe-2.jpg"
    },
    {
        id: 22,
        name: "Thandai",
        description: "Traditional festive drink made with milk, almonds, and aromatic spices",
        price: "₹140",
        category: "drinks",
        image: "https://mytastycurry.com/wp-content/uploads/2023/03/Thandai-Featured.jpg"
    },
  {
    id: 23, 
    name: "Hakka Noodles",
    description: "Stir-fried noodles tossed with fresh vegetables and flavorful sauces, a perfect Indo-Chinese delight",
    price: "₹200",
    category: "appetizers",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg"
},
  {
    id: 24, 
    name: "Spring Rolls",
    description: "Crispy fried rolls stuffed with fresh vegetables and served with a tangy dipping sauce",
    price: "₹190",
    category: "appetizers",
    image: "https://vegecravings.com/wp-content/uploads/2016/09/spring-roll-recipe-step-by-step-instructions.jpg"
},
{
    id: 25, 
    name: "Cheese Balls",
    description: "Golden fried cheese balls that melt in your mouth, served with spicy mayo",
    price: "₹220",
    category: "appetizers",
    image: "https://gimmedelicious.com/wp-content/uploads/2020/11/Cheeseball-4.jpg"
},
{
    id: 26, 
    name: "Paneer Pakora",
    description: "Crispy gram flour-coated paneer fritters served with green chutney",
    price: "₹180",
    category: "appetizers",
    image: "https://pipingpotcurry.com/wp-content/uploads/2022/10/Paneer-Pakora-Recipe-Piping-Pot-Curry.jpg"
},
{
    id: 27, 
    name: "Veg Manchurian",
    description: "Crispy vegetable balls tossed in a spicy, tangy Indo-Chinese sauce",
    price: "₹230",
    category: "appetizers",
    image: "https://1.bp.blogspot.com/-VCkjsS1Tfmo/XgzLILEh5oI/AAAAAAAAACA/Yg7TKYf6VYUlNm33vg35es80Zq3yRMJLwCLcBGAsYHQ/s1600/manchuri.jpg"
},
{
    id: 28, 
    name: "Chilli Paneer",
    description: "Paneer cubes tossed with bell peppers and onions in a spicy chili sauce",
    price: "₹260",
    category: "appetizers",
    image: "https://maunikagowardhan.co.uk/wp-content/uploads/2011/11/Chilli-Paneer.jpg"
},
{
    id: 29, 
    name: "Dahi Puri",
    description: "Crispy puris filled with yogurt, chutneys, and spices for a burst of flavors",
    price: "₹150",
    category: "appetizers",
    image: "https://www.whiskaffair.com/wp-content/uploads/2019/05/Dahi-Puri-2-3.jpg"
},
{
    id: 30, 
    name: "Stuffed Mushrooms",
    description: "Juicy mushrooms stuffed with cheese and herbs, baked to perfection",
    price: "₹250",
    category: "appetizers",
    image: "https://www.bakerita.com/wp-content/uploads/2022/09/Vegan-Stuffed-Mushrooms-10.jpg"
},
{
    id: 31, 
    name: "French Fries",
    description: "Golden, crispy potato fries sprinkled with salt and served with ketchup",
    price: "₹120",
    category: "appetizers",
    image: "https://goldenfingers.us/wp-content/uploads/2020/03/french_fry.jpg"
},
{
    id: 32, 
    name: "Paneer 65",
    description: "Crispy fried paneer cubes tossed with spicy masala and curry leaves",
    price: "₹240",
    category: "appetizers",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/11/paneer-65-recipe-1.jpg"
},
{
    id: 33, 
    name: "Onion Rings",
    description: "Crunchy fried onion rings coated with seasoned batter, served with dip",
    price: "₹180",
    category: "appetizers",
    image: "https://burgerbites.be/wp-content/uploads/2020/03/onion-rings-scaled.jpg"
},
  {
    id: 34, 
    name: "Paneer Lababdar",
    description: "Paneer cooked in a luscious tomato-based gravy with butter, cream, and a hint of spices for a rich taste",
    price: "₹360",
    category: "mains",
    image: "https://myfoodstory.com/wp-content/uploads/2022/01/Paneer-Lababdar-2-1024x1536.jpg"
},
{
    id: 35, 
    name: "Kadhai Paneer",
    description: "Paneer tossed with bell peppers, onions, and aromatic spices in a semi-dry gravy",
    price: "₹340",
    category: "mains",
    image: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg?w=1612&quality=65&strip=all&ssl=1"
},
{
    id: 36, 
    name: "Matar Paneer",
    description: "Paneer and green peas cooked in a mildly spiced onion-tomato gravy",
    price: "₹320",
    category: "mains",
    image: "https://recipes.timesofindia.com/photo/53251884.cms?imgsize=137727"
},
{
    id: 37, 
    name: "Paneer Bhurji",
    description: "Scrambled paneer cooked with onions, tomatoes, and aromatic spices",
    price: "₹300",
    category: "mains",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/paneer-bhurji-4-736x981.jpg"
},
{
    id: 38, 
    name: "Malai Kofta",
    description: "Soft paneer-potato balls in a rich, creamy tomato-cashew gravy",
    price: "₹380",
    category: "mains",
    image: "https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg"
},
{
    id: 39, 
    name: "Veg Handi",
    description: "A rich and aromatic mixed vegetable curry cooked in a traditional handi with flavorful spices and cream",
    price: "₹350",
    category: "mains",
    image: "https://candidtreat.com/wp-content/uploads/2021/01/Nizamihandi-scaled-1-958x575.jpeg" 
},
{
    id: 40, 
    name: "Veg Pulao",
    description: "Fragrant basmati rice cooked with fresh vegetables and mild spices",
    price: "₹250",
    category: "mains",
    image: "https://www.awesomecuisine.com/wp-content/uploads/2008/02/Vegetable-Pulao-500x500.jpg"
},
{
    id: 41, 
    name: "Jeera Rice",
    description: "Steamed basmati rice flavored with cumin seeds and ghee",
    price: "₹180",
    category: "mains",
    image: "https://i.pinimg.com/originals/84/90/44/8490442c9143041c693804bc6106fcf8.jpg"
},
{
    id: 42, 
    name: "Vegetable Korma",
    description: "Mixed vegetables cooked in a creamy coconut-cashew gravy with Indian spices",
    price: "₹300",
    category: "mains",
    image: "https://thebigmansworld.com/wp-content/uploads/2022/11/vegetable-korma-recipe.jpg"
},
{
    id: 43, 
    name: "Veg Fried Rice",
    description: "Stir-fried rice tossed with fresh vegetables and flavorful sauces",
    price: "₹270",
    category: "mains",
    image: "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/VegetableFriedRice.webp"
},
{
    id: 44,
    name: "Kaju Katli",
    description: "A rich and classic Indian sweet made from cashew nuts, sugar, and ghee, garnished with silver leaf",
    price: "₹250",
    category: "desserts",
    image: "https://www.parsidairyfarm.com/cdn/shop/files/KajuKatli.jpg?v=1699528323"
},
 
  {
    id: 45, 
    name: "Paneer Kathi Roll",
    description: "Soft paratha stuffed with spiced paneer cubes, onions, and tangy chutneys.",
    price: "₹180",
    category: "rolls",
    image: "https://i.pinimg.com/originals/ce/68/2a/ce682a97579081bc5341b10b44ba5709.webp"
  },
  {
    id: 46, 
    name: "Veg Frankie",
    description: "Mumbai-style roll packed with spiced veggies, tangy sauces, and masala powder.",
    price: "₹150",
    category: "rolls",
    image: "https://i.pinimg.com/originals/8d/b1/3d/8db13d03ed572c82a82e848d5194c766.jpg"
  },
  {
    id: 47, 
    name: "Paneer Bhurji Roll",
    description: "Scrambled paneer cooked with spices and wrapped in a paratha.",
    price: "₹170",
    category: "rolls",
    image: "https://www.awesomecuisine.com/content_images/1/egg_bhurji_roll.jpg"
  },
  {
    id: 48, 
    name: "Aloo Tikki Roll",
    description: "Crispy potato patty with spicy chutneys rolled in paratha.",
    price: "₹140",
    category: "rolls",
    image: "https://i.ytimg.com/vi/UDQQdi9hhFk/maxresdefault.jpg"
  },
  {
    id: 49, 
    name: "Soya Chaap Roll",
    description: "Tandoori marinated soya chaap stuffed with mint chutney and onions.",
    price: "₹180",
    category: "rolls",
    image: "https://images.marico.in/1200x0/uploads/chaap-roll-1-3296.jpg"
  },
  {
    id: 50, 
    name: "Cheese Veg Roll",
    description: "Loaded with veggies and gooey melted cheese wrapped in a paratha.",
    price: "₹160",
    category: "rolls",
    image: "https://i.ytimg.com/vi/9UlRvBhI398/maxresdefault.jpg"
  },
  {
    id: 51, 
    name: "Paneer Tikka Roll",
    description: "Paneer tikka chunks with mint chutney wrapped in soft roti.",
    price: "₹190",
    category: "rolls",
    image: "https://1.bp.blogspot.com/-YMiG9Fczylc/WJSmtZMNQ3I/AAAAAAAAAzs/6ru2B_ipb4QTolRgXRnhOwp3e_uvOLi7wCEw/s1600/Paneer%2Btikka%2Bkathi%2Broll%2B3.jpg"
  },
  {
    id: 52, 
    name: "Mushroom Masala Roll",
    description: "Spicy mushroom curry wrapped in a flaky paratha.",
    price: "₹170",
    category: "rolls",
    image: "https://www.southindianfoods.in/images/mushroom-masala-spring-dosa-rolls.jpg"
  },
  {
    id: 53, 
    name: "Chilli Paneer Roll",
    description: "Paneer tossed in Indo-Chinese chilli sauce rolled in a paratha.",
    price: "₹200",
    category: "rolls",
    image: "https://aartimadan.com/wp-content/uploads/2021/09/Chilli-Paneer-Roll.jpg"
  },
  {
    id: 54, 
    name: "Mix Veg Roll",
    description: "Healthy veggies sautéed with spices wrapped in soft roti.",
    price: "₹130",
    category: "rolls",
    image: "https://i.ytimg.com/vi/9UlRvBhI398/maxresdefault.jpg"
  },
  {
    id: 55, 
    name: "Corn & Cheese Roll",
    description: "Creamy sweet corn and cheese filling inside a crispy roll.",
    price: "₹160",
    category: "rolls",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Corn-Cheese-Kathi-Roll.jpg"
  },
  {
    id: 56, 
    name: "Palak Paneer Roll",
    description: "Spinach and paneer filling wrapped in a whole wheat paratha.",
    price: "₹180",
    category: "rolls",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/palak-paneer-kathi-roll-recipe.jpg"
  },
  {
    id: 57, 
    name: "Paneer Bhuna Masala Roll",
    description: "Paneer cooked in bhuna masala wrapped in a paratha.",
    price: "₹190",
    category: "rolls",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1seyCk.img?w=1280&h=720&m=4&q=89"
  },
  {
    id: 58, 
    name: "Tandoori Veg Roll",
    description: "Grilled tandoori vegetables in spicy sauce wrapped in paratha.",
    price: "₹170",
    category: "rolls",
    image: "https://c.ndtvimg.com/2024-02/bbvgfbmg_kathi-rolls_625x300_12_February_24.jpg"
  },
  {
    id: 59, 
    name: "Hara Bhara Kebab Roll",
    description: "Green spinach kebabs wrapped with mint chutney in a soft roll.",
    price: "₹150",
    category: "rolls",
    image: "https://product-assets.faasos.io/production/product/image_1677664588304_Classic_Hara_bhara_kebab_wrap.jpg"
  },
   {
    id: 60,
    name: "Jalebi",
    description: "Crispy, spiral-shaped sweets soaked in saffron-flavored sugar syrup",
    price: "₹120",
    category: "desserts",
    image: "https://recipes.timesofindia.com/photo/53099699.cms"
},
{
    id: 61,
    name: "Rasgulla",
    description: "Soft, spongy balls made of chenna soaked in sugar syrup",
    price: "₹140",
    category: "desserts",
    image: "https://recipes.timesofindia.com/photo/52743612.cms?imgsize=700158"
},
{
    id: 62,
    name: "Soan Papdi",
    description: "Flaky, melt-in-mouth sweet made with gram flour, ghee, and sugar",
    price: "₹130",
    category: "desserts",
    image: "https://www.awesomecuisine.com/wp-content/uploads/2019/10/soan-papdi.jpg"
},
{
    id: 63,
    name: "Gajar Ka Halwa",
    description: "Traditional carrot pudding made with milk, ghee, and dry fruits",
    price: "₹170",
    category: "desserts",
    image: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/03/Gajar-Halwa-Recipe-Step-By-Step-Instructions-scaled.jpeg?w=2560&quality=65&strip=all&ssl=1"
},
{
    id: 64,
    name: "Mysore Pak",
    description: "Soft, rich sweet made with ghee, gram flour, and sugar",
    price: "₹150",
    category: "desserts",
    image: "https://images.herzindagi.info/image/2019/Apr/mysore-pak-image.jpg"
},
{
    id: 65,
    name: "Malpua",
    description: "Fried pancakes soaked in sugar syrup and garnished with nuts",
    price: "₹160",
    category: "desserts",
    image: "https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/07/malpua-recipe-step-by-step-instructions-17.jpg?fit=1991%2C1944&ssl=1"
},
{
    id: 66,
    name: "Phirni",
    description: "Creamy ground rice dessert flavored with saffron and cardamom",
    price: "₹150",
    category: "desserts",
    image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/10/Phirni-Thumbnail.jpg" 
},
{
    id: 67,
    name: "Sandesh",
    description: "Bengali sweet made of fresh paneer, flavored with cardamom and saffron",
    price: "₹140",
    category: "desserts",
    image: "https://www.foodie-trail.com/wp-content/uploads/2023/03/PHOTO-2023-02-15-16-50-30_1.jpg"
},
{
    id: 68,
    name: "Ladoo",
    description: "Round-shaped sweets made from gram flour and ghee, flavored with cardamom",
    price: "₹120",
    category: "desserts",
    image: "https://www.sattvicfood.co.uk/productimages/1200/motichoor-ladoo_169127.jpg"
},
{
    id: 69,
    name: "Shahi Tukda",
    description: "Rich bread pudding made with fried bread, rabri, and nuts",
    price: "₹180",
    category: "desserts",
    image: "https://www.felicityplus.com/wp-content/uploads/2020/05/shahi-tukda-40-720x720.jpg"
},
{
    id: 70,
    name: "Modak",
    description: "Steamed sweet dumplings filled with coconut and jaggery",
    price: "₹160",
    category: "desserts",
    image: "https://shwetainthekitchen.com/wp-content/uploads/2020/08/Ukadiche-Modak.jpg"
},
{
    id: 71,
    name: "Cold Coffee",
    description: "Iced coffee blended with milk, sugar, and topped with whipped cream",
    price: "₹150",
    category: "drinks",
    image: "https://rachnas-kitchen.com/wp-content/uploads/2017/07/cold-coffee-2.jpg"
},
{
    id: 72,
    name: "Coca-Cola",
    description: "Classic carbonated soft drink, chilled to perfection",
    price: "₹60",
    category: "drinks",
    image: "https://www.mashed.com/img/gallery/the-two-places-you-wont-find-coca-cola/l-intro-1660922047.jpg"
},
{
    id: 73,
    name: "Pepsi",
    description: "Refreshing cola-flavored cold drink served chilled",
    price: "₹60",
    category: "drinks",
    image: "https://wallpapercave.com/wp/wp2854511.jpg"
},
{
    id: 74,
    name: "Sprite",
    description: "Lemon-lime flavored soft drink that is crisp and refreshing",
    price: "₹60",
    category: "drinks",
    image: "https://thumbs.dreamstime.com/z/cold-sprite-cans-ice-brand-soft-drink-created-coca-cola-company-popular-soft-drink-singapore-cold-sprite-cans-172769966.jpg"
},
{
    id: 75,
    name: "Fanta",
    description: "Orange-flavored fizzy drink served ice-cold",
    price: "₹60",
    category: "drinks",
    image: "https://facts.net/wp-content/uploads/2023/06/Fanta-can.jpeg"
},
{
    id: 76,
    name: "Iced Tea",
    description: "Chilled tea infused with lemon and served over ice",
    price: "₹120",
    category: "drinks",
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2022/09/Classic-Lemon-Iced-Tea-in-Glass.jpg"
},
{
    id: 77,
    name: "Virgin Mojito",
    description: "Refreshing mix of lemon, mint, soda, and ice – a perfect summer cooler",
    price: "₹150",
    category: "drinks",
    image: "https://aromaticessence.co/wp-content/uploads/2022/05/virhin_mojito_4.jpg"
},
{
    id: 78,
    name: "Tender Coconut Water",
    description: "Naturally refreshing drink straight from tender coconut",
    price: "₹50",
    category: "drinks",
    image: "https://www.nutritionfact.in/wp-content/uploads/2023/04/Tender-Coconut-Water-1536x864.jpg"
},
{
    id: 79,
    name: "Milkshake (Chocolate)",
    description: "Rich chocolate milkshake topped with whipped cream and choco chips",
    price: "₹180",
    category: "drinks",
    image: "https://www.sugarandsoul.co/wp-content/uploads/2021/04/chocolate-milkshake-8.jpg"
},
{
    id: 80,
    name: "Falooda",
    description: "A delicious drink with milk, rose syrup, vermicelli, and ice cream",
    price: "₹200",
    category: "drinks",
    image: "https://shwetainthekitchen.com/wp-content/uploads/2020/06/IMG_0058-1365x2048.jpg"
},
{
    id: 81,
    name: "Pav Bhaji",
    description: "Mumbai's favorite street food – buttery mashed vegetables served with toasted pav buns and a slice of lemon",
    price: "₹180",
    category: "appetizers",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg"
},
{
    id: 82,
    name: "Masala Dosa",
    description: "Crispy fermented rice and lentil crepe filled with spiced potato masala, served with chutney and sambar",
    price: "₹150",
    category: "appetizers",
    image: "https://i0.wp.com/www.nandanmsd.com/wp-content/uploads/2020/08/Masala-Dosa.jpg?fit=1280%2C720&ssl=1"
}

];