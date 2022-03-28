import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = {
    id: 1, 
    name: "", 
    image: "https://i.ibb.co/2FsfXqM/stranger-things.png", 
    season: 1, 
    number: 1, 
    summary: "", 
    runtime: 1

}


const testEpisodeWithoutImage = {

}

test("renders without error", () => { 
    render(<Episode episode ={testEpisode} /> )
});

test("renders the summary test passed as prop", () => { });

test("renders default image when image is not defined", () => { });
