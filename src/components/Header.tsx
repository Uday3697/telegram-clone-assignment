import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import Tabs from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import './Header.css';

const { TabPane } = Tabs;

const Header: React.FC = () => {
  const [showTabs, setShowTabs] = useState<boolean>(false);

  const handleSearchClick = () => {
    setShowTabs(true);
  };

  const tabs = [
    { key: '1', label: 'Chats', content: 'Chats Content' },
    { key: '2', label: 'Channels', content: 'Channels Content' },
    { key: '3', label: 'Media', content: 'Media Content' },
    { key: '4', label: 'Links', content: 'Links Content' },
    { key: '5', label: 'Files', content: 'Files Content' },
    { key: '6', label: 'Music', content: 'Music Content' },
    { key: '7', label: 'Voice', content: 'Voice Content' },
  ];

  return (
    <div className="header">
      <button className="menu-button">
        <FaBars />
      </button>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onClick={handleSearchClick}
        />
        <FaSearch className="search-icon" />
      </div>
      {showTabs && (
        <div className="tabs-container">
          <Tabs defaultActiveKey="1">
            {tabs.map(tab => (
              <TabPane tab={tab.label} key={tab.key}>
                {tab.content}
              </TabPane>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Header;
