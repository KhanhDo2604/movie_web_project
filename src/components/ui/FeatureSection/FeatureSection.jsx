import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './FeatureSection.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tempData from '../../../data/TempData';
import { faBookmark, faCirclePlay, faStar } from '@fortawesome/free-solid-svg-icons';
import PosterCard from '../PosterCard/PosterCard';
import CustomButton from '../Button/CustomButton';

const cx = classNames.bind(styles);

function FeatureSection() {
    const scrollRef = useRef(null);
    const [currentMovie, setCurrentMovie] = useState(0);
    const ITEM_OFFSET = 50; // offset left of each item

    let movie = tempData[currentMovie];

    useEffect(() => {
        if (scrollRef.current) {
            scrollToIndex(currentMovie);
        }
    }, [currentMovie]);

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            const children = scrollRef.current.children;
            if (children[index]) {
                const container = scrollRef.current;
                const target = children[index];

                // count the scrollLeft value to center the target item
                const scrollLeft = target.offsetLeft - container.offsetLeft - ITEM_OFFSET;

                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                movie = tempData[index];
            }
        }
    };

    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${movie.poster})` }}>
            <div className={cx('overlay')}></div>
            <div className={cx('container')}>
                <div className={cx('content-info')}>
                    <h4 className={cx('section-title')}>Featured in ...</h4>
                    <span>Best featured for you today</span>
                    <div className={cx('spacer')}></div>
                    <p>#1 in Australia</p>

                    <h1 className={cx('movie-title')}>{movie.title}</h1>

                    <div className={cx('info-wrapper')}>
                        <FontAwesomeIcon icon={faStar} color="#fcec03" />
                        <span className={cx('rating')}> {movie.rating}</span>
                        <span>|</span>

                        <span className={cx('genre')}>{movie.genre.join(', ')}</span>

                        <span> • Movie</span>
                    </div>

                    <p className={cx('description')}>{movie.plot}</p>

                    <div className={cx('actions')}>
                        <CustomButton className={cx('btn')} primary leftIcon={<FontAwesomeIcon icon={faCirclePlay} />}>
                            Watch Trailer
                        </CustomButton>
                        <CustomButton className={cx('btn')} outline leftIcon={<FontAwesomeIcon icon={faBookmark} />}>
                            Add to Watchlist
                        </CustomButton>
                    </div>
                </div>
                <div className={cx('content-list')}>
                    <div ref={scrollRef} className={cx('movie-list')}>
                        {tempData.map((movie, index) => (
                            <PosterCard
                                key={index}
                                movie={movie}
                                active={index === currentMovie ? '-active' : ''}
                                onClick={() => setCurrentMovie(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;
