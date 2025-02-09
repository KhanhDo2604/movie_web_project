import ListMovie from './ListMovie/ListMovie';
import RandomAdvertisedMovie from './RandomAdvertisedMovie/RandomAdvertisedMovie';

function HomePage() {
    return (
        <div>
            <RandomAdvertisedMovie />
            <ListMovie />
        </div>
    );
}

export default HomePage;
