import { describe, it, vi } from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react';
import DeleteButtom from './DeleteButtom';


describe('Suite Test Delete buttom', () => {
  it('Should render and clicked', () => {
    const onClick = vi.fn()

    render(<DeleteButtom id="01" onClick={() => onClick('01')}/>)

    const button = screen.getByText(/Deletar/i)

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledWith('01')
  })    
})

/*

  
    const deleteButtom = screen.getByText('Deletar')
  
    expect(deleteButtom).toHaveBeenCalled()
 
*/


