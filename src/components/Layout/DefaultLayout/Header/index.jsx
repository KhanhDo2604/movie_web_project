import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import config from '../../../../config';

const cx = classNames.bind(styles);

function Header() {
    const [menuChange, setMenuChange] = useState(config.routes.home);

    const handleMenuChange = (menu) => (menuChange === menu ? cx('active') : '');

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} onClick={() => setMenuChange(config.routes.home)}>
                        <img src={images.logo} alt="Logo" width={54} />
                    </Link>
                </div>

                <div className={cx('nav')}>
                    <Link
                        to={config.routes.home}
                        className={handleMenuChange(config.routes.home)}
                        onClick={() => setMenuChange(config.routes.home)}
                    >
                        Home
                    </Link>
                    <Link
                        to={config.routes.discover}
                        className={handleMenuChange(config.routes.discover)}
                        onClick={() => setMenuChange(config.routes.discover)}
                    >
                        Discover
                    </Link>
                    <Link
                        to={config.routes.movieRelease}
                        className={handleMenuChange(config.routes.movieRelease)}
                        onClick={() => setMenuChange(config.routes.movieRelease)}
                    >
                        Movie Release
                    </Link>
                    <Link
                        to={config.routes.about}
                        className={handleMenuChange(config.routes.about)}
                        onClick={() => setMenuChange(config.routes.about)}
                    >
                        About
                    </Link>
                    <Link
                        to={config.routes.forum}
                        className={handleMenuChange(config.routes.forum)}
                        onClick={() => setMenuChange(config.routes.forum)}
                    >
                        Forum
                    </Link>
                </div>

                <div className={cx('action')}>
                    <button type="button" className={cx('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button type="button" className={cx('sign-up')}>
                        Sign Up
                    </button>
                    <button type="button" className={cx('login')}>
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
