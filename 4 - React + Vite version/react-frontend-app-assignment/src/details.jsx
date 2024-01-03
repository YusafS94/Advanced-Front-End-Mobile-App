import { createRoot } from 'react-dom/client';

function Details() {
    ...
}

const domNode = document.createElement('div');
const root = createRoot(domNode);
root.render(<Details />);
document.body.appendChild(domNode)