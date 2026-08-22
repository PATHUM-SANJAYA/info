import React from 'react';
import './Section.scss';

const Section = React.forwardRef((props, ref) => {
    return (
        <div className="section-wrapper" ref={ref}>
            <div className={!props.extraClass ? 'section' : ('section ' + props.extraClass)}>
                <h2 className="section-header">
                    {React.cloneElement(props.headerIcon, { classes: { root: 'section-header-icon' } })}
                    {props.sectionHeader}
                </h2>
                <div className="section-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
});

Section.displayName = 'Section';

export default Section;
