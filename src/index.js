import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import SerieFibonacci from './SerieFibonacci';

function clock() {
    const valorNumber = <SerieFibonacci />;
    const container = document.querySelector('#root');
    const root = createRoot(container);
    root.render(valorNumber);   
}

setInterval(clock, 2500);