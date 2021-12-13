import React, {useState} from 'react';

import ProductsTab from './tabs/products-tab';
import CreatedTab from './tabs/created-tab';

import {Tab} from '../../const';

function Tabs() {
  const [activeTab, setActiveTab] = useState(Tab.PRODUCTS);
  const tabs = Object.values(Tab);

  const handleMouseClick = (evt) => {
    evt.preventDefault();

    setActiveTab(evt.target.innerText);
  };

  return (
    <section className="tabs container">
      <ul className="tabs__list list">
        {tabs.map((tab) => (
          <li key={tab} className="tabs__item">
            <a href="/" className={`tabs__link link ${tab === activeTab ? 'tabs__link--active' : ''}`} onClick={handleMouseClick}>{tab}</a>
          </li>
        ))}
      </ul>
      {activeTab === Tab.PRODUCTS && <ProductsTab />}
      {activeTab === Tab.CREATED_PRODUCTS && <CreatedTab />}
    </section>
  );

}

export default Tabs;
