import CosmoJakarta from '../pages/Detail/CosmoJakarta';
import GrandeBekasi from '../pages/Detail/GrandeBekasi';
import HotelBandung from '../pages/Detail/HotelBandung';
import LittleJakarta from '../pages/Detail/LittleJakarta';
import RoyalBogor from '../pages/Detail/RoyalBogor';
import SuiteBali from '../pages/Detail/SuiteBali';
// import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home/Home';
import Terms from '../pages/Terms/Terms';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    // {
    //     path: '/hotels/:slug',
    //     component: Detail,
    //     exact: true
    // },
    {
        path: '/hotels/amaroossa-cosmo-jakarta',
        component: CosmoJakarta,
        exact: true
    },
    {
        path: '/hotels/amaroossa-little-jakarta',
        component: LittleJakarta,
        exact: true
    },
    {
        path: '/hotels/amaroossa-grande-bekasi',
        component: GrandeBekasi,
        exact: true
    },
    {
        path: '/hotels/amaroossa-royal-bogor',
        component: RoyalBogor,
        exact: true
    },
    {
        path: '/hotels/amaroossa-hotel-bandung',
        component: HotelBandung,
        exact: true
    },
    {
        path: '/hotels/amaroossa-suite-bali',
        component: SuiteBali,
        exact: true
    },
    {
        path: '/terms',
        component: Terms
    }
];

export default routes;
