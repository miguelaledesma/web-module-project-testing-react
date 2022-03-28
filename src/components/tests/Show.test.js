import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const testShow = {
    name: 'test show', 
    summary: 'test summary', 
    season: [{
        id: 0, 
        name: 'Season 1', 
        episode: []
    }, {
        id: 1, 
        name: 'Season 2', 
        episode: []
    }]
}

test('renders without errors', () => { });

test('renders Loading component when prop show is null', () => { });

test('renders same number of options seasons are passed in', () => { });

test('handleSelect is called when an season is selected', () => { });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });
