import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircleButton from '../../components/CircleButton/CircleButton';
import './TopSection.scss';

import { CommonConfig } from '../../config';

class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            showScrollIndicator: true
        };
    }

    componentDidMount() {
        if (this.pathElement && CommonConfig.signature?.viewBox) {
            const signatureLength = this.pathElement.getTotalLength();
            this.pathElement.setAttribute('stroke-dasharray', signatureLength);
            this.pathElement.setAttribute('stroke-dashoffset', signatureLength);
            
            const viewBoxCoords = CommonConfig.signature.viewBox.split(' ').map(val => parseInt(val));
            this.pathElement.setAttribute('stroke-width', Math.max(...viewBoxCoords) / 100);
        }

        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkMobile);
        window.removeEventListener('scroll', this.handleScroll);
    }

    checkMobile = () => {
        const isMobileView = window.innerWidth <= 767;
        this.setState({ isMobile: isMobileView });
    }

    handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50) {
            if (this.state.showScrollIndicator) {
                this.setState({ showScrollIndicator: false });
            }
        } else {
            if (!this.state.showScrollIndicator) {
                this.setState({ showScrollIndicator: true });
            }
        }
    }

    handleScrollDown = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }

    render() {
        const { isMobile, showScrollIndicator } = this.state;
        const nameParts = CommonConfig.name.trim().split(/\s+/).filter(Boolean);
        const mobileNameFirst = nameParts[0] || CommonConfig.name;
        const mobileNameRest = nameParts.slice(1).join(' ');

        return (
            <div className="top-section">
                <div className="intro">
                    <h1 data-text={CommonConfig.name}>
                        {isMobile ? (
                            mobileNameRest ? (
                                <>
                                    <span className="mobile-name-first">{mobileNameFirst}</span>
                                    <span className="mobile-name-second">{mobileNameRest}</span>
                                </>
                            ) : (
                                <span className="mobile-name-first">{mobileNameFirst}</span>
                            )
                        ) : (
                            CommonConfig.name
                        )}
                    </h1>
                    <div className="professional-title" style={{ 
                        fontSize: '1.2rem', 
                        color: '#ffffff', 
                        marginTop: '0.8rem', 
                        textAlign: 'center', 
                        fontWeight: '600',
                        letterSpacing: '0.8px',
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.4)'
                    }}>
                        Junior Cybersecurity and Network Support Professional
                    </div>
                </div>
                <div className="signature">
                    {CommonConfig.signature?.isImage ? (
                        <div className="profile-image-container">
                            <div className="profile-image-ring outer-ring"></div>
                            <div className="profile-image-ring inner-ring"></div>
                            <div className="profile-image-ring middle-ring"></div>
                            <div className="profile-image-particles"></div>
                            <div className="profile-image-glow"></div>
                            <img 
                                src={CommonConfig.signature.imageUrl} 
                                alt="Signature"
                                className="profile-image"
                                style={CommonConfig.signature.style}
                            />
                        </div>
                    ) : (
                        <svg viewBox={CommonConfig.signature?.viewBox}>
                            <path ref={pathElement => {
                                this.pathElement = pathElement;
                            }} id="signature-path" stroke="var(--text-primary)" fill="none"
                                d={CommonConfig.signature?.signaturePathD} />
                        </svg>
                    )}
                </div>
                <div className="social">
                    {CommonConfig.social.map((socialDetails, index) => {
                        return (
                            <CircleButton 
                                key={'top-section-social-' + index} 
                                tooltip={socialDetails.name} 
                                tooltipPlacement="top"
                                link={socialDetails.link} 
                                target="_blank"
                            >
                                {socialDetails.icon}
                            </CircleButton>
                        );
                    })}
                </div>
                {isMobile && (
                    <div className={`mobile-scroll-indicator ${!showScrollIndicator ? 'hiding' : ''}`}>
                        <span className="scroll-text">SCROLL</span>
                        <ExpandMoreIcon />
                    </div>
                )}
            </div>
        );
    }
}

export default TopSection;