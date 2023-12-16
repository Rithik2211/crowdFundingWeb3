import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
export { ChainID, ThirdWebProvider } from '@thirdweb-dev/react';
import App from './app';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <ThirdWebProvider desiredChainId={ChainID.Goerli}>
        <Router>
            <App/>
        </Router>
    </ThirdWebProvider>
)