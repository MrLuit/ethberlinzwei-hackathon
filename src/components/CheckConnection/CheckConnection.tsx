import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector, useEffect } from 'react-redux';
import { ApplicationState } from '../../store/store';
import { connect } from '../../store/node';

const CheckConnection: FunctionComponent = ({ children }) => {
  // TODO: Uncomment when connection can be made
  const connection = useSelector((store: ApplicationState) => store.node.connection);
  const dispatch = useDispatch();

  if (!connection) {
    useEffect(() => {
      dispatch(connect());
    });

    return <p>Connecting...</p>;
  }

  return <>{children}</>;
};

export default CheckConnection;
