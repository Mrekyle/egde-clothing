import './categories.styles.scss'

const App = () => {


  const categories = [
    {
      id: 1,
      name: 'Hats',
    },
    {
      id: 2, 
      name: 'Jackets',
    },
    {
      id: 3, 
      name: 'Sneakers',
    }, 
    {
      id: 4,
      name: 'Womens',
    }, 
    {
      id: 5, 
      name: 'Mens',
    }
  ]

  return (
    <div className="outerContainer">
      {categories.map(({ name, id }) => (
      <div key={ id } className="categoryContainer">
        <div className='' />
        <div className="categoryBodyContainer">
          <h2>{ name }</h2>
          <p>Shop Now!</p>
        </div>
      </div>
      ))}
    </div>
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

// ITERATING OVER AN ARRAY TO RENDER MULTIPLE COMPONENTS 

// const App = () => {

//   const categories = [
//     {
//       id: 1,
//       name: 'Hats',
//     },
//     {
//       id: 2, 
//       name: 'Jackets',
//     },
//     {
//       id: 3, 
//       name: 'Sneakers',
//     }, 
//     {
//       id: 4,
//       name: 'Womens',
//     }, 
//     {
//       id: 5, 
//       name: 'Mens',
//     }
//   ]

//   return (
//     <div className="outerContainer">
//       {categories.map(({name}) => (
//       <div className="categoryContainer">
//         {/* {img} */}
//         <div className="categoryBodyContainer">
//           <h2>{name}</h2>
//           <p>Shop Now!</p>
//         </div>
//       </div>
//       ))}
//     </div>
//   );
// }

// export default App;