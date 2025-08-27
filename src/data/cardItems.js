const cardItems = [
  {
    "id": "1",
    "name": "Pizza Palace",
    "cuisine": "Italian, Pizza",
    "rating": 4.6,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/1",
    "deliveryTime": 30
  },
  {
    "id": "2",
    "name": "Biryani House",
    "cuisine": "Indian, Biryani",
    "rating": 4.2,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/2",
    "deliveryTime": 40
  },
  {
    "id": "3",
    "name": "Burger Hub",
    "cuisine": "American, Fast Food",
    "rating": 4.8,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/3",
    "deliveryTime": 25
  },
  {
    "id": "4",
    "name": "Taco Fiesta",
    "cuisine": "Mexican, Tacos",
    "rating": 4.3,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/4",
    "deliveryTime": 28
  },
  {
    "id": "5",
    "name": "Sushi World",
    "cuisine": "Japanese, Sushi",
    "rating": 4.7,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5",
    "deliveryTime": 35
  },
  {
    "id": "6",
    "name": "Curry Corner",
    "cuisine": "Indian, North Indian",
    "rating": 4.1,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/6",
    "deliveryTime": 32
  },
  {
    "id": "7",
    "name": "BBQ Nation",
    "cuisine": "BBQ, Grill",
    "rating": 4.5,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7",
    "deliveryTime": 45
  },
  {
    "id": "8",
    "name": "Healthy Bites",
    "cuisine": "Salads, Healthy",
    "rating": 4.0,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8",
    "deliveryTime": 20
  },
  {
    "id": "9",
    "name": "Pasta Point",
    "cuisine": "Italian, Pasta",
    "rating": 4.4,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/9",
    "deliveryTime": 27
  },
  {
    "id": "10",
    "name": "Dragon Wok",
    "cuisine": "Chinese, Asian",
    "rating": 4.3,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/10",
    "deliveryTime": 33
  },
  {
    "id": "11",
    "name": "Shawarma King",
    "cuisine": "Middle Eastern, Shawarma",
    "rating": 4.6,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/11",
    "deliveryTime": 22
  },
  {
    "id": "12",
    "name": "South Spice",
    "cuisine": "South Indian, Dosa",
    "rating": 4.1,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/12",
    "deliveryTime": 26
  },
  {
    "id": "13",
    "name": "Wraps & Rolls",
    "cuisine": "Fast Food, Wraps",
    "rating": 4.2,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/13",
    "deliveryTime": 18
  },
  {
    "id": "14",
    "name": "Cafe Delight",
    "cuisine": "Cafe, Beverages",
    "rating": 4.0,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/14",
    "deliveryTime": 15
  },
  {
    "id": "15",
    "name": "Steak House",
    "cuisine": "American, Steak",
    "rating": 4.7,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/15",
    "deliveryTime": 50
  },
  {
    "id": "16",
    "name": "Veggie World",
    "cuisine": "Vegetarian, Vegan",
    "rating": 4.3,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/16",
    "deliveryTime": 24
  },
  {
    "id": "17",
    "name": "Seafood Shack",
    "cuisine": "Seafood, Continental",
    "rating": 4.5,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/17",
    "deliveryTime": 38
  },
  {
    "id": "18",
    "name": "Chaat Bazaar",
    "cuisine": "Indian, Street Food",
    "rating": 4.2,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/18",
    "deliveryTime": 19
  },
  {
    "id": "19",
    "name": "Dessert Den",
    "cuisine": "Desserts, Ice Cream",
    "rating": 4.8,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/19",
    "deliveryTime": 12
  },
  {
    "id": "20",
    "name": "Kebab Junction",
    "cuisine": "Mughlai, Kebab",
    "rating": 4.4,
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/20",
    "deliveryTime": 29
  }
]
export default cardItems;