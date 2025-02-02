import Header from './Header';
import Footer from './Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-wrapper')}>
                <div className={cx('main-content')}>{children}</div>

                <Footer />
            </div>

            <Header />
        </div>
    );
}

export default DefaultLayout;
