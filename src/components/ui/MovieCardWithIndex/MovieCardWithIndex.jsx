import classNames from 'classnames/bind';

import styles from './MovieCardWithIndex.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MovieCardWithIndex({ movie, index }) {
    return (
        <div className={cx('card-wrapper')}>
            <h1 className={cx('index')}>{index + 1}</h1>
            <div className={cx('poster')}>
                <img src={movie.poster} alt={movie.title} />
            </div>
            <div className={cx('info')}>
                <div className={cx('age-tag')}>
                    <span>PG 13</span>
                </div>

                <h5 className={cx('title')}>{movie.title}</h5>

                <span className={cx('genre')}>
                    <FontAwesomeIcon icon={faFilm} /> {movie.genre.join('• ')}
                </span>

                <div className={cx('info-wrapper')}>
                    <FontAwesomeIcon icon={faStar} color="#fcec03" />
                    <span className={cx('rating')}> {movie.rating}</span>
                    <span>|</span>
                    <span>Movie</span>
                </div>
            </div>
        </div>
    );
}

export default MovieCardWithIndex;
