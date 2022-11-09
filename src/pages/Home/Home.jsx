
import { useEffect, useState } from "react";

const Home = ({ getTrendingFilms }) => {
    const [trendingFilms, setTrendingFilms] = useState([])

    useEffect(() => {
        const a = getTrendingFilms()
        setTrendingFilms(a)

    }, [getTrendingFilms])
    console.log(trendingFilms);
    return (<ul>
        <li>gggfff</li>
    </ul>)
}
export default Home