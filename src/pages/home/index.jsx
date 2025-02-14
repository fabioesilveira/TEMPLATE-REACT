import { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import './home.css'
import { getAllApi } from '../../services/fetchApi';
import { beers, sodas } from '../../utils/mocks/data';
import ListItems from '../../components/listItems';

function Home() {
    const [test, setTest] = useState("")

    // useEffect(() => {
    //     async function load() {
    //         const result = await getAllApi()
    //         setTest(result)
    //     }

    //     load();
    // }, [])

    return (
        <div>
            <Header />
            <h1>Pagina Home</h1>
            <ListItems items={sodas} />
            <ListItems items={beers} />

            <Footer />
        </div>
    )
}

export default Home;