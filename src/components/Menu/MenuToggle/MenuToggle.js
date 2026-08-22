import React from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './MenuToggle.scss';

class MenuToggle extends React.Component {
    render() {
        const { isMobile, menuActive, toggleMenu } = this.props;
        const compact = !!isMobile;
        const className = compact ? 'menu-toggle menu-toggle--compact' : 'menu-toggle';

        return (
            <CircleButton
                onClick={toggleMenu}
                size={compact ? 3.4 : 4}
                className={className}
                ariaLabel={menuActive ? 'Close navigation menu' : 'Open navigation menu'}
                ariaExpanded={menuActive ? 'true' : 'false'}
            >
                {compact ? (
                    /* Mobile: icon-only FAB with smooth transition */
                    <span className="menu-toggle__icon" aria-hidden="true">
                        {menuActive
                            ? <CloseIcon style={{ fontSize: '1.5rem' }} />
                            : <MenuIcon  style={{ fontSize: '1.5rem' }} />
                        }
                    </span>
                ) : (
                    /* Desktop: original ME/NU text + hamburger bars */
                    <>
                        <span className="menu-text">{this.props.children}</span>
                        <div className="menu-burger" aria-hidden="true">
                            <span className="menu-burger-bar"></span>
                            <span className="menu-burger-bar"></span>
                            <span className="menu-burger-bar"></span>
                        </div>
                    </>
                )}
            </CircleButton>
        );
    }
}

export default MenuToggle;