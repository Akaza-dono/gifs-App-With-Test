import { GifGridItem } from "./GifGridItem.jsx";
import { useFetchGifs } from "../hooks/usefetchGifs.js";
import PropTypes from 'prop-types';

export const GifGrid =  ({category}) => { 
    const {images, isLoading} = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading 
                    ? (<h3>Cargando...</h3>) 
                    : null
            }
            <div className="card-grid">
                {
                    images.map( ({id,title,url}) => <GifGridItem key={id} title={title} url={url}/> )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}