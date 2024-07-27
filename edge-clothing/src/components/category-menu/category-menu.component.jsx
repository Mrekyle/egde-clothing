import CategoryItem from '../category-items/category-item.component'

import './category-menu.styles.scss'

// categories prop is the categories array. IE the database where the categories are stored.
// being passed down from the main app (top of the tree)

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
     {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
     ))};
    </div>
  );
}

export default CategoryMenu;