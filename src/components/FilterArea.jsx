import { useSearchParams } from "react-router-dom"



const FilterArea = () => {
    //useParams url deki arama parametrelerinin yönetmemizi sağlar.
    // geriye dizi içerisinde ik eleman döndürür
    //1-url deki arama parametreleri
    //2-bunları değiştirmeye yarayan method
    const [searchParams, setSearchParams] = useSearchParams()


    const handleChange = (e) => {
        //eklenecek parametreyi belirle
        searchParams.set('sırala', e.target.value)
        //url güncelle
        setSearchParams(searchParams)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        //eklenecek parametreyi belirle
        searchParams.set('aramaTerimi', e.target[0].value)
        //url yi güncelle
        setSearchParams(searchParams)

    }

    return (
        <div className="mt-4 d-flex justify-content-between align-items-center">
            <div className="gap-3 d-flex align-items-center">
                <label>Sırala</label>
                <select onChange={handleChange} className="form-select">
                    <option>a-z</option>
                    <option>z-a</option>
                </select>
            </div>



            <form onSubmit={handleSubmit} className="d-flex gap-2">
                <input placeholder="kitap ismi giriniz.." className="form-control" type="text" />
                <button className="btn btn-primary">Ara</button>
            </form>
        </div>
    )
}

export default FilterArea
