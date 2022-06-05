import React from 'react'
import Main from '~/root/Main';
import TheImage from '~/components/TheImage';
import FloatContainer from '~/components/Float/FloatContainer';
import  { FloatContainerProvider } from '~/contexts/FloatContext';


export const App = () => {
  return (
      <FloatContainerProvider>
        <Main />
        <FloatContainer >
          <TheImage />
        </FloatContainer>
      </FloatContainerProvider>
  );
};
