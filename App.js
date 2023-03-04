import React from 'react';
import './index.css';
import Art from './Components/Art';
import ArtData from './Components/ArtData';

const App = () => {
  return (
    <>
      <h1>About AI Art</h1>
      <div className='container'>
        {ArtData.map((values) => {
          return (
            <>
              <Art
                title={values.title}
                imgsrc={values.imgsrc}
                desc={values.desc}
                btn={values.btn}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
