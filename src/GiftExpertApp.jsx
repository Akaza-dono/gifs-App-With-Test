import { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from '../src/components/GifGrid'



const Gifs = () => {

    const [categories, setCategories] = useState([])

    const AddCategories = (newCategorie) => {
        setCategories(oldCategories => [...oldCategories, newCategorie])
    }

    return (
        <>

            <h1>Gif Expert APP</h1>
            <AddCategory onNewCategory = { AddCategories }/>
            {categories.map(c => <GifGrid category={c} key={c}/>)}
        
        </>
    )
}

export default Gifs;