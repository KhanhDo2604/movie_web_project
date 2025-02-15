import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import config from '../../../../config';
import CustomButton from '../../../ui/Button/CustomButton';

const cx = classNames.bind(styles);

function Header() {
    const [menuChange, setMenuChange] = useState(config.routes.home);

    const handleMenuChange = (menu) => (menuChange === menu ? cx('active') : '');

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <CustomButton to={config.routes.home} onClick={() => setMenuChange(config.routes.home)}>
                        <img src={images.logo} alt="Logo" width={54} />
                    </CustomButton>
                </div>

                <div className={cx('nav')}>
                    <CustomButton
                        to={config.routes.home}
                        onClick={() => setMenuChange(config.routes.home)}
                        className={handleMenuChange(config.routes.home)}
                        text
                    >
                        Home
                    </CustomButton>
                    <CustomButton
                        to={config.routes.discover}
                        onClick={() => setMenuChange(config.routes.discover)}
                        className={handleMenuChange(config.routes.discover)}
                        text
                    >
                        Discover
                    </CustomButton>
                    <CustomButton
                        to={config.routes.movieRelease}
                        onClick={() => setMenuChange(config.routes.movieRelease)}
                        className={handleMenuChange(config.routes.movieRelease)}
                        text
                    >
                        Movie Release
                    </CustomButton>
                    <CustomButton
                        to={config.routes.about}
                        onClick={() => setMenuChange(config.routes.about)}
                        className={handleMenuChange(config.routes.about)}
                        text
                    >
                        About
                    </CustomButton>
                    <CustomButton
                        to={config.routes.forum}
                        onClick={() => setMenuChange(config.routes.forum)}
                        className={handleMenuChange(config.routes.forum)}
                        text
                    >
                        Forum
                    </CustomButton>
                </div>

                <div className={cx('action')}>
                    <CustomButton className={cx('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </CustomButton>
                    <CustomButton to={config.routes.signUp} outline>
                        Sign Up
                    </CustomButton>

                    <CustomButton to={config.routes.login} primary>
                        Login
                    </CustomButton>
                </div>
            </div>
        </header>
    );
}

export default Header;
