import { useRef, useEffect, useState } from 'react';
import './App.css';

const paragraphStyles = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setShowReadMoreButton(ref.current.scrollHeight > ref.current.clientHeight);
    }
  }, [ref]);

  const toggleText = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      <p style={isOpen ? null : paragraphStyles} ref={ref}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      {showReadMoreButton && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button onClick={toggleText}>
            {isOpen ? 'Read less...' : 'Read more'};
          </button>
          
        </div>
      )}  
    </div>
  );
}
