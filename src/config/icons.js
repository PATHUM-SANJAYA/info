import React from 'react';

// ICONS
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MapIcon from '@material-ui/icons/Map';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import Twitter from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import WifiIcon from '@material-ui/icons/Wifi';
import SecurityIcon from '@material-ui/icons/Security';
import RouterIcon from '@material-ui/icons/Router';
import MemoryIcon from '@material-ui/icons/Memory';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import LaptopIcon from '@material-ui/icons/Laptop';
import ImageIcon from '@material-ui/icons/Image';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import BrushIcon from '@material-ui/icons/Brush';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';

// Common icon style for consistent sizing
const iconStyle = {
    fontSize: '2rem',
    margin: '0 0.3rem'
};

// Smaller icons on mobile via media queries
const smallIconStyle = {
    fontSize: '1.6rem',
    margin: '0 0.25rem'
};

/** Default icons */
const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 768px)').matches;

const Icons = {
    email: <MailIcon style={isMobile ? smallIconStyle : iconStyle} />,
    facebook: <SvgIcon component={FacebookIcon} style={isMobile ? smallIconStyle : iconStyle} />,
    instagram: <InstagramIcon style={isMobile ? smallIconStyle : iconStyle} />,
    twitter: <Twitter style={isMobile ? smallIconStyle : iconStyle} />,
    github: <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ ...(isMobile ? smallIconStyle : iconStyle), fill: 'none' }} />,
    linkedin: <SvgIcon component={LinkedInIcon} style={isMobile ? smallIconStyle : iconStyle} />,
    whatsapp: <WhatsAppIcon style={isMobile ? smallIconStyle : iconStyle} />,
    projects: <ComputerIcon style={isMobile ? smallIconStyle : iconStyle} />,
    about: <InfoIcon style={isMobile ? smallIconStyle : iconStyle} />,
    networking: <WifiIcon style={isMobile ? smallIconStyle : iconStyle} />,
    cybersecurity: <SecurityIcon style={isMobile ? smallIconStyle : iconStyle} />,
    linux: <LaptopIcon style={isMobile ? smallIconStyle : iconStyle} />,
    windows: <DesktopWindowsIcon style={isMobile ? smallIconStyle : iconStyle} />,
    hardware: <MemoryIcon style={isMobile ? smallIconStyle : iconStyle} />,
    photoshop: <ImageIcon style={isMobile ? smallIconStyle : iconStyle} />,
    illustrator: <ColorLensIcon style={isMobile ? smallIconStyle : iconStyle} />,
    indesign: <BrushIcon style={isMobile ? smallIconStyle : iconStyle} />,
    filmora: <VideoLibraryIcon style={isMobile ? smallIconStyle : iconStyle} />,
    helpoutline: <HelpOutlineIcon style={isMobile ? smallIconStyle : iconStyle} />,
    map: <MapIcon style={isMobile ? smallIconStyle : iconStyle} />,
    code: <CodeIcon style={isMobile ? smallIconStyle : iconStyle} />,
    link: <LinkIcon style={isMobile ? smallIconStyle : iconStyle} />,
    web: <WebIcon style={isMobile ? smallIconStyle : iconStyle} />
};

export { Icons };