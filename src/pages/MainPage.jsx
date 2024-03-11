import gif from '../assets/worm.gif'

import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="container d-flex flex-column align-items-center gap-5 ">
            <h1>Hoşgeldiniz!</h1>

            <img className='img-fluid rounded' src={'/book.gif'} />

            <p>
                <Link to={"/ürünler"}>Ürünler sayfasında</Link> yeni çıkan kitaplara ulaşabilirsiniz.
            </p>
        </div>
    );
};

export default MainPage;
