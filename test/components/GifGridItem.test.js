import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('pruebas en GifGridItem',()=>{

    const title = 'goku'
    const url = 'https://media1.giphy.com/media/hs67xo8fGYfx5KlBgV/giphy.gif?cid=5ab5ee72dnc4lw90y5gk9x79jsfz0i2x9d64k3tjydq1y27q&ep=v1_gifs_search&rid=giphy.gif&ct=g'

    test('GifGridItem debe de hacer match con el snapshots',()=>{
        const {container} = render(<GifGridItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con su alt',()=>{
        render(<GifGridItem title={title} url={url}/>);
        expect(screen.getByRole('img').src).toBe(url) 
    });

    test('debe de mostrar el titulo en el componente',()=>{
        render(<GifGridItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy()
    })

})