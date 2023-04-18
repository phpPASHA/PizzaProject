import React from "react";

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import Pizza from '../Components/PizzaBlock/Pizza';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import Pagination from "../Pagination";
import { SearchContext } from "../App";


 const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setcurrentPage] =React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sort: 'rating',
  });


  React.useEffect(() => {
    setIsLoading(true);
  const sortBy = sortType.sort.replace('-', ''); 
  const order = sortType.sort.includes('-') ? 'asc' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://640f0ce6cde47f68db3fd9c8.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}$order=${order}`,
    )
      .then((res) => 
         res.json()
      )
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
    
   
const pizzas = items.map((obj) => <Pizza key={obj.id} {...obj}/>);
const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);


  return(
      <div className="container">
        <div className="content__top">
        <Categories value={categoryId}  onClickCategory={(i) => setCategoryId(i)} ></Categories>
        <Sort value={sortType}  onChangeSort={(i) => setSortType(i)}  ></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
       
        {isLoading
          ? 
         skeletons : pizzas} </div>
        <Pagination onChangePage={(number) => setcurrentPage(number)} />
      </div>
    )
} 

export default Home;