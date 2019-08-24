import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import makeBlockie from 'ethereum-blockies-base64';

interface Props {
  address: string;
}

const StyledBlockie = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const Placeholder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const Blockie: FunctionComponent<Props> = ({ address }) => {
  const [blockie, setBlockie] = useState<string>();

  useEffect(() => {
    setBlockie(makeBlockie(address));
  }, [address]);

  if (blockie) {
    return <StyledBlockie src={blockie} />;
  }

  return <Placeholder />;
};

export default Blockie;
