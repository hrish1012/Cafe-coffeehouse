import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Icon from '../Icon';
import { socialMedia } from '../../data/socialMedia';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='conditions'>
                <Link to='/about' className='link'>Our Story</Link>
                <Link to='/team' className='link'>The Team</Link>
            </div>
            <div className='copyright'>
                <p>© Copyright 2023 | Coffee House project by <a href='https://www.linkedin.com/in/hrishita-barkhade/' target='_blank' rel='noreferrer'>Hrishita Barkhade</a>. All rights reserved.</p>
            </div>
            <div className='social-media'>
                {socialMedia.map(( item, index ) => {
                    return (
                        <a key={index} href={item.link} target='_blank' rel='noreferrer'>
                            <Icon
                                className={item.icon}
                                hoverColor='$secondary'
                                size='1.5rem'
                            />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer;
