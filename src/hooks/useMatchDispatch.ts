import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

function useMatchDispatch() {
  const dispatch = useDispatch();

  const makeMatch = newMatchState => {
    // console.log('sdfsdfsdfsdf', newMatchState);
  };
  return {makeMatch};
}

export default useMatchDispatch;
