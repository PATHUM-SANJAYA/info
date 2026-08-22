import React from 'react';
import { createPortal } from 'react-dom';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Menu.scss';

import { CustomSectionsConfig } from '../../config';

class Menu extends React.Component {

    // Properties

    menuItems = [
        {
            icon: <ArrowUpwardIcon />,
            tooltip: 'go to top',
            action: () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        },
        {
            icon: <NightsStayIcon />,
            tooltip: 'toggle dark/light theme',
            action: () => {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            }
        }
    ]

    // Functions

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
            isMobile: typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
            showMobileButton: true
        };
        this.handleViewport = this.handleViewport.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.lastScrollY = 0;

        // Sections in menu
        const sectionsInMenu = CustomSectionsConfig.map((section) => {
            if (!section.notInMenu) {
                return {
                    icon: section.headerIcon,
                    tooltip: section.name,
                    action: () => {
                        this.scrollToSection(section.name);
                    }
                }
            } else {
                return false;
            }
        }).filter(section => section);

        this.menuItems = this.menuItems.concat(sectionsInMenu);

        // More of a workaround
        this.menuItems = this.menuItems.map((menuItem) => {
            menuItem.key = 'menu-item-' + Math.round(Math.random() * 10000);
            // Resizing icons
            menuItem.icon = React.cloneElement(menuItem.icon, { classes: { root: 'menu-item-icon' } });
            return menuItem;
        });
    }

    toggleMenu = () => {
        this.setState({ menuActive: !this.state.menuActive });
    }

    scrollToSection = (sectionName) => {
        const ref = this.props.sectionRefs[sectionName];
        const current = ref && ref.current;
        if (!current) {
            return;
        }
        if (!current || typeof current.getBoundingClientRect !== 'function') {
            return;
        }
        const top = current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth'
        });
    }

    closeMenu = () => {
        this.setState({ menuActive: false });
    }

    componentDidMount() {
        this.mediaQuery = window.matchMedia('(max-width: 767px)');
        this.mediaQuery.addListener(this.handleViewport);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        if (this.mediaQuery) {
            this.mediaQuery.removeListener(this.handleViewport);
        }
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            // Scrolled past 100px - hide button and keep it hidden
            this.setState({ showMobileButton: false });
        } else {
            // At top - show button
            this.setState({ showMobileButton: true });
        }
        
        this.lastScrollY = currentScrollY;
    }

    handleViewport() {
        if (!this.mediaQuery) {
            return;
        }
        this.setState({ isMobile: this.mediaQuery.matches });
    }

    render() {
        const { menuActive, isMobile, showMobileButton } = this.state;

        // Mobile: Show only floating toggle button
        if (isMobile) {
            return (
                showMobileButton && (
                    <button 
                        className={`mobile-toggle-button ${!showMobileButton ? 'hidden' : ''}`}
                        onClick={() => {
                            document.body.classList.toggle('dark-mode');
                            if (document.body.classList.contains('dark-mode')) {
                                localStorage.setItem('theme', 'dark');
                            } else {
                                localStorage.setItem('theme', 'light');
                            }
                        }}
                    >
                        <NightsStayIcon />
                    </button>
                )
            );
        }
        
        // Desktop: classic half-circle from left-center.
        const startAngle = -90;
        const rotationAngle = 180;

        const rootClass = [
            'menu',
            menuActive ? 'menu-active' : ''
        ].filter(Boolean).join(' ');

        const menuTree = (
            <div className={rootClass}>
                <div className="menu-backdrop" onClick={this.closeMenu}></div>
                <div className="menu-data">
                    <MenuToggle
                        menuActive={menuActive}
                        toggleMenu={this.toggleMenu}>
                        ME<br />NU
                    </MenuToggle>
                    <div className="menu-items-shell menu-items-shell--desktop">
                        {this.menuItems.map((menuItem, index) => {
                            let angle = startAngle;
                            let increment = 0;
                            if (this.menuItems.length > 1) {
                                increment = Math.round(rotationAngle / (this.menuItems.length - 1));
                            }
                            angle += index * increment;

                            const { key: itemKey, action: itemAction, ...itemRest } = menuItem;

                            return (
                                <MenuItem {...itemRest}
                                    key={itemKey}
                                    tooltipPlacement="right"
                                    menuActive={menuActive}
                                    index={index}
                                    size={3.5}
                                    rotationAngle={angle}
                                    action={itemAction} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );

        if (typeof document !== 'undefined') {
            return createPortal(menuTree, document.body);
        }
        return menuTree;
    }
}

export default Menu;
