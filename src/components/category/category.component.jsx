import "./category.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component";
import { CategoriesContainer } from "./category.styles.jsx";

const Category = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Category;
