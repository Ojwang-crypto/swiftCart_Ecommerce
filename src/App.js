import './categories.styles.scss'
const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    }
  ];
  return (
    <div className="categories-container">
    {categories.map(({title, id, imageUrl}) => (
      <div key={id} className="category-container" >
          <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`, }}/>
          <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
          </div>

      </div> 
     ))}        
    </div>
  );
}

export default App;
