import React from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import './MenuItem.scss';

class MenuItem extends React.Component {

    activeTransformStyle = (angle1, angle2, isMobile, index) => {
        // Mobile: safer vertical list so items never render off-screen.
        // index starts at 0; we add 1 so the first item appears below the FAB.
        if (isMobile) {
            const stepRem = 3.6; // approx item height on mobile
            return `translateY(${(index + 1) * stepRem}rem)`;
        }

        // Desktop: classic arc transform
        return `
            translateY(-50%)
            rotate(${angle1}deg)
            translate(6rem)
            rotate(${angle2}deg)
        `;
    };

    render() {
        const { menuActive, isMobile } = this.props;
        const extraStyle = menuActive ? {
            transform: this.activeTransformStyle(
                this.props.rotationAngle,
                -this.props.rotationAngle,
                isMobile,
                this.props.index
            )
        } : {};

        return (
            <CircleButton className="menu-item"
                tooltip={this.props.tooltip}
                onClick={this.props.action}
                tooltipPlacement={this.props.tooltipPlacement}
                size={this.props.size || 3.5}
                style={extraStyle}>
                {this.props.icon}
            </CircleButton>
        );
    }
}

export default MenuItem;