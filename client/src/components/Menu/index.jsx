import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Banner from '../../assets/gallery/g10.png';
import Menu1 from '../../assets/menu/menu1.png';
import Menu2 from '../../assets/menu/menu2.png';
import Menu3 from '../../assets/menu/menu3.png';
import Menu4 from '../../assets/menu/menu4.png';
import Menu5 from '../../assets/menu/menu5.png';
import Menu6 from '../../assets/menu/menu6.png';
import Menu7 from '../../assets/menu/menu7.png';
import axios from 'axios';
import Cut from '../../assets/menu/cut.svg'
import Cutwhite from '../../assets/menu/cutwhite.svg'
import BgMenu from '../../assets/menu/bgmenuimg.png'

function Menu() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:1101/api/menu');
        if (response.data.success === 1) {
          setData(response.data.result);
          setFilteredData(response.data.result);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMenu();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'ALL') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item => item.category === category));
    }
  };

  const categories = [
    { label: 'All', value: 'ALL', image: Menu5 },
    { label: 'Starters', value: 'STARTERS', image: Menu6 },
    { label: 'Breakfast', value: 'BREAKFAST', image: Menu1 },
    { label: 'Lunch', value: 'LUNCH', image: Menu3 },
    { label: 'Dinner', value: 'DINNER', image: Menu5 },
    { label: 'Desserts', value: 'DESSERTS', image: Menu4 },
    { label: 'Coffee', value: 'COFFEE', image: Menu7 },
    { label: 'Mocktails', value: 'MOCKTAIL', image: Menu2 },
  ];

  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      {/* Banner Section */}
      <div className="w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]" style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Header />
        <div className="bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap">
          <h1 className="text-[#C5A572] text-[60px] font-[Bellefair]">Our Menu</h1>
          <h1 className="text-[20px] opacity-70 text-[#ffffff]">Home / Menu</h1>
        </div>
      </div>

      {/* Category Section */}
      <div className="w-[85%] m-auto grid md:grid-cols-8 xs:grid-cols-4 xxs:grid-cols-2 grid-cols-1 xl:gap-5 gap-2 pt-20 ">
        {categories.map(category => (
          <div
            key={category.value}
            className={`col-span-1 bg-cover bg-center bg-no-repeat lg:h-[140px] md:h-[120px] h-[140px] cursor-pointer ${selectedCategory === category.value ? 'border-2 border-[#C5A572]' : ''}`}
            style={{ backgroundImage: `url(${category.image})` }}
            onClick={() => handleCategoryClick(category.value)}
          >
            <h1 className="bg-[#121D27AD] text-white text-[22px] flex items-center justify-center h-full">{category.label}</h1>
          </div>
        ))}
      </div>

      {/* Menu Items */}
      {Object.entries(groupedData).map(([category, items]) => (
        <div className='main_image_set'>
          <div className="w-[85%] m-auto flex flex-col py-20" key={category}>
            <h1 className="text-[40px] font-[Bellefair] text-[#C5A572] text-center ">{category}</h1>
            <div className='flex items-center justify-center'>
              <img src={Cut} alt="cut" className="w-[160px] " />
              {/* <div className='main_image_icon'></div> */}
            </div>
            <div className="grid grid-cols-2 gap-10 pt-10">
              {items.map(item => (
                <div className="col-span-1" key={item._id}>
                  <div className="flex items-center justify-between space-x-2">
                    <h1 className="font-[Bellefair] sm:text-[35px] xs:text-[30px] text-[25px]">{item.name.length > 35 ? `${item.name.slice(0, 35)}...` : item.name}</h1>
                    <p className='font-[Bellefair] text-[35px]'>{item.price}</p>
                  </div>
                  <p className="opacity-60">{item.description.length > 65 ? `${item.description.slice(0, 65)}...` : item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <Footer />
    </div >
  );
}

export default Menu;