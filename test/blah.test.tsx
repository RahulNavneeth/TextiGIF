import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextiGIF } from '../src';

describe('it', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TextiGIF />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
