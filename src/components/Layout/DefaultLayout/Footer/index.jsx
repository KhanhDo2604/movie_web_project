import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import IconButton from '@material/react-icon-button';

import styles from './Footer.module.scss';
import config from '../../../../config';
import images from '../../../../assets/images';
import CustomButton from '../../../ui/Button/CustomButton';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('upper')}>
                <div className={cx('left-inner')}>
                    <span>Our platform is trusted by million & features best updated movies all around the world.</span>
                </div>
                <div className={cx('right-inner')}>
                    <div className={cx('nav')}>
                        <CustomButton to={config.routes.home}>Home</CustomButton>
                        <span> / </span>
                        <CustomButton to={config.routes.home}>Discover</CustomButton>
                        <span> / </span>
                        <CustomButton to={config.routes.home}>Influence</CustomButton>
                        <span> / </span>
                        <CustomButton to={config.routes.home}>Release</CustomButton>
                    </div>
                    <div className={cx('social-buttons')}>
                        <IconButton>
                            <img src={images.facebook} alt="facebook" width={28} />
                        </IconButton>

                        <IconButton>
                            <img src={images.instagram} alt="instagram" width={28} />
                        </IconButton>

                        <IconButton>
                            <img src={images.mail} alt="mail" width={28} />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className={cx('lower')}>
                <div className={cx('terms-buttons')}>
                    <CustomButton>Privacy policy</CustomButton>
                    <CustomButton>Term of service</CustomButton>
                    <CustomButton>Language</CustomButton>
                </div>
                <div className={cx('copy-right')}>
                    <span>@2025</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
