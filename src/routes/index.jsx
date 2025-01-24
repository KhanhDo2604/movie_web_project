import HomePage from '../pages/Home';
import DiscoverPage from '../pages/Discover';
import MovieReleasePage from '../pages/Release';
import AboutPage from '../pages/About';
import ForumPage from '../pages/Forum';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/discover', component: DiscoverPage },
    { path: '/movie-release', component: MovieReleasePage },
    { path: '/about', component: AboutPage },
    { path: '/forum', component: ForumPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
