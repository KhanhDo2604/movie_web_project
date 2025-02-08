import classNames from 'classnames/bind';

import styles from './ListMovie.module.scss';
import tempData from '../../../data/TempData';
import MovieCard from '../../../components/ui/MovieCard/MovieCard';
import HorizontalScrollSection from '../../../components/ui/HorizontalScrollSection/HorizontalScrollSection';
import PosterCard from '../../../components/ui/PosterCard/PosterCard';

const cx = classNames.bind(styles);

function ListMovie() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Just Release</h4>
            <HorizontalScrollSection>
                {tempData.map((movie, index) => (
                    <PosterCard key={index} movie={movie} />
                ))}
            </HorizontalScrollSection>
            <h4 className={cx('title')}>Popular of the week</h4>

            <h4 className={cx('title')}>Movies</h4>
            <HorizontalScrollSection>
                {tempData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </HorizontalScrollSection>

            <h4 className={cx('title')}>Series</h4>
            <HorizontalScrollSection>
                {tempData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </HorizontalScrollSection>

            <h4 className={cx('title')}>Korean Series</h4>
            <HorizontalScrollSection>
                {tempData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </HorizontalScrollSection>
        </div>
    );
}

export default ListMovie;
