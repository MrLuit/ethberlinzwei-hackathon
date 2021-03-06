import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';
import { connect } from '../../store/node';

const CheckConnection: FunctionComponent = ({ children }) => {
  const connection = useSelector((store: ApplicationState) => store.node.connection);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!connection) {
      dispatch(connect());
    }
    console.log('foo');
  });

  if (!connection) {
    return <p>Connecting...</p>;
  }

  return <>{children}</>;
};

export default CheckConnection;
