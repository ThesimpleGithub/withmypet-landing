import React, { useEffect, useRef } from 'react';
const PlayGame = () => {
  const fullScreen = useRef(null);
  useEffect(() => {
    const unityInstance = UnityLoader.instantiate(
      'unityContainer',
      'unity/webglTest.json',
      { onProgress: UnityProgress },
    );
    fullScreen.current.onclick = () => unityInstance.SetFullscreen(1);

    return () => {
      unityInstance.Quit(function () {
        console.log('done!');
      });
      unityInstance = null;
    };
  }, []);
  return (
    <>
      <div className="webgl-content">
        <div
          id="unityContainer"
          style={{ width: '960px', height: '600px' }}
        ></div>
        <div className="footer">
          <div className="webgl-logo"></div>
          <div ref={fullScreen} className="fullscreen"></div>
          <div className="title">Memorial Park</div>
        </div>
      </div>
    </>
  );
};

export default PlayGame;
