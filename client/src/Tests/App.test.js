import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import {waitForElement} from '@testing-library/dom';
import PlayersList from '../Components/PlayersList';
test('render app without crashing', () => {
    render(<App/>);
});

test('check if list is there', () => {
    const container = render(<App/>);
    container.getByTestId('List');
});

test('check if players name gets loaded', async () => {
    const container = render(<App/>);
    console.log(container);
    await container.findAllByText(/alex/i);
    await container.findByText('Name: Kadidiatou Diani');
});

