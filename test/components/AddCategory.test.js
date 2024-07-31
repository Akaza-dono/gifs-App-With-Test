import  {AddCategory}  from "../../src/components/AddCategory";
import { render, screen, fireEvent } from "@testing-library/react";
  
describe('pruebas en AddCategory', () => {
    function add(){}
    test('debe de cambiar el texto en el input', () => {


        render(<AddCategory onNewCategory={add}/>); 

        const input = screen.getByRole('textbox')

        fireEvent.input(input,{target:{value:'saitama'}})

        expect(input.value).toBe('saitama')
    });

    test('debe de llamar onNewCategory si el input tiene un valor',()=>{
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>); 

        const input = screen.getByRole('textbox')
        const from = screen.getByRole('form')

        fireEvent.input(input, {target: {value:inputValue}});
        expect(input.value).toBe(inputValue);

        fireEvent.submit(from);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('onNewCategory no debe de ser llamada si el valor del input es 0',()=>{
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>); 
        const input = screen.getByRole('textbox')
        const from = screen.getByRole('form')

        expect(input.value).toBe('');

        fireEvent.submit(from);
        expect(onNewCategory).toHaveBeenCalledTimes(0)

    });

});