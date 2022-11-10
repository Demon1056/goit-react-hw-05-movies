import { useState } from "react"
import { FindForm } from "components/Form/Form"
const Movies = () => {

    const [searchFilms, setSearchFilms] = useState([])

    return (<><h2>Find movies</h2>
        <FindForm /></>)

}
export default Movies