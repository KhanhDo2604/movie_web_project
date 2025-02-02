import classNames from 'classnames/bind';

import styles from './RandomAdvertisedMovie.module.scss';
import Button from '../../../components/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function RandomAdvertisedMovie() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-poster')}>
                <img
                    src="https://ticketdirect.co.nz/wp-content/uploads/2024/06/deadpool-and-wolverine-poster-reald-3d-cropped.jpg"
                    alt="poster"
                />

                <div className={cx('overlay')}></div>
            </div>

            <div className={cx('content')}>
                <div className={cx('type')}>Movie</div>
                <div className={cx('title')}>
                    <h1>Deadpool and Wolverine</h1>
                </div>
                <div className={cx('info')}>
                    <span>2h40m</span>
                    <span className="mx-2"> • </span>
                    <span>2022</span>
                    <span className="mx-2"> • </span>
                    <span>Fantasy</span>
                    <span className="mx-2"> • </span>
                    <span>Action</span>
                </div>
                <div className={cx('description')}>
                    <span>
                        A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out
                    </span>
                </div>

                <div className={cx('actions')}>
                    <Button className={cx('btn')} primary leftIcon={<FontAwesomeIcon icon={faCirclePlay} />}>
                        Watch Trailer
                    </Button>
                    <Button className={cx('btn')} outline leftIcon={<FontAwesomeIcon icon={faBookmark} />}>
                        Add to Watchlist
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RandomAdvertisedMovie;
