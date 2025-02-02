import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import config from '../../../../config';
import Button from '../../../ui/Button/Button';

const cx = classNames.bind(styles);

function Header() {
    const [menuChange, setMenuChange] = useState(config.routes.home);

    const handleMenuChange = (menu) => (menuChange === menu ? cx('active') : '');

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Button to={config.routes.home} onClick={() => setMenuChange(config.routes.home)}>
                        <img src={images.logo} alt="Logo" width={54} />
                    </Button>
                </div>

                <div className={cx('nav')}>
                    <Button
                        to={config.routes.home}
                        onClick={() => setMenuChange(config.routes.home)}
                        className={handleMenuChange(config.routes.home)}
                        text
                    >
                        Home
                    </Button>
                    <Button
                        to={config.routes.discover}
                        onClick={() => setMenuChange(config.routes.discover)}
                        className={handleMenuChange(config.routes.discover)}
                        text
                    >
                        Discover
                    </Button>
                    <Button
                        to={config.routes.movieRelease}
                        onClick={() => setMenuChange(config.routes.movieRelease)}
                        className={handleMenuChange(config.routes.movieRelease)}
                        text
                    >
                        Movie Release
                    </Button>
                    <Button
                        to={config.routes.about}
                        onClick={() => setMenuChange(config.routes.about)}
                        className={handleMenuChange(config.routes.about)}
                        text
                    >
                        About
                    </Button>
                    <Button
                        to={config.routes.forum}
                        onClick={() => setMenuChange(config.routes.forum)}
                        className={handleMenuChange(config.routes.forum)}
                        text
                    >
                        Forum
                    </Button>
                </div>

                <div className={cx('action')}>
                    <Button className={cx('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                    <Button outline>Sign Up</Button>

                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
