import React from 'react';
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets';
const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Dive into a diverse range of dishes curated for every taste bud. Whether it's a hearty roll, a refreshing salad, or indulgent desserts—we have something for everyone.</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <hr />
            </div>
        </div>

    );
}

export default ExploreMenu;
