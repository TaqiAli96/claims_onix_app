import React, { Suspense } from 'react';
import Loader from '../Loader';

const WrapperContainer = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  );
};

export default WrapperContainer;