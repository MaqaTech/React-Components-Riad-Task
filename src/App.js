import './App.css';
import React from 'react';
import ImageRiad from './components/image';
import Text from './components/text';
import Button from './components/button';
import Icons from './components/icons';

function App() {
  return (
    
    <div className='app' >

           <div className='text_box' >
  
  <div>
    <Text />
    <Button />
  </div>




  <div className='icons' >
     <Icons />
  </div>


</div>








     <div className='img_box' >


     <ImageRiad />


     
    </div>





    </div>
    
  );
}

export default App;
