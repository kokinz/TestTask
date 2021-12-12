import React from 'react';

function LoadingScreen() {
  return (
    <div className={'loading-screen'} style={{backgroundColor: '#fffee1', width: '100vw', height: '100vh'}}>
      <div className={'ring'}>Loading<span className={'point'}></span></div>
    </div>
  );
}

export default LoadingScreen;
