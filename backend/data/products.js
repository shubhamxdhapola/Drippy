function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const products = shuffleArray([
  {
    "name": "Graphic Cotton T-Shirt",
    "description": "Elevate your casual look with this breathable cotton t-shirt featuring a bold graphic print. Great for weekend hangouts or relaxed Fridays.",
    "price": 1599,
    "discountPrice": 1199,
    "countInStock": 50,
    "sku": "GRPH-TSH-101",
    "category": "Top Wear",
    "brand": "Urban Crew",
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "colors": ["White", "Charcoal Grey", "Olive Green"],
    "collections": "Casual Wear",
    "material": "100% Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.bewakoof.com/t1080/men-s-black-venom-graphic-printed-oversized-acid-wash-t-shirt-652355-1742818571-1.jpg",
        "altText": "Graphic T-Shirt Front View"
      },
      {
        "url": "https://images.bewakoof.com/t1080/men-s-black-venom-graphic-printed-oversized-acid-wash-t-shirt-652355-1729593681-2.jpg",
        "altText": "Graphic T-Shirt Back View"
      },
      {
        "url": "https://images.bewakoof.com/t1080/men-s-black-venom-graphic-printed-oversized-acid-wash-t-shirt-652355-1729593690-4.jpg",
        "altText": "Graphic T-Shirt Back View"
      },
      {
        "url": "https://images.bewakoof.com/t1080/men-s-black-venom-graphic-printed-oversized-acid-wash-t-shirt-652355-1729593694-5.jpg",
        "altText": "Graphic T-Shirt Back View"
      },
      {
        "url": "https://images.bewakoof.com/t1080/men-s-black-venom-graphic-printed-oversized-acid-wash-t-shirt-652355-1729593698-6.jpg",
        "altText": "Graphic T-Shirt Back View"
      },
    ],
    "rating": 4.5,
    "numReviews": 28
  },
  {
    "name": "Solid Crew Neck T-Shirt",
    "description": "A clean and minimalistic crew neck t-shirt that fits just right. Pair it with jeans or joggers for a timeless look.",
    "price": 1099,
    "discountPrice": 899,
    "countInStock": 60,
    "sku": "SOLID-TSH-203",
    "category": "Top Wear",
    "brand": "Essentials",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Black", "Maroon", "Sky Blue"],
    "collections": "Essentials",
    "material": "Cotton Blend",
    "gender": "Men",
    "images": [
      {
        "url": "https://desiminimals.com/cdn/shop/files/8_483ee838-3cd6-454e-8b82-966a0fbf1862.jpg?v=1721214500&width=1080",
        "altText": "Solid Crew Neck T-Shirt Front View"
      },
      {
        "url": "https://desiminimals.com/cdn/shop/files/5_0f7205fa-31dd-4137-a1d2-3632ddff124f.jpg?v=1721214500&width=1800",
        "altText": "Solid Crew Neck T-Shirt Side View"
      },
      {
        "url": "https://desiminimals.com/cdn/shop/files/7_1feb5bee-b2df-4ea7-b645-a0746e8ec9f8.jpg?v=1721214500&width=1800",
        "altText": "Solid Crew Neck T-Shirt Side View"
      },
      {
        "url": "https://desiminimals.com/cdn/shop/files/3_168943a4-64d4-44dc-b4ce-561734274e5a.jpg?v=1721214500&width=1800",
        "altText": "Solid Crew Neck T-Shirt Side View"
      },
      {
        "url": "https://desiminimals.com/cdn/shop/files/6_75ad826a-19c3-4592-af60-e95479327df3.jpg?v=1721214500&width=1800",
        "altText": "Solid Crew Neck T-Shirt Side View"
      },
    ],
    "rating": 4.3,
    "numReviews": 34
  },
  {
    "name": "Oversized Drop Shoulder T-Shirt",
    "description": "Stay ahead of the fashion curve with this trendy oversized t-shirt. The drop shoulders give it a relaxed street-style vibe.",
    "price": 1799,
    "discountPrice": 1499,
    "countInStock": 40,
    "sku": "OVRSZ-TSH-312",
    "category": "Top Wear",
    "brand": "Street Mode",
    "sizes": ["M", "L", "XL"],
    "colors": ["Beige", "Dusty Pink", "Steel Grey"],
    "collections": "Streetwear",
    "material": "Organic Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/24918880/2023/10/26/086396d5-1d38-41d5-b850-18a017d21e341698310263203-Roadster-Men-Tshirts-2631698310262839-1.jpg",
        "altText": "Oversized Drop Shoulder T-Shirt Front"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/24918880/2023/10/26/61b0b9b1-b37c-466d-9e46-cba1fafb78bd1698310263192-Roadster-Men-Tshirts-2631698310262839-2.jpg",
        "altText": "Oversized Drop Shoulder T-Shirt Side"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/24918880/2023/10/26/ca701f54-477a-484d-a659-6d89e58d4a2d1698310263180-Roadster-Men-Tshirts-2631698310262839-3.jpg",
        "altText": "Oversized Drop Shoulder T-Shirt Side"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/24918880/2023/10/26/4cef382f-5f1a-4284-a14b-52b8579feadf1698310263170-Roadster-Men-Tshirts-2631698310262839-4.jpg",
        "altText": "Oversized Drop Shoulder T-Shirt Side"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/24918880/2023/10/26/b8eb0b01-7073-4a68-9088-83a073df6a121698310263158-Roadster-Men-Tshirts-2631698310262839-5.jpg"
      },
    ],
    "rating": 4.7,
    "numReviews": 21
  },
  {
    "name": "Henley Neck Full Sleeve T-Shirt",
    "description": "This Henley tee with a button placket and full sleeves adds a dash of charm to your casual look. Ideal for breezy evenings.",
    "price": 1399,
    "discountPrice": 1099,
    "countInStock": 45,
    "sku": "HNLY-TSH-420",
    "category": "Top Wear",
    "brand": "Classic Threads",
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Navy Blue", "Forest Green", "Heather Grey"],
    "collections": "Winter Edit",
    "material": "Cotton + Lycra",
    "gender": "Men",
    "images": [
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20241024/0dLe/6719e23b260f9c41e8987faa/-473Wx593H-700197172-cream-MODEL.jpg",
        "altText": "Henley Neck T-Shirt Front"
      },
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20241024/7SIM/6719e051260f9c41e89878b9/-473Wx593H-700197172-cream-MODEL3.jpg",
        "altText": "Henley Neck T-Shirt Back"
      },
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20241024/Tbju/6719e0d2f9b8ef490bdacf8b/-473Wx593H-700197172-cream-MODEL4.jpg",
        "altText": "Henley Neck T-Shirt Back"
      },
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20241024/Tbju/6719e0d2f9b8ef490bdacf8b/-473Wx593H-700197172-cream-MODEL4.jpg",
        "altText": "Henley Neck T-Shirt Back"
      },
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20241024/Ev3v/6719df1ff9b8ef490bdac5db/-473Wx593H-700197172-cream-MODEL5.jpg",
        "altText": "Henley Neck T-Shirt Back"
      },
    ],
    "rating": 4.6,
    "numReviews": 17
  },
  {
    name: "Slim-Fit Stretch Shirt",
    description:
      "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day.",
    price: 2999,
    discountPrice: 2499,
    countInStock: 35,
    sku: "SLIM-SH-002",
    category: "Top Wear",
    brand: "Modern Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy Blue", "Burgundy"],
    collections: "Formal Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://thebearhouse.com/cdn/shop/files/TBH-VAORI-GY_1.jpg?format=webp&v=1742455748&width=1800",
        altText: "Slim-Fit Stretch Shirt Front View",
      },
      {
        url: "https://thebearhouse.com/cdn/shop/files/TBH-VAORI-GY_2.jpg?format=webp&v=1742455748&width=1800",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
      {
        url: "https://thebearhouse.com/cdn/shop/files/TBH-VAORI-GY_3.jpg?format=webp&v=1742455748&width=1800",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
      {
        url: "https://thebearhouse.com/cdn/shop/files/TBH-VAORI-GY_4.jpg?format=webp&v=1742455749&width=1800",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
      {
        url: "https://thebearhouse.com/cdn/shop/files/TBH-VAORI-GY_5.jpg?format=webp&v=1742455749&width=1800",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit.",
    price: 3999,
    discountPrice: 3499,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Business Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://img.tatacliq.com/images/i20//658Wx734H/MP000000024033631_658Wx734H_202410110708355.jpeg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
      {
        url: "https://img.tatacliq.com/images/i20//658Wx734H/MP000000024033631_658Wx734H_202410110708293.jpeg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
      {
        url: "https://img.tatacliq.com/images/i20//658Wx734H/MP000000024033631_658Wx734H_202410110708312.jpeg",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://img.tatacliq.com/images/i20//658Wx734H/MP000000024033631_658Wx734H_202410110708326.jpeg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
      {
        url: "https://img.tatacliq.com/images/i20//658Wx734H/MP000000024033631_658Wx734H_202410110708368.jpeg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Casual Denim Shirt",
    description:
      "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    price: 4999,
    discountPrice: 4499,
    countInStock: 15,
    sku: "CAS-DEN-003",
    category: "Top Wear",
    brand: "Street Style",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Light Blue", "Dark Wash"],
    collections: "Casual Wear",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/28354910/2024/6/6/f50f6a48-5330-4e5d-a876-4911bb95ea7f1717674810371RoadsterMensLupoDenimOversizeLongSleeveSinglePocketShirts4.jpg",
        altText: "Casual Denim Shirt Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/28354910/2024/6/6/6fc3816d-e415-43be-8afa-0ca4a79ad76c1717674810380RoadsterMensLupoDenimOversizeLongSleeveSinglePocketShirts5.jpg",
        altText: "Casual Denim Shirt Back View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/28354910/2024/6/6/a55fbf18-fe51-49ab-9671-77cf5e2018801717674810353RoadsterMensLupoDenimOversizeLongSleeveSinglePocketShirts2.jpg",
        altText: "Casual Denim Shirt Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/28354910/2024/6/6/fc9a8ac1-8c55-4c82-bcfe-d004df5cc0791717674810362RoadsterMensLupoDenimOversizeLongSleeveSinglePocketShirts3.jpg",
        altText: "Casual Denim Shirt Back View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/28354910/2024/6/6/d40fd9ac-5971-49e7-b914-adab2b8633ec1717674810345RoadsterMensLupoDenimOversizeLongSleeveSinglePocketShirts1.jpg",
        altText: "Casual Denim Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 8,
  },
  {
    name: "Polo T-Shirt with Ribbed Collar",
    description:
      "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    price: 2499,
    discountPrice: 1999,
    countInStock: 50,
    sku: "POLO-TSH-006",
    category: "Top Wear",
    brand: "Polo Classics",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Navy", "Red"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32193167/2025/1/3/f2cd2d32-8c09-4a8e-978c-ad1c85c583091735885108665CampusSutraMenPoloCollarPocketsT-shirt1.jpg",
        altText: "Polo T-Shirt Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32193167/2025/1/3/22db6957-29fb-4b58-8340-123d09b0239c1735885108528CampusSutraMenPoloCollarPocketsT-shirt2.jpg",
        altText: "Polo T-Shirt Back View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32193167/2025/1/3/2f60435b-90c6-49a3-a0b9-2a9571a254a51735885108595CampusSutraMenPoloCollarPocketsT-shirt3.jpg",
        altText: "Polo T-Shirt Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32193167/2025/1/3/d44a46bf-5d0e-4507-b86d-143673849e721735885108630CampusSutraMenPoloCollarPocketsT-shirt5.jpg",
        altText: "Polo T-Shirt Back View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32193167/2025/1/3/15c25db1-0776-4e75-95e7-04e38b1c65141735885108560CampusSutraMenPoloCollarPocketsT-shirt4.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.3,
    numReviews: 22,
  },
  {
    name: "Slim Fit Joggers",
    description:
      "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    price: 4199,
    discountPrice: 3599,
    countInStock: 20,
    sku: "BW-001",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Casual Collection",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61TkhbIE2sL._SY879_.jpg",
        altText: "Slim Fit Joggers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61tZIR1fOgL._SY879_.jpg",
        altText: "Slim Fit Joggers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61TB3HZvB7L._SY879_.jpg",
        altText: "Slim Fit Joggers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61KkXe7p2cL._SY879_.jpg",
        altText: "Slim Fit Joggers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61coZ6i2BxL._SY879_.jpg",
        altText: "Slim Fit Joggers Front View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Tapered Sweatpants",
    description:
      "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    price: 3599,
    discountPrice: 3199,
    countInStock: 25,
    sku: "BW-003",
    category: "Bottom Wear",
    brand: "Puma",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Charcoal", "Blue"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2025/JANUARY/22/jdWghCFs_aa8885a24b5b403bbc96124c0dd0eb28.jpg",
        altText: "Tapered Sweatpants Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2025/JANUARY/22/TmOiOeaA_c0f9ba4118dc496bb0ea105234faa43a.jpg",
        altText: "Tapered Sweatpants Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2025/JANUARY/22/U8XLUC3i_6e1e4d41607e47cbbf60a05fa5cc2951.jpg",
        altText: "Tapered Sweatpants Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2025/JANUARY/22/U8XLUC3i_6e1e4d41607e47cbbf60a05fa5cc2951.jpg",
        altText: "Tapered Sweatpants Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2025/JANUARY/22/yC5FH0Z3_02a3494b74264df8815880b046f22f19.jpg",
        altText: "Tapered Sweatpants Front View",
      },
    ],
    rating: 4.3,
    numReviews: 18,
  },
  {
    name: "Denim Jeans",
    description:
      "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    price: 6199,
    discountPrice: 5399,
    countInStock: 30,
    sku: "BW-004",
    category: "Bottom Wear",
    brand: "Puma",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Blue", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://mintobay.com/cdn/shop/files/1_5f6e2199-1658-4971-afa7-aba90d51b33f_640x_crop_center.jpg?v=1744282894",
        altText: "Denim Jeans Front View",
      },
      {
        url: "https://mintobay.com/cdn/shop/files/5_dceb5cab-3680-4e84-9e21-f3ab5399f051_640x_crop_center.jpg?v=1744282894",
        altText: "Denim Jeans Front View",
      },
      {
        url: "https://mintobay.com/cdn/shop/files/7_cb2dddd1-c1b0-4b3d-b3b0-2969d5a4ab2b_640x_crop_center.jpg?v=1744282894",
        altText: "Denim Jeans Front View",
      },
      {
        url: "https://mintobay.com/cdn/shop/files/2_df8fb5f7-ac20-44de-87ce-2651145caec8_640x_crop_center.jpg?v=1744282894",
        altText: "Denim Jeans Front View",
      },
      {
        url: "https://mintobay.com/cdn/shop/files/4_6e6ab53d-2b05-42ac-bbe2-6c25545e3ef0_640x_crop_center.jpg?v=1744282894",
        altText: "Denim Jeans Front View",
      },
    ],
    rating: 4.6,
    numReviews: 22,
  },
  {
    name: "Chino Pants",
    description:
      "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    price: 5499,
    discountPrice: 4899,
    countInStock: 40,
    sku: "BW-005",
    category: "Bottom Wear",
    brand: "Zara",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Navy", "Black"],
    collections: "Smart Casual Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://mintobay.com/cdn/shop/files/1_b26329db-dc65-473d-ae10-21210315b613_640x_crop_center.jpg?v=1744280223",
        altText: "Chino Pants Front View",
      },
      {
        url: "https://mintobay.com/cdn/shop/files/2_cec94082-0dc6-41e9-973b-741994f76e76_640x_crop_center.jpg?v=1744280223",
        altText: "Chino Pants Front View",
      },
      {
        url: "https://mintobay.com/cdn/shop/files/3_5c0bdadc-50ad-4a62-b5ec-49e44447f986_640x_crop_center.jpg?v=1744280223",
        altText: "Chino Pants Front View",
      },
      {
        url: "https://mintobay.com/cdn/shop/files/5_8741c204-8fbb-4699-9da9-88ff3eec9f1d_640x_crop_center.jpg?v=1744280223",
        altText: "Chino Pants Front View",
      },
      {
        url: "https://mintobay.com/cdn/shop/files/6_2dc5982d-8de8-44d2-833f-2bcd83931b4e_640x_crop_center.jpg?v=1744280223",
        altText: "Chino Pants Front View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Knitted Cropped Top",
    description:
      "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
    price: 4799,
    discountPrice: 3599,
    countInStock: 25,
    sku: "TW-W-001",
    category: "Top Wear",
    brand: "ChicKnit",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "White"],
    collections: "Knits Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/31174569/2025/1/27/ee10d5c7-9f24-4e52-8df4-0e5447ca45961737975107576-Roadster-Women-Tops-8211737975107181-2.jpg",
        altText: "Knitted Cropped Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/31174569/2025/1/27/14cdfc32-dc83-4e42-b43c-c153f8ce14e51737975107607-Roadster-Women-Tops-8211737975107181-1.jpg",
        altText: "Knitted Cropped Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/31174569/2025/1/27/b6ee43ea-fe46-4a9d-91f9-fd1d6f8c71901737975107550-Roadster-Women-Tops-8211737975107181-3.jpg",
        altText: "Knitted Cropped Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/31174569/2025/1/27/6dd5d0da-66fc-49d0-9042-5ebac726aaee1737975107523-Roadster-Women-Tops-8211737975107181-4.jpg",
        altText: "Knitted Cropped Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/31174569/2025/1/27/29ff6999-1120-4735-8bee-db14c11c18961737975107497-Roadster-Women-Tops-8211737975107181-5.jpg",
        altText: "Knitted Cropped Top",
      },
    ],
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: "Off-Shoulder Top",
    description:
      "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
    price: 4599,
    discountPrice: 4199,
    countInStock: 35,
    sku: "TW-W-004",
    category: "Top Wear",
    brand: "Elegance",
    sizes: ["S", "M", "L"],
    colors: ["Red", "White", "Blue"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/20/qD0D0x0D_011b7cdb483a479aa6abf1dbab3e9c60.jpg",
        altText: "Off-Shoulder Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/20/dflEW6L9_a05f05971e4d4553a934889db33837b8.jpg",
        altText: "Off-Shoulder Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/20/riI8mXFY_87a8148c2cd146c2bd841271959611eb.jpg",
        altText: "Off-Shoulder Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/20/lMlvQb1F_f6ec08a5f98d4b77a5b80a7dec96b88d.jpg",
        altText: "Off-Shoulder Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/20/ZWf7zBcX_04c67a26095341e1ba2ca27703969668.jpg",
        altText: "Off-Shoulder Top",
      },
    ],
    rating: 4.7,
    numReviews: 18,
  },

  {
    name: "Ribbed Long-Sleeve Top",
    description:
      "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    price: 5599,
    discountPrice: 4299,
    countInStock: 30,
    sku: "TW-W-007",
    category: "Top Wear",
    brand: "ComfortFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Pink", "Brown"],
    collections: "Fall Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32024844/2024/12/19/8e8704ef-66ef-4501-b9cd-cb1112e2f3701734609135760DreamBeautyFashionTop3.jpg",
        altText: "Ribbed Long-Sleeve Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32024844/2024/12/19/e0ae4f63-b133-4438-b90d-2690bad658631734609135733DreamBeautyFashionTop4.jpg",
        altText: "Ribbed Long-Sleeve Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32024844/2024/12/19/09d9e94c-ce50-4d87-8052-0fbee999fa541734609135789DreamBeautyFashionTop2.jpg",
        altText: "Ribbed Long-Sleeve Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32024844/2024/12/19/49c8c4d7-d94b-4426-a6a2-469d9a6c53751734609135705DreamBeautyFashionTop1.jpg",
        altText: "Ribbed Long-Sleeve Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/32024844/2024/12/19/ecc74f11-66b9-4e5b-bd63-9781e565388e1734609135816DreamBeautyFashionTop5.jpg",
        altText: "Ribbed Long-Sleeve Top",
      },
    ],
    rating: 4.7,
    numReviews: 26,
  },
  {
    name: "V-Neck Wrap Top",
    description:
      "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    price: 5199,
    discountPrice: 4599,
    countInStock: 30,
    sku: "TW-W-010",
    category: "Top Wear",
    brand: "Levi's",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Black", "White"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27978196/2024/6/28/11e2e2a5-df0c-4e7f-90ef-a1123f3908e41719552439852-Mast--Harbour-Women-Tops-1661719552439324-1.jpg",
        altText: "V-Neck Wrap Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27978196/2024/6/28/673cf320-68f7-4653-8861-ff771cd7f55b1719552439793-Mast--Harbour-Women-Tops-1661719552439324-3.jpg",
        altText: "V-Neck Wrap Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27978196/2024/6/28/6fbb3439-e1a2-4d82-9bce-18dc438242731719552439763-Mast--Harbour-Women-Tops-1661719552439324-4.jpg",
        altText: "V-Neck Wrap Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27978196/2024/6/28/d807df68-29f0-440b-aa2b-2d4f4d38a4721719552439734-Mast--Harbour-Women-Tops-1661719552439324-5.jpg",
        altText: "V-Neck Wrap Top",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27978196/2024/6/28/369899cf-8aa2-460d-b2df-1bd3c181623e1719552439823-Mast--Harbour-Women-Tops-1661719552439324-2.jpg",
        altText: "V-Neck Wrap Top",
      },
    ],
    rating: 4.7,
    numReviews: 22,
  },
  {
    name: "High-Waist Jeans",
    description:
      "High-waist jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
    price: 5199,
    discountPrice: 4599,
    countInStock: 30,
    sku: "BW-W-001",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark Blue", "Black", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8909107508582/660/TTJN004275_1.jpg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8909107508582/660/TTJN004275_2.jpg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8909107508582/660/TTJN004275_5.jpg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8909107508582/660/TTJN004275_6.jpg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8909107508582/660/TTJN004275_4.jpg",
        altText: "High-Waist Skinny Jeans",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Pleated Midi Skirt",
    description:
      "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
    price: 5599,
    discountPrice: 4999,
    countInStock: 20,
    sku: "BW-W-004",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Navy", "Black"],
    collections: "Spring Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://images.bestsellerclothing.in/data/vero-moda/01-nov-2024/162190201_g1.jpg?width=488&height=650&mode=fill&fill=blur&format=auto&dpr=1.2",
        altText: "Pleated Midi Skirt Front View",
      },
      {
        url: "https://images.bestsellerclothing.in/data/vero-moda/01-nov-2024/162190201_g3.jpg?width=488&height=650&mode=fill&fill=blur&format=auto&dpr=1.2",
        altText: "Pleated Midi Skirt Front View",
      },
      {
        url: "https://images.bestsellerclothing.in/data/vero-moda/01-nov-2024/162190201_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto&dpr=1.2",
        altText: "Pleated Midi Skirt Front View",
      },
      {
        url: "https://images.bestsellerclothing.in/data/vero-moda/01-nov-2024/162190201_g6.jpg?width=488&height=650&mode=fill&fill=blur&format=auto&dpr=1.2",
        altText: "Pleated Midi Skirt Front View",
      },
      {
        url: "https://images.bestsellerclothing.in/data/vero-moda/01-nov-2024/162190201_g5.jpg?width=488&height=650&mode=fill&fill=blur&format=auto&dpr=1.2",
        altText: "Pleated Midi Skirt Front View",
      },
    ],
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: "High-Rise Joggers",
    description:
      "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
    price: 6299,
    discountPrice: 5199,
    countInStock: 30,
    sku: "BW-W-006",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Gray", "Pink"],
    collections: "Loungewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/23/brCLRWS8_96b4d9751b3b465ca66f06bf1e691a46.jpg",
        altText: "High-Rise Joggers Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/23/B4IBw4Sb_f71ac66dc29f45688992e267ff12e040.jpg",
        altText: "High-Rise Joggers Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/23/prF1m8Sn_2da1801010e941edb49bc7a63297bec9.jpg",
        altText: "High-Rise Joggers Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/23/VJYpqfup_13b551acbf204d8e82f402216ea8836a.jpg",
        altText: "High-Rise Joggers Front View",
      },
      {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/AUGUST/23/E0ebbj3Y_5cc8026f3931426f8a049fd13f01d759.jpg",
        altText: "High-Rise Joggers Front View",
      },
    ],
    rating: 4.3,
    numReviews: 25,
  },
  {
    name: "Flared Palazzo Pants",
    description:
      "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
    price: 4599,
    discountPrice: 4199,
    countInStock: 35,
    sku: "BW-W-005",
    category: "Bottom Wear",
    brand: "BreezyVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Beige", "Light Blue"],
    collections: "Summer Collection",
    material: "Linen Blend",
    gender: "Women",
    images: [
      {
        url: "https://www.tjori.com/cdn/shop/products/TJ-MK-313-47_1_6d07ad0d-6b96-435a-92ff-9b912e7b30b3.jpg?v=1742458751",
        altText: "Flared Palazzo Pants Front View",
      },
      {
        url: "https://www.tjori.com/cdn/shop/products/TJ-MK-313-47_2_52e484e5-fe75-4819-a5d0-1d72ecabea6f.jpg?v=1742458751",
        altText: "Flared Palazzo Pants Front View",
      },
      {
        url: "https://www.tjori.com/cdn/shop/products/TJ-MK-313-47_3_97154829-3df6-4ae4-89a2-030603d6202b.jpg?v=1742458751",
        altText: "Flared Palazzo Pants Front View",
      },
      {
        url: "https://www.tjori.com/cdn/shop/products/TJ-MK-313-47_4_7f70beb6-aae6-429a-92db-029d15685a76.jpg?v=1742458751",
        altText: "Flared Palazzo Pants Front View",
      },
      {
        url: "https://www.tjori.com/cdn/shop/products/TJ-MK-313-47_5_056450f5-a100-4650-9a0e-1d8da1edb5dc.jpg?v=1742458751",
        altText: "Flared Palazzo Pants Front View",
      },
    ],
    rating: 4.4,
    numReviews: 22,
  },
  {
    "name": "Floral Printed Crop T-Shirt",
    "description": "Bring a touch of spring to your wardrobe with this floral printed crop tee. Soft fabric and a trendy cut make it perfect for brunch or a day out.",
    "price": 1399,
    "discountPrice": 999,
    "countInStock": 42,
    "sku": "FLR-CRP-WTSH-001",
    "category": "Top Wear",
    "brand": "Bloom Mode",
    "sizes": ["XS", "S", "M", "L"],
    "colors": ["Peach", "Mint Green", "White"],
    "collections": "Casual Chic",
    "material": "Cotton Modal",
    "gender": "Women",
    "images": [
      {
        "url": "https://img0.junaroad.com/uiproducts/21016456/zoom_0-1708789268.jpg",
        "altText": "Floral Crop T-Shirt Front View"
      },
      {
        "url": "https://img1.junaroad.com/uiproducts/21016456/zoom_1-1708789268.jpg",
        "altText": "Floral Crop T-Shirt Side View"
      },
      {
        "url": "https://img0.junaroad.com/uiproducts/21016456/zoom_3-1708789268.jpg",
        "altText": "Floral Crop T-Shirt Side View"
      },
      {
        "url": "https://img1.junaroad.com/uiproducts/21016456/zoom_4-1708789268.jpg",
        "altText": "Floral Crop T-Shirt Side View"
      },
      {
        "url": "https://img2.junaroad.com/uiproducts/21016456/zoom_2-1708789268.jpg",
        "altText": "Floral Crop T-Shirt Side View"
      },
    ],
    "rating": 4.6,
    "numReviews": 24
  },
  {
    "name": "Oversized Slogan T-Shirt",
    "description": "Make a statement without saying a word. This oversized tee with a bold slogan pairs well with denims, joggers, or even biker shorts!",
    "price": 1499,
    "discountPrice": 1199,
    "countInStock": 55,
    "sku": "OVR-SLG-WTSH-014",
    "category": "Top Wear",
    "brand": "Fierce Femme",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Black", "Lilac", "Grey"],
    "collections": "Streetwear",
    "material": "100% Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742814761_6527894.jpg?w=480&dpr=1.5",
        "altText": "Oversized Slogan T-Shirt Front"
      },
      {
        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742814761_9534829.jpg?w=480&dpr=1.5",
        "altText": "Oversized Slogan T-Shirt Back"
      },
      {
        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742814761_8296327.jpg?format=webp&w=480&dpr=1.5",
        "altText": "Oversized Slogan T-Shirt Front"
      },
      {
        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742814761_5589011.jpg?format=webp&w=480&dpr=1.5",
        "altText": "Oversized Slogan T-Shirt Back"
      },
      {
        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742814761_2916820.jpg?format=webp&w=480&dpr=1.5",
        "altText": "Oversized Slogan T-Shirt Back"
      },
    ],
    "rating": 4.4,
    "numReviews": 31
  },
  {
    "name": "Striped Boat Neck T-Shirt",
    "description": "Elegant stripes and a boat neckline come together for a refined casual look. Perfect for coffee dates or a stroll through the park.",
    "price": 1299,
    "discountPrice": 999,
    "countInStock": 30,
    "sku": "STP-BOAT-WTSH-227",
    "category": "Top Wear",
    "brand": "Minimal Muse",
    "sizes": ["XS", "S", "M", "L", "XL"],
    "colors": ["Navy White", "Blush Pink", "Mustard"],
    "collections": "Smart Casuals",
    "material": "Cotton + Elastane",
    "gender": "Women",
    "images": [
      {
        "url": "https://styleunion.in/cdn/shop/files/YWFT00065GREY_1_be02e042-4278-4a41-a6ea-decfd945ce11.jpg?v=1741766664&width=1200",
        "altText": "Striped Boat Neck T-Shirt Front"
      },
      {
        "url": "https://styleunion.in/cdn/shop/files/YWFT00065GREY_2_f1bdc89a-c63c-408f-9b5c-6654229453cd.jpg?v=1741766664&width=1200",
        "altText": "Striped Boat Neck T-Shirt Side"
      },
      {
        "url": "https://styleunion.in/cdn/shop/files/YWFT00065GREY_3_ac4d7d42-21d7-430f-a74f-76172198d412.jpg?v=1741766664&width=1200",
        "altText": "Striped Boat Neck T-Shirt Side"
      },
      {
        "url": "https://styleunion.in/cdn/shop/files/YWFT00065GREY_4_e01f55c0-177f-4d22-b53d-d11cdae374f4.jpg?v=1741766664&width=1200",
        "altText": "Striped Boat Neck T-Shirt Side"
      },
      {
        "url": "https://styleunion.in/cdn/shop/files/YWFT00065GREY_5_c0558865-1027-480c-bc8b-f7c7c451e4b0.jpg?v=1741766664&width=1200",
        "altText": "Striped Boat Neck T-Shirt Side"
      },
    ],
    "rating": 4.7,
    "numReviews": 18
  },
  {
    "name": "Full Sleeve Tie-Dye T-Shirt",
    "description": "Channel your inner artist with this full-sleeve tie-dye tee. Soft, stretchy, and oh-so-colorful—each piece is uniquely yours!",
    "price": 1599,
    "discountPrice": 1299,
    "countInStock": 38,
    "sku": "TIE-DYE-WTSH-093",
    "category": "Top Wear",
    "brand": "Boho Breeze",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Rainbow", "Purple Dream", "Aqua Splash"],
    "collections": "Bohemian Vibes",
    "material": "Viscose Rayon",
    "gender": "Women",
    "images": [
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20240523/jWnj/664e70d705ac7d77bb71515f/-473Wx593H-700004239-purple-MODEL.jpg",
        "altText": "Tie-Dye Full Sleeve T-Shirt Front"
      },
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20240523/GqFY/664e70d705ac7d77bb7150f5/-473Wx593H-700004239-purple-MODEL6.jpg",
        "altText": "Tie-Dye Full Sleeve T-Shirt Back"
      },
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20240523/GqFY/664e70d705ac7d77bb7150f5/-473Wx593H-700004239-purple-MODEL6.jpg",
        "altText": "Tie-Dye Full Sleeve T-Shirt Front"
      },
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20240523/poHU/664e70d705ac7d77bb71511c/-1117Wx1400H-700004239-purple-MODEL5.jpg",
        "altText": "Tie-Dye Full Sleeve T-Shirt Back"
      },
      {
        "url": "https://assets.ajio.com/medias/sys_master/root/20240523/GqFY/664e70d705ac7d77bb7150f5/-473Wx593H-700004239-purple-MODEL6.jpg",
        "altText": "Tie-Dye Full Sleeve T-Shirt Back"
      },
    ],
    "rating": 4.5,
    "numReviews": 26
  },
  {
    "name": "Relaxed Fit Cargo Pants",
    "description": "Function meets fashion with these utility-packed cargo pants. Oversized pockets and relaxed fit make them an adventurer's dream.",
    "price": 2499,
    "discountPrice": 1999,
    "countInStock": 46,
    "sku": "CARGO-RLX-MBW-088",
    "category": "Bottom Wear",
    "brand": "Gear & Grind",
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Army Green", "Sand", "Dark Brown"],
    "collections": "Adventure Ready",
    "material": "Cotton Twill",
    "gender": "Men",
    "images": [
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/30495265/2024/11/7/90e99a27-ed4c-4db5-b020-584c00f225701730980537966-Roadster-Men-Trousers-4891730980537433-1.jpg",
        "altText": "Cargo Pants Front"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/30495265/2024/11/7/6b77a784-91de-4935-abf2-1e1bc7f813db1730980537938-Roadster-Men-Trousers-4891730980537433-2.jpg",
        "altText": "Cargo Pants Side"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/30495265/2024/11/7/16831a04-6a4f-4dc8-89a7-b43fac23f09b1730980537910-Roadster-Men-Trousers-4891730980537433-3.jpg",
        "altText": "Cargo Pants Front"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/30495265/2024/11/7/f55780ba-f71d-4332-be28-14762f244f841730980537883-Roadster-Men-Trousers-4891730980537433-4.jpg",
        "altText": "Cargo Pants Side"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/30495265/2024/11/7/484fa494-65ee-43cc-adc5-a1a75fc515e51730980537854-Roadster-Men-Trousers-4891730980537433-5.jpg",
        "altText": "Cargo Pants Side"
      },
    ],
    "rating": 4.8,
    "numReviews": 22
  },
  {
    "name": "Distressed Denim Jeans",
    "description": "Bring in some edge with these distressed denims. Rugged, raw, and built for the rebel in you, they're your weekend partner-in-crime.",
    "price": 2799,
    "discountPrice": 2199,
    "countInStock": 32,
    "sku": "DST-JEAN-MBW-114",
    "category": "Bottom Wear",
    "brand": "Denim Republic",
    "sizes": ["30", "32", "34", "36"],
    "colors": ["Washed Blue", "Dark Grey", "Classic Black"],
    "collections": "Streetwear",
    "material": "Denim Lycra Blend",
    "gender": "Men",
    "images": [
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25483164/2024/1/23/9178ba35-fc0f-474d-ba37-223be305500c1706010717975HIGHLANDERMenRelaxedFitMildlyDistressedLightFadeJeans1.jpg",
        "altText": "Distressed Jeans Front"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25483164/2024/1/23/fcc3c273-60a0-4abf-a995-4ca40d1f7a3c1706010717997HIGHLANDERMenRelaxedFitMildlyDistressedLightFadeJeans3.jpg",
        "altText": "Distressed Jeans Side"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25483164/2024/1/23/ac631fa0-f8c4-451a-a007-96024ff05fba1706010717986HIGHLANDERMenRelaxedFitMildlyDistressedLightFadeJeans2.jpg",
        "altText": "Distressed Jeans Front"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25483164/2024/1/23/cb8ab7a6-a318-41ae-a6c3-45180b80461f1706010718008HIGHLANDERMenRelaxedFitMildlyDistressedLightFadeJeans4.jpg",
        "altText": "Distressed Jeans Side"
      },
      {
        "url": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25483164/2024/1/23/74469c51-6aad-4447-a1a8-60adf88aae331706010718019HIGHLANDERMenRelaxedFitMildlyDistressedLightFadeJeans5.jpg",
        "altText": "Distressed Jeans Side"
      },
    ],
    "rating": 4.6,
    "numReviews": 39
  },
  {
    "name": "Cuffed Jogger Pants",
    "description": "Own the streets in comfort and style with these cuffed joggers. Designed with deep pockets and an adjustable waistband for the ultimate chill fit.",
    "price": 1899,
    "discountPrice": 1499,
    "countInStock": 50,
    "sku": "JGR-CUFF-MBW-009",
    "category": "Bottom Wear",
    "brand": "Motion Mode",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Charcoal Grey", "Black", "Steel Blue"],
    "collections": "Athleisure",
    "material": "Cotton Terry",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.bewakoof.com/t1080/men-s-charcoal-grey-oversized-joggers-646462-1735884704-1.jpg",
        "altText": "Jogger Pants Front"
      },
      {
        "url": "https://images.bewakoof.com/t1080/men-s-charcoal-grey-oversized-joggers-646462-1735802755-2.jpg",
        "altText": "Jogger Pants Side"
      },
      {
        "url": "https://images.bewakoof.com/t1080/men-s-charcoal-grey-oversized-joggers-646462-1735802764-4.jpg",
        "altText": "Jogger Pants Front"
      },
      {
        "url": "https://images.bewakoof.com/t1080/men-s-charcoal-grey-oversized-joggers-646462-1735802768-5.jpg",
        "altText": "Jogger Pants Side"
      },
      {
        "url": "https://images.bewakoof.com/t1080/men-s-charcoal-grey-oversized-joggers-646462-1735802772-6.jpg",
        "altText": "Jogger Pants Side"
      },
    ],
    "rating": 4.5,
    "numReviews": 28
  },
  {
    "name": "Slim Fit Chinos",
    "description": "Classic slim-fit chinos crafted for the modern man. Clean lines, soft cotton, and just the right amount of stretch—perfect for office hours or happy hours.",
    "price": 2299,
    "discountPrice": 1799,
    "countInStock": 40,
    "sku": "SLIM-CHINO-MBW-001",
    "category": "Bottom Wear",
    "brand": "Urban Essence",
    "sizes": ["30", "32", "34", "36"],
    "colors": ["Beige", "Olive", "Navy Blue"],
    "collections": "Smart Casuals",
    "material": "Cotton Stretch",
    "gender": "Men",
    "images": [
      {
        "url": "https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/light_olive_green_mens_chino_pants_base_29_10_2024_700x933.jpg",
        "altText": "Slim Fit Chinos Front"
      },
      {
        "url": "https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/light_olive_green_mens_chino_pants_pocket_view_700x933.jpg",
        "altText": "Slim Fit Chinos Side"
      },
      {
        "url": "https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/light_olive_green_mens_chino_pants_side_view_29_10_2024_700x933.jpg",
        "altText": "Slim Fit Chinos Front"
      },
      {
        "url": "https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/light_olive_green_mens_chino_pants_back_20_05_2024_700x933.jpg",
        "altText": "Slim Fit Chinos Side"
      },
      {
        "url": "https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/light_olive_green_mens_chino_pants_model_detail_29_10_2024_700x933.jpg",
        "altText": "Slim Fit Chinos Side"
      },
    ],
    "rating": 4.7,
    "numReviews": 33
  }
]);

export default products