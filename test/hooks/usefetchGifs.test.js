import { renderHook, waitFor } from '@testing-library/react'
import {useFetchGifs} from '../../src/hooks/usefetchGifs'

describe('pruebas en usefetchGifs',()=>{
    test('debe de mostrar el estado inicial del hook usefetchGifs',()=>{
        
        const {result} = renderHook(()=>useFetchGifs('saitama'));
        const {images, isLoading} =  result.current; 
        expect(images).toEqual([]);
        expect(isLoading).toBeTruthy();

    })

    test('debe de retornar un arreglo de imagenes y el isLoading en false',async () =>{
        
        const {result} = renderHook(()=>useFetchGifs('saitama'));
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        )
        const {images, isLoading} =  result.current; 

        expect(images.length).toBeGreaterThanOrEqual(1);
        expect(isLoading).toBeFalsy();

    });


})