/**
 * This is the config file where you can edit information as you want.
 * 
 * There are 3 variable objects which contain all the information.
 * 
 * 1. CommonConfig
 *      This variable contains all the common configuration of your profile
 *      including your name, your social links and the path to draw the signature.
 * 2. ProjectsConfig
 *      This variable contains all the information which will be part of the
 *      projects section. Here you can add your own projects and provide a link for them
 *      and also change the icon as per your liking.
 * 3. CustomSectionsConfig
 *      Now this is the fun part. This variable is an array which can hold any number
 *      of sections. Here you can define any of your custom sections may it be "Work", "Reviews",
 *      "Portfolio" or whatnot. The "content" property supports JSX so you can style or use it
 *      however you like!
 * 
 * So what are you waiting for? GO FOR IT!
 */

import React from 'react';

import { Icons } from './icons';

// CUSTOM ICONS
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SchoolIcon from '@material-ui/icons/School';

// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

// CONFIGURABLE TEXT BEGINS HERE

/** Common config for top section and footer */
const CommonConfig = {
    // Whether to add the free Palestine screen at the start
    addFreePalestine: false,
    // Name that will be displayed at the top
    name: "Pathum Sanjaya",
    // Browser tab title
    browserTitle: "PATHUM-SANJAYA",
    email: "graphicdesigninglk@gmail.com",
    // Configuration for signature in the top section
    signature: {
        isImage: true,
        imageUrl: process.env.PUBLIC_URL + '/profile.png',  // Using PUBLIC_URL for correct path resolution
        style: {
            width: '350px',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '50%',
            filter: 'none', // Full color - no black and white
            border: '6px solid #ffffff',
            boxShadow: `
                0 0 0 15px var(--bg-primary),
                0 0 0 20px #ffffff,
                0 0 35px rgba(0,0,0,0.2)
            `,
            cursor: 'default' // Remove pointer cursor
        }
    },
    // Information for social media accounts
    social: [
        {
            name: "Facebook",
            icon: Icons['facebook'],
            link: "https://web.facebook.com/PATHUMSANJAYA979/"
        },
        {
            name: "LinkedIn",
            icon: Icons['linkedin'],
            link: "https://www.linkedin.com/in/pathum-sanjaya-b86155367/"
        },
        {
            name: "GitHub",
            icon: Icons['github'],
            link: "https://github.com/PATHUM-SANJAYA"
        },
        {
            name: "WhatsApp",
            icon: Icons['whatsapp'],
            link: "https://wa.me/94725510768?text=Hello%20Pathum%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
        },
        {
            name: "Email",
            icon: Icons['email'],
            link: "https://mail.google.com/mail/u/0/?fs=1&to=pathumsanjaya.info@gmail.com&su=I+am+looking+to+hire&body=Hello+Pathum,%0A%0A&tf=cm"
        },
        {
            name: "CV",
            icon: Icons['link'],
            link: "https://drive.google.com/file/d/1NOv_BEmPK6f5PUUxYELz0CE-yHj3e_NX/view?usp=sharing"
        }
    ]
};

/** Config for the education section */
const EducationConfig = {
    // Name / title of the section
    name: 'education',
    // Icon next to the header title
    headerIcon: <SchoolIcon />,
    // Extra classes to apply styling
    extraClass: '',
    // Education entries
    education: [
        {
            degree: 'NVQ Level 5',
            field: 'National Diploma in Information and Cyber Security Technology',
            institution: 'Technical College – Gampaha',
            period: 'Ongoing'
        },
        {
            degree: 'NVQ Level 4',
            field: 'Computer Hardware and Network Technician',
            institution: 'College of Technology - Galle',
            period: '2024-01-16 - 2025-01-10',
            references: ['https://drive.google.com/file/d/1eJptd1IQwkf-_qJ6rvLsw-ouj44keqvl/view?usp=drive_link']
        },
        {
            degree: 'NVQ Level 4',
            field: 'Computer Graphic Designer',
            institution: 'Technical College - Kalutara',
            period: '2023-02-27 - 2023-08-26',
            references: ['https://drive.google.com/file/d/1Aty3VktcPv5Meydts7JnCDvyVbWbZr8t/view?usp=sharing']
        },
        {
            degree: 'G.C.E. Ordinary Level Examination (O/L)',
            field: '',
            institution: 'WP/MT Welipenna Sinhala Junior School',
            period: '2021',
            result: 'Passed',
            references: ['https://drive.google.com/file/d/1TbpbcKbsxajnLM-6yE2e2bFHK5EN8DwQ/view?usp=sharing']
        }
    ]
};

/** Config for the experience section */
const ExperienceConfig = {
    // Name / title of the section
    name: 'experience',
    // Icon next to the header title
    headerIcon: <BusinessCenterIcon />,
    // Extra classes to apply styling
    extraClass: 'section-reverse',
    // Experiences
    experiences: [
        {
            company: 'Merchant Bank of Sri Lanka',
            position: 'Information Security Analyst',
            period: 'Ongoing',
            description: 'Monitored SOC alerts, email security, and Data Loss Prevention (DLP) through comprehensive daily and monthly reviews. Conducted vulnerability assessments using Nessus, managed Privileged Access Management (PAM) systems, and ensured organizational alignment with ISO 27001, NIST, and CBSL guidelines. Additionally, analyzed real-time threat intelligence for zero-day protection, effectively handled incident escalations within defined SLAs, and facilitated staff cybersecurity training.'
        },
        {
            company: 'ENEXE PVT LTD',
            position: 'IT Field Support Engineer',
            period: 'Sept 2025 - July 2026',
            description: 'Delivered on-site IT support for multiple financial institutions and enterprise clients across Sri Lanka. Installed and configured workstations, operating systems, peripherals, and specialized business applications. Diagnosed network connectivity, hardware, operating-system, and software incidents. Coordinated escalations and supported the restoration of business-critical IT services. Documented technical issues, solutions, configurations, and service activities.',
            references: ['https://drive.google.com/file/d/1tdo6ol9TDqJSPCv62apkCVfhgPS9Wh9i/view?usp=sharing']
        },
        {
            company: 'Faculty of Medicine, University of Ruhuna',
            position: 'Computer Network Technician',
            period: 'January 2025 - June 2025',
            description: 'Completed a six-month training program as a Computer Network Technician. Configured and maintained network infrastructure including Cisco switches, routers, and VLANs. Managed network services such as DHCP and DNS. Maintained computer hardware and performed Linux and Windows system operations. Assisted in building and troubleshooting secure network environments.',
            references: [
                'https://drive.google.com/file/d/1ZR9wvKE3qYNJv6RwHXYutQ8owjFhFTs3/view?usp=sharing',
                'https://drive.google.com/file/d/1mCx9YXNDcZxNOiSs90lER2pjyHb7PArD/view?usp=drive_link'
            ]
        },
        {
            company: 'Studio Jayampath',
            position: 'Graphic Designer',
            period: 'August 2023 - January 2024',
            description: 'Undertook a six-month training program as a Graphic Designer. Developed a strong foundation in graphic design principles, including color theory and layout design. Gained proficiency in modern design tools and software to create visual communications.',
            references: ['https://drive.google.com/file/d/14Ulw60QJ9_ldvS1BBvMWnUQstiYsBoNc/view?usp=sharing']
        },
        {
            company: 'Self-Employed',
            position: 'Graphic Designer & IT Technician',
            period: 'Ongoing',
            description: 'Provided freelance creative and technical services to diverse clients. Offered IT support including computer maintenance, local networking setups, and troubleshooting. Delivered graphic design projects covering logo design, branding, and social media content.',
            references: ['https://pmeditlk.netlify.app']
        }
    ]
};

/** Config for the projects section */
const ProjectsConfig = {
    // Name / title of the section
    name: 'projects',
    // Icon next to the header title
    headerIcon: <ComputerIcon />,
    // Extra classes to apply styling
    extraClass: '',
    // Projects
    projects: [
        {
            name: 'PixelCeylon',
            icon: Icons['web'],
            description: 'Developed a browser-based collaborative pixel art canvas requiring no downloads or accounts. Built the core synchronization engine and frontend interface, and implemented rate limiting and input validation to prevent abuse.',
            links: [
                {
                    tooltip: 'Visit Website',
                    link: 'https://pixelceylon.duckdns.org',
                    icon: Icons['link']
                },
                {
                    tooltip: 'Download App',
                    link: 'https://drive.google.com/file/d/1rOVrRnotXd1NMZyOFfWUh18BB5_FMQc6/view?usp=sharing',
                    icon: Icons['android']
                }
            ]
        },
        {
            name: 'Graphic Design Services',
            icon: Icons['web'],
            description: 'Created a responsive website to showcase my graphic design services and expertise. Implemented a contact form and mobile-first layouts, improving client outreach and enhancing professional visibility.',
            links: [
                {
                    tooltip: 'Visit Website',
                    link: 'https://pmeditlk.netlify.app',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'Media Processing Utility (Online Downloader)',
            icon: Icons['web'],
            description: 'An online platform enabling authorized users to process downloadable media links. Note: This project is intended for downloading user-owned, public-domain, or otherwise authorized media in compliance with platform terms.',
            links: [
                {
                    tooltip: 'Visit Website',
                    link: 'https://fastlk.duckdns.org',
                    icon: Icons['link']
                },
                {
                    tooltip: 'Download App',
                    link: 'https://drive.google.com/file/d/1o-F5FjM57N3-nUoNIrDLJPvRFEeqxuCg/view?usp=sharing',
                    icon: Icons['android']
                }
            ]
        },
        {
            name: 'Networking',
            icon: Icons['web'],
            description: 'Contributed to the rebuilding of the Faculty of Medicine\'s network infrastructure. Responsibilities included routing, switching, and implementing basic network security protocols. Gained practical knowledge in enterprise-scale routing and network hardware deployment.',
            links: []
        },
        {
            name: 'Website Development Projects',
            icon: Icons['web'],
            description: 'Leveraged foundational coding knowledge to deploy and maintain several functional websites, focusing on performance and responsive design.',
            links: []
        }
    ]
};

/** Config for sections */
const CustomSectionsConfig = [
    // EXPERIENCE SECTION
    {
        name: 'experience',
        headerIcon: <BusinessCenterIcon />,
        extraClass: 'section-reverse',
        notInMenu: false,
        content: (
            <>
                <div className="experience-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {/* Timeline line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '40px',
                        bottom: '20px',
                        width: '3px',
                        background: 'var(--accent-primary)',
                        zIndex: 0
                    }}></div>

                    {ExperienceConfig.experiences.map((exp, index) => {
                        return (
                            <div key={'experience-' + index} className="experience-item" style={{
                                position: 'relative',
                                paddingLeft: '60px',
                                marginBottom: '1.5rem',
                                zIndex: 1,
                                transition: 'all 0.3s ease',
                                transform: 'translateY(0)',
                                ':hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                {/* Timeline dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '15px',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-primary)',
                                    zIndex: 2
                                }}></div>

                                <div className="experience-card" style={{
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '10px',
                                    padding: '1.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid rgba(var(--accent-primary-rgb), 0.2)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div className="experience-header">
                                        <h3 style={{ fontSize: '1.4rem' }}>{exp.position}</h3>
                                        <h4 style={{ color: 'var(--accent-primary)', marginTop: '0.5rem' }}>{exp.company}</h4>
                                        <div className="experience-period" style={{
                                            display: 'inline-block',
                                            padding: '0.3rem 0.8rem',
                                            backgroundColor: 'rgba(var(--accent-primary-rgb), 0.1)',
                                            borderRadius: '4px',
                                            color: 'var(--accent-primary)',
                                            fontSize: '0.9rem',
                                            marginTop: '0.5rem'
                                        }}>
                                            {exp.period}
                                        </div>
                                    </div>
                                    <p style={{ marginTop: '1rem' }}>{exp.description}</p>
                                    {exp.references && exp.references.length > 0 && (
                                        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                                            {exp.references.map((ref, refIdx) => (
                                                <CircleButton key={refIdx} link={ref} target="_blank" tooltip="Reference" size={1.4}>
                                                    {Icons['link']}
                                                </CircleButton>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        )
    },
    // PROJECTS SECTION
    {
        // Name of the section
        name: 'projects',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <ComputerIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: '',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                {ProjectsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-links" style={{ textAlign: 'right' }}>
                                {project.links.map((link, linkIndex) => {
                                    return (
                                        <CircleButton key={'project-link-' + index + linkIndex} link={link.link}
                                            target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </>
        )
    },
    // EDUCATION SECTION
    {
        name: 'education',
        headerIcon: <SchoolIcon />,
        extraClass: 'section-reverse',
        notInMenu: false,
        content: (
            <>
                <div className="education-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {/* Timeline line - simplified */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '40px',
                        bottom: '20px',
                        width: '3px',
                        background: 'var(--accent-primary)',
                        zIndex: 0
                    }}></div>

                    {EducationConfig.education.map((edu, index) => {
                        return (
                            <div key={'education-' + index} className="education-item" style={{
                                position: 'relative',
                                paddingLeft: '60px',
                                marginBottom: '1.5rem',
                                zIndex: 1,
                                transition: 'all 0.3s ease',
                                transform: 'translateY(0)',
                                ':hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                {/* Timeline dot - simplified */}
                                <div style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '15px',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-primary)',
                                    zIndex: 2
                                }}></div>

                                <div className="education-card" style={{
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '10px',
                                    padding: '1.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid rgba(var(--accent-primary-rgb), 0.2)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div className="education-header" style={{
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem'
                                    }}>
                                        <h3 style={{
                                            fontSize: '1.4rem',
                                            color: 'var(--accent-primary)'
                                        }}>
                                            {Icons['school']} {edu.degree}
                                        </h3>

                                        {edu.field &&
                                            <h4 style={{
                                                color: 'var(--accent-primary)',
                                                marginTop: '0.2rem',
                                                fontSize: '1.1rem'
                                            }}>
                                                {edu.field}
                                            </h4>
                                        }

                                        <h5 style={{
                                            marginTop: '0.2rem',
                                            color: 'var(--text-primary)',
                                            fontWeight: 'normal',
                                            fontSize: '1rem'
                                        }}>
                                            {edu.institution}
                                        </h5>

                                        <div style={{
                                            display: 'flex',
                                            gap: '0.5rem',
                                            marginTop: '0.5rem',
                                            flexWrap: 'wrap'
                                        }}>
                                            <div className="education-period" style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                padding: '0.3rem 0.8rem',
                                                backgroundColor: 'rgba(var(--accent-primary-rgb), 0.1)',
                                                borderRadius: '20px',
                                                color: 'var(--accent-primary)',
                                                fontSize: '0.9rem'
                                            }}>
                                                <span style={{ marginRight: '5px' }}>{Icons['calendar']}</span>
                                                {edu.period}
                                            </div>

                                            {edu.result && (
                                                <div className="education-result" style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    padding: '0.3rem 0.8rem',
                                                    backgroundColor: 'rgba(var(--accent-secondary-rgb), 0.1)',
                                                    borderRadius: '20px',
                                                    color: 'var(--accent-secondary)',
                                                    fontSize: '0.9rem',
                                                    marginLeft: '0.5rem'
                                                }}>
                                                    <span style={{ marginRight: '5px' }}>{Icons['star']}</span>
                                                    Result: {edu.result}
                                                </div>
                                            )}
                                        </div>
                                        {edu.references && edu.references.length > 0 && (
                                            <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                                                {edu.references.map((ref, refIdx) => (
                                                    <CircleButton key={refIdx} link={ref} target="_blank" tooltip="Reference" size={1.4}>
                                                        {Icons['link']}
                                                    </CircleButton>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        )
    },
    // ABOUT SECTION
    {
        name: 'about',
        headerIcon: <InfoIcon />,
        extraClass: 'about-section section-reverse',
        content: (
            <>
                <h4>{Icons['about']} Professional Profile</h4>
                <p>
                    I am naturally curious, enjoy experimentation, and continuously explore emerging technologies. My goal is to advance as a cybersecurity engineer, building upon my hands-on experience in enterprise IT support and network administration.
                </p>

                <h4>{Icons['networksecurity']} Main Skills</h4>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.2rem', justifyContent: 'center' }}>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px' }}>
                        <span title="Networking">{Icons['networking']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Networking</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px' }}>
                        <span title="Cybersecurity">{Icons['cybersecurity']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Cybersecurity</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px' }}>
                        <span title="Cloud Computing">{Icons['cloud']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Cloud Computing</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px' }}>
                        <span title="Web Security">{Icons['websecurity']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Web Security</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px' }}>
                        <span title="Network Analysis">{Icons['analysis']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Network Analysis</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px' }}>
                        <span title="Security Testing">{Icons['sectest']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Security Testing</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px', marginTop: '1.5rem' }}>
                        <span title="Linux">{Icons['linux']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Linux</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px', marginTop: '1.5rem' }}>
                        <span title="Windows">{Icons['windows']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Windows</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px', marginTop: '1.5rem' }}>
                        <span title="Computer Hardware">{Icons['hardware']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Hardware</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px', marginTop: '1.5rem' }}>
                        <span title="Threat Intelligence">{Icons['threat']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Threat Intel</span>
                    </div>
                </div>

                <h4>{Icons['tools']} Security Tools</h4>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem 0.8rem', justifyContent: 'center', marginBottom: '1.2rem', alignItems: 'flex-start' }}>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90px' }}>
                        <span title="SIEM">{Icons['siem']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>SIEM</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90px' }}>
                        <span title="Nessus">{Icons['nessus']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Nessus</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90px' }}>
                        <span title="PAM">{Icons['pam']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>PAM</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90px' }}>
                        <span title="CheckPoint Email Security">{Icons['emailsec']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>Email Sec.</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90px' }}>
                        <span title="MDM">{Icons['mdm']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>MDM</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90px' }}>
                        <span title="ISOC">{Icons['isoc']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>ISOC</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90px' }}>
                        <span title="CrowdStrike EDR">{Icons['edr']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>CrowdStrike</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90px' }}>
                        <span title="DLP">{Icons['dlp']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>DLP</span>
                    </div>
                </div>

                <h4>{Icons['brush']} Design Skills</h4>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Adobe Photoshop">{Icons['photoshop']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Photoshop</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Adobe Illustrator">{Icons['illustrator']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Illustrator</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Adobe InDesign">{Icons['indesign']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>InDesign</span>
                    </div>
                    <div className="skill-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                        <span title="Wondershare Filmora">{Icons['filmora']}</span>
                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Filmora</span>
                    </div>
                </div>
            </>
        )
    },
    {
        name: 'reviews',
        headerIcon: <RateReviewIcon />,
        content: (
            <>
                <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} what do others say?</h4>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    Pathum delivered highly responsive and capable on-site IT support across our enterprise and banking clients. His expertise in troubleshooting networks, hardware, and specialized software consistently ensured stable IT operations.
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Lahiru Wickramasinghe</b>
                        <br />
                        Manager IT Support, ENEXE (Pvt) Ltd, 2026
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    Pathum demonstrated strong troubleshooting skills and contributed effectively to our network infrastructure work. His technical foundation and adaptability were clear throughout the project.
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Roshan Rukmal</b>
                        <br />
                        Network Manager, 2025
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    Pathum showed strong technical potential and a quick ability to learn new technologies. He is flexible, open-minded, and approaches problem-solving methodically.
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>M.H. Geetha Kamanie</b>
                        <br />
                        Computer Application Assistant, 2025
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>"</span>
                    <br />
                    I appreciate Pathum's confidence in diagnosing and solving technical problems independently. His practical intuition and troubleshooting approach are valuable assets.
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>S.M. Kumarage</b>
                        <br />
                        Technical Officer, 2025
                    </i>
                </p>
            </>
        )
    }
];

export { CommonConfig, EducationConfig, ExperienceConfig, ProjectsConfig, CustomSectionsConfig, Icons };
