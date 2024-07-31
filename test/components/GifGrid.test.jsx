import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/usefetchGifs";

jest.mock("../../src/hooks/usefetchGifs");

describe('pruebas en GifGrid',()=>{
    
    const category = 'saitama';

    test('debe de mostrar el loading inicialmente',()=>{

        useFetchGifs.mockReturnValue({
            isLoading: true, 
            images: []
        })

        render(<GifGrid category={category}/>);  
        screen.debug()
        expect(screen.getByText('Cargando...')).toBeTruthy();
    });

    test('debe de mostrar imagenes cuando se carga el hook',()=>{

        const gifs = [
            {
                id:1,
                title: category,
                url: 'saitama.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            isLoading: true, 
            images: gifs
        })

        render(<GifGrid category={category}/>);  
        screen.debug()
        expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(1)


    });

})