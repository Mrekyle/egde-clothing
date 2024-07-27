import CategoryMenu from './components/category-menu/category-menu.component'

const categories = [
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  },
  // Storing the images in the array allows the image to be stored in a database and directly rendered from there 
];

// ITERATING OVER ITEMS IN AN ARRAY ALLOWS THE DEVELOPER TO RENDER MULTIPLE COMPONENTS WITH MINIMAL LINES OF CODE 
// ALLOWING THE REUSE OF BASE CODE. LOGIC ABOVE WOULD BE CONNECTING TO A DATABASE 

const App = () => {
  return (
    // Passing the categories array as a prop to the component, passing it down the tree
    <CategoryMenu categories={categories} />
  );
}

export default App;


// BASIC REACT APP LAYOUT

// const App = () => {
//   return (
//     <div>Hello World</div>
//   );
// }

// export default App;