import React from 'react';
import './MenuPopup.css';

interface MenuPopupProps {
    onClose: () => void;
}

const MenuPopup: React.FC<MenuPopupProps> = ({ onClose }) => {
    return (
        <div className="menu-popup-overlay" onClick={onClose}>
            <div className="menu-container" onClick={(e) => e.stopPropagation()}>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-saved-messages"></i>Saved Messages
                </div>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-user"></i>Contacts
                </div>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-play-story"></i>My Stories
                </div>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-settings"></i>Settings
                </div>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-darkmode"></i>
                    <span className="menu-item-name">Night Mode</span>
                    <label className="Switcher no-animation" title="Enable night mode">
                        <input type="checkbox" id="darkmode" />
                        <span className="widget"></span>
                    </label>
                </div>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-animations"></i>
                    <span className="menu-item-name capitalize">animations</span>
                    <div className="Toggle" aria-hidden="true">
                        <i className="kudEBJOk nRNm3LRD"></i>
                        <i className="EXXsQxeq nRNm3LRD"></i>
                    </div>
                </div>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-help"></i>Telegram Features
                </div>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-bug"></i>Report a Bug
                </div>
                <a
                    tabIndex={0}
                    className="MenuItem compact"
                    href="https://web.telegram.org/k"
                    target="_self"
                    rel="noopener noreferrer"
                >
                    <i className="icon icon-char" data-char="K"></i>Switch to K Version
                </a>
                <div role="menuitem" tabIndex={0} className="MenuItem compact">
                    <i className="icon icon-install"></i>Install App
                </div>
                <div className="footer">Telegram Web A 10.9.7</div>
            </div>
        </div>
    );
};

export default MenuPopup;
