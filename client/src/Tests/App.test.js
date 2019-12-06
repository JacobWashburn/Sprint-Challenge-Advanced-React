import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

test('all components render without crashing', () => {
    render(<App/>);
});

test('check if list is there', () => {
    const container = render(<App/>);
    container.getByTestId('List');
});
