import { fireEvent, render, screen, waitFor} from "@testing-library/react"
import Gifs from "../src/GiftExpertApp"

describe('pruebas en GiftExpertApp', ()=>{

    test('GiftExpertApp',async()=>{
        render(<Gifs/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain('Gif Expert APP');
        expect(screen.getByRole('textbox').value).toBe('')
        fireEvent.input(screen.getByRole('textbox'),{target:{value:'saitama'}})
        expect(screen.getByRole('textbox').value).toBe('saitama')
        fireEvent.submit(screen.getByRole('form'))
        
        expect(screen.getByText('Cargando...')).toBeTruthy()
        await (()=>{
            screen.debug();
            console.log(screen.getAllByRole('img'))
            expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(11)
            
        });
        
    })

})