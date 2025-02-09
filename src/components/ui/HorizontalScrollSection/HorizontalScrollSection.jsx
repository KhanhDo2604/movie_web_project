import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './HorizontalScrollSection.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HorizontalScrollSection({ children }) {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const scrollAmount = 160; //scroll amount in pixels

    // Function to update scroll state
    const updateScrollState = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    // Function to handle scrolling
    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });

            // Delay checking the scroll position to ensure smooth behavior
            setTimeout(updateScrollState, 300);
        }
    };

    useEffect(() => {
        updateScrollState();
    }, []);

    return (
        <div className={cx('container')}>
            <div ref={scrollRef} className={cx('movie-list')}>
                {children}
            </div>
            {canScrollLeft && (
                <div className={cx('left-decoration')}>
                    <Button className={cx('left-btn')} onClick={() => scroll('left')}>
                        <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" />
                    </Button>
                </div>
            )}
            {canScrollRight && (
                <div className={cx('right-decoration')}>
                    <Button className={cx('right-btn')} onClick={() => scroll('right')}>
                        <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" />
                    </Button>
                </div>
            )}
        </div>
    );
}

export default HorizontalScrollSection;
