export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Spicy Shwarma",
      price: 37,
      image: "/shwarma.jpg",
    },

    {
      id: 2,
      name: "Chicken Roll",
      price: 45,
      image: "/roll.jpg",
    },
    {
      id: 3,
      name: "Fried Chicken",
      price: 45,
      image: "/friedchicken.jpg",
    },
    {
      id: 4,
      name: "Chicken Nuggets",
      price: 48,
      image: "/nuggets.jpg",
    },
    {
      id: 5,
      name: " Grilled Veggie Shashlik",
      price: 60,
      image: "/shashlik.jpg",
    },
    {
      id: 6,
      name: "Spicy Fries",
      price: 20,
      image: "/fries.jpg",
    },
  ];
  res.status(200).json(products)
}
