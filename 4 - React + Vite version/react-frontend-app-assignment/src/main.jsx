import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/all">All Fighters</a></li>
    </>
  )
  
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);