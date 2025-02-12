import classNames from 'classnames/bind';

import styles from './PosterCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PosterCard({ movie, active = '', onClick }) {
    return (
        <div className={cx(`card-wrapper${active}`)} onClick={onClick}>
            <div className={cx('poster')}>
                <img src={movie.poster} alt={movie.title} />
            </div>
            <div className={cx('info')}>
                <h5 className={cx('title')}>{movie.title}</h5>
                <div className={cx('info-wrapper')}>
                    <FontAwesomeIcon icon={faStar} color="#fcec03" />
                    <span className={cx('rating')}> {movie.rating}</span>
                    <span>|</span>

                    <span className={cx('genre')}>{movie.genre.join(', ')}</span>

                    <span> • Movie</span>
                </div>
            </div>
        </div>
    );
}

export default PosterCard;
