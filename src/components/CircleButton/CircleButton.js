import React from 'react';
import { Tooltip } from '@material-ui/core';
import './CircleButton.scss';

class CircleButton extends React.Component {
    render() {
        const ButtonTag = this.props.link ? 'a' : 'button';
        const title = this.props.tooltip != null ? this.props.tooltip : '';
        const sizeStyle = {
            width: this.props.size + 'rem',
            height: this.props.size + 'rem'
        };
        const button = (
            <ButtonTag href={this.props.link}
                type={this.props.link ? undefined : 'button'}
                target={this.props.target}
                rel={this.props.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={this.props.onClick}
                aria-label={this.props.ariaLabel != null ? this.props.ariaLabel : undefined}
                aria-expanded={this.props.ariaExpanded != null ? this.props.ariaExpanded : undefined}
                className={!this.props.className ? 'circle-button' : ('circle-button ' + this.props.className)}
                style={Object.assign({}, sizeStyle, this.props.style)}>
                {this.props.children}
            </ButtonTag>
        );

        if (!title) {
            return button;
        }

        return (
            <Tooltip title={title}
                placement={this.props.tooltipPlacement}>
                {button}
            </Tooltip>
        );
    }
}

CircleButton.defaultProps = {
    size: 1
};

export default CircleButton;