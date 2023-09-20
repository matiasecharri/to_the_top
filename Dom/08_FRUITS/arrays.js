const arrayFruitsX = [
  {
    name: "watermelon",
    type: "Melon",
    image: "/Dom/08_FRUITS/assets/watermelon.webp",
    origin: "Africa",
    description:
      "Watermelon is a refreshing and juicy fruit, perfect for summer. It is known for its high water content and sweet taste.",
    stock: 15,
    price: 2.5,
    sales: 5,
  },
  {
    name: "strawberry",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/strawberry.webp",
    origin: "Europe",
    description:
      "Strawberries are small red fruits with a sweet and slightly tart flavor. They are widely used in desserts and salads.",
    stock: 20,
    price: 3.0,
    sales: 8,
  },
  {
    name: "orange",
    type: "Citrus",
    image: "/Dom/08_FRUITS/assets/orange.webp",
    origin: "Asia",
    description:
      "Oranges are citrus fruits known for their delicious juice and high vitamin C content.",
    stock: 18,
    price: 1.8,
    sales: 6,
  },
  {
    name: "grape",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/grape.webp",
    origin: "Europe and Asia",
    description:
      "Grapes are small and juicy fruits used to make wine and raisins.",
    stock: 25,
    price: 4.2,
    sales: 7,
  },
  {
    name: "banana",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/bananav3.webp",
    origin: "Southeast Asia",
    description:
      "Bananas are tropical fruits that grow in clusters. They are a source of potassium and energy.",
    stock: 22,
    price: 1.9,
    sales: 9,
  },
  {
    name: "avocado",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/avocado.webp",
    origin: "Mexico",
    description:
      "Avocado is a creamy fruit rich in healthy fats. It is used in various dishes, such as guacamole.",
    stock: 12,
    price: 2.7,
    sales: 4,
  },
  {
    name: "cherry",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/cherry.webp",
    origin: "Europe and Western Asia",
    description:
      "Cherries are small and sweet fruits that grow on trees. They are used in desserts and preserves.",
    stock: 14,
    price: 4.5,
    sales: 3,
  },
  {
    name: "pearl",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/pearl.webp",
    origin: "China",
    description:
      "Pears are juicy fruits that come in various varieties and are a good source of dietary fiber.",
    stock: 16,
    price: 2.3,
    sales: 2,
  },
  {
    name: "mango",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/mango.webp",
    origin: "Southeast Asia",
    description:
      "Mango is a tropical fruit with juicy and sweet flesh. It is widely appreciated for its unique flavor.",
    stock: 10,
    price: 3.8,
    sales: 6,
  },
  {
    name: "papaya",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/papaya.webp",
    origin: "Central America",
    description:
      "Papaya is a tropical fruit that has orange flesh and a sweet flavor with a hint of acidity.",
    stock: 20,
    price: 2.2,
    sales: 7,
  },
  {
    name: "tomato",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/tomato.webp",
    origin: "South America",
    description:
      "Tomato is a fruit commonly used in savory dishes, although it is botanically a fruit. It is versatile in cooking.",
    stock: 30,
    price: 1.5,
    sales: 10,
  },
  {
    name: "apple orange",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/apple_orange.webp",
    origin: "Unknown",
    description:
      "The 'apple orange' is a hybrid fruit with an unknown exact origin. It combines the characteristics of an apple and an orange in taste and appearance.",
    stock: 8,
    price: 3.5,
    sales: 2,
  },
  {
    name: "pineapple",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/pineapple.webp",
    origin: "South America",
    description:
      "Pineapple is a tropical fruit with juicy flesh and a sweet and refreshing flavor.",
    stock: 15,
    price: 2.8,
    sales: 5,
  },
  {
    name: "blueberry",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/blueberry.webp",
    origin: "North America",
    description:
      "Blueberries are small blue fruits that grow on bushes. They are known for their flavor and health benefits.",
    stock: 25,
    price: 4.0,
    sales: 8,
  },
  {
    name: "dragonfruit",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/dragonfruit.webp",
    origin: "Tropical America",
    description:
      "Dragon fruit, also known as pitahaya or pitaya, is a tropical fruit with a unique appearance and mild flavor.",
    stock: 10,
    price: 3.2,
    sales: 12,
  },
  {
    name: "durian",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/durian.webp",
    origin: "Southeast Asia",
    description:
      "Durian is a tropical fruit known for its strong odor and distinctive flavor. It is considered a delicacy by some and unpleasant by others.",
    stock: 5,
    price: 5.0,
    sales: 2,
  },
  {
    name: "lemon",
    type: "Citrus",
    image: "/Dom/08_FRUITS/assets/lemon.webp",
    origin: "Southeast Asia",
    description:
      "Lemon is a citrus fruit with a zesty and refreshing flavor. It is used in a wide variety of dishes and beverages.",
    stock: 20,
    price: 1.0,
    sales: 12,
  },
  {
    name: "kiwi",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/kiwi.webp",
    origin: "China",
    description:
      "Kiwi is a small green fruit with vibrant flesh and a sweet-tart flavor. It is an excellent source of vitamin C.",
    stock: 15,
    price: 2.7,
    sales: 7,
  },
  {
    name: "honeydew melon",
    type: "Melon",
    image: "/Dom/08_FRUITS/assets/honeydew_melon.webp",
    origin: "Africa",
    description:
      "Honeydew melon is a sweet and juicy fruit that is a popular choice in fruit salads.",
    stock: 12,
    price: 3.5,
    sales: 5,
  },
  {
    name: "tangerine",
    type: "Citrus",
    image: "/Dom/08_FRUITS/assets/tangerine.webp",
    origin: "China",
    description:
      "Tangerine is a small and easy-to-peel citrus fruit known for its sweet flavor and fresh aroma.",
    stock: 18,
    price: 1.6,
    sales: 7,
  },
  {
    name: "starfruit",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/starfruit.webp",
    origin: "Southeast Asia",
    description:
      "Starfruit, also known as carambola, is a tropical fruit with a star-like shape and a sweet-tart flavor.",
    stock: 10,
    price: 4.0,
    sales: 9,
  },
  {
    name: "guava",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/guava.webp",
    origin: "Tropical America",
    description:
      "Guava is a tropical fruit with juicy flesh and a sweet, aromatic flavor.",
    stock: 14,
    price: 2.5,
    sales: 6,
  },
  {
    name: "coconut",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/coconut.webp",
    origin: "Southeast Asia",
    description:
      "Coconut is a versatile tropical fruit. Its water and flesh are used in a variety of dishes and products.",
    stock: 8,
    price: 3.2,
    sales: 4,
  },
  {
    name: "peach",
    type: "Specials",
    image: "/Dom/08_FRUITS/assets/peach.webp",
    origin: "China",
    description:
      "Peach is a fruit with soft flesh and velvety skin. It is appreciated for its sweet flavor.",
    stock: 10,
    price: 2.8,
    sales: 3,
  },
  {
    name: "pomegranate",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/pomegranate.webp",
    origin: "Middle East",
    description:
      "Pomegranate is a fruit with numerous juicy seeds. It is a symbol of fertility and abundance.",
    stock: 12,
    price: 3.5,
    sales: 4,
  },
  {
    name: "passionfruit",
    type: "Tropical",
    image: "/Dom/08_FRUITS/assets/passionfruit.webp",
    origin: "South America",
    description:
      "Passion fruit is a tropical fruit with fragrant, seed-filled pulp. It is known for its unique flavor.",
    stock: 15,
    price: 3.0,
    sales: 5,
  },
  {
    name: "raspberry",
    type: "Berry",
    image: "/Dom/08_FRUITS/assets/raspberry.webp",
    origin: "Europe",
    description:
      "Raspberry is a small and aromatic fruit that grows on bushes. It is appreciated for its flavor and versatility.",
    stock: 18,
    price: 4.2,
    sales: 6,
  },
];

export { arrayFruitsX };

console.log(arrayFruitsX.length);
