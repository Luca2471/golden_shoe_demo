use products;
db.dropDatabase();

db.products.insertMany([
  {
    "brand": "Nike",
    "model": "Air Max",
    "price": 120,
    "colour": "Black",
    "size": [5, 6, 7, 8, 9, 10, 11, 12],
    "img": "https://prjimgs.s3.eu-west-2.amazonaws.com/nike-airmax-black-men.jpg",
    "stock": 4,
    "gender": "Male"
  },
  {
    "brand": "Nike",
    "model": "Air Max",
    "price": 115,
    "colour": "White",
    "size": [5, 6, 7, 8, 9, 10, 11, 12],
    "img": "https://prjimgs.s3.eu-west-2.amazonaws.com/nike-airmax-white-men.jpg",
    "stock": 2,
    "gender": "Male"
  },
  {
    "brand": "Adidas",
    "model": "Ultraboost",
    "price": 160,
    "colour": "Black",
    "size": [5, 6, 7, 8, 9, 10, 11, 12],
    "img": "https://prjimgs.s3.eu-west-2.amazonaws.com/adidas-ultraboost-black-men.jpg",
    "stock": 5,
    "gender": "Male"
  },
  {
    "brand": "Adidas",
    "model": "Running",
    "price": 80,
    "colour": "White",
    "size": [5, 6, 7, 8, 9, 10, 11, 12],
    "img": "https://prjimgs.s3.eu-west-2.amazonaws.com/adidas-running-white-men.jpg",
    "stock": 0,
    "gender": "Male"
  },
  {
    "brand": "Vans",
    "model": "Filmore Decon",
    "price": 45,
    "colour": "Peach",
    "size": [4, 5, 6, 7, 8],
    "img": "https://prjimgs.s3.eu-west-2.amazonaws.com/vans-filmore-decon-peach-women.jpg",
    "stock": 3,
    "gender": "Female"
  },
  {
    "brand": "London Rebel",
    "model": "Heeled Ankle Boots",
    "price": 32,
    "colour": "Black",
    "size": [4, 5, 6, 7, 8],
    "img": "https://prjimgs.s3.eu-west-2.amazonaws.com/london-rebel-heeled-ankle-boots-black-women.jpg",
    "stock": 5,
    "gender": "Female"
  },
  {
    "brand": "Depp",
    "model": "Flat Shoes",
    "price": 46,
    "colour": "White",
    "size": [4, 5, 6, 7, 8],
    "img": "https://prjimgs.s3.eu-west-2.amazonaws.com/depp-flat-shoes-white-women.jpg",
    "stock": 2,
    "gender": "Female"
  },
  {
    "brand": "New Look",
    "model": "Ankle Boots",
    "price": 28,
    "colour": "Brown",
    "size": [4, 5, 6, 7, 8],
    "img": "https://prjimgs.s3.eu-west-2.amazonaws.com/new-look-ankle-boot-brown-women.jpg",
    "stock": 0,
    "gender": "Female"
  }
]);