import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter', () => {

    it('should render the initial count', () => {
        const { getByText } = render (<Counter/>)
        expect(getByText('0')).toBeInTheDocument()
    })
    it('should increment count when + button is clicked', () => {
        const { getByText } = render (<Counter/>)
        fireEvent.click(getByText('+'))
        expect(getByText('1')).toBeInTheDocument()
    })
    it('should decrement count when - button is clicked', () => {
        const { getByText } = render (<Counter/>)
        fireEvent.click(getByText('-'))
        expect(getByText('-1')).toBeInTheDocument()
    })

})

