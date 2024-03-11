import { Link, useLocation } from "react-router-dom"

const NotFound = () => {

    const { state } = useLocation()



    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div>
                <img
                    className="img-fluid rounded"
                    src="https://i.gifer.com/PCt.gif"
                    alt="Not Found"
                />

                <p className="d-flex justify-content-center text-bg-dark">Üzgünüz, aradığınız sayfa bulunamadı.</p>

                <div className="d-flex justify-content-center">
                    <Link className="bg-primary text-white p-2 rounded" to={'/'}>Anasayfa</Link>
                </div>


                {state &&
                    <p className="fs-3 text-center my-4">
                        Hata kodunuz
                        <span className="badge bg-warning mx-4">{state}</span>
                    </p>}
            </div>
        </div>
    );
}

export default NotFound;