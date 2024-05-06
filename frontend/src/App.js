// App.js

import React, { useState } from 'react';
import SignInOrSignUp from './components/SignInOrSignUp';
import Desktop29 from './Deskcomponents/Desktop29';

const App = () => {
  const [showDesktop29, setShowDesktop29] = useState(false);

  const handleContinueClick = () => {
    setShowDesktop29(true); // Update state variable to show Desktop29 component
  };

  return (
    <div className='flex justify-center items-center overflow-auto'>
      {showDesktop29 ? (
        <Desktop29 />
      ) : (
        <SignInOrSignUp onContinueClick={handleContinueClick} />
      )}
    </div>
  );
};

export default App;
