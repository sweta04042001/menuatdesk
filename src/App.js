import React,{useState} from 'react';
import Menu from "./Menu";
import Categories from "./Categories"
import items from "./Data"

const allCategories=['all',...new Set(items.map((item)=>item.category))];//taking out cateogry from the array of object


function App() {
  const [menuItems,setMenuItems]=useState(items)
  const [categories,setCategories]=useState(allCategories);
  const filterItems=(category)=>{
    if(category==='all')
    {
      setMenuItems(items)
      return;
    }
    const newItems=items.filter((item)=>item.category===category)
    setMenuItems(newItems)
  }
  return (
    <main>
     <div>
       <h2 className='heading'>Our Menu</h2>
       <div className='underline'></div>
     </div>
     <Categories categories={categories} filterItems={filterItems} />
     <Menu items={menuItems}/>
    </main>
  );
}

export default App;
