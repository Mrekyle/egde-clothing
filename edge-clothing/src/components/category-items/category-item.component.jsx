import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
            <div className="category-container">
              <div className='background-image' style={{
                backgroundImage: `url(${ imageUrl })`  // Adding a background image url to the div in the map allows the image to be rendered from the array
              }} />                                   
              <div className="category-body-container">
                <h2>{ title }</h2>
                <p>Shop Now!</p>
              </div>
            </div>
    )
};

export default CategoryItem;