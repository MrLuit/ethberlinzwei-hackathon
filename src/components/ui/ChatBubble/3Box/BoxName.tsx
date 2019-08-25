import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProfile } from "3box/lib/api";

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

const getProfileData = async () => {
  const addresses = await window.ethereum.enable();

  if (!addresses[0]) return null;

  const profile = await getProfile(addresses[0]);

  return profile;
};

const getProfileName = async () => {
  const profileData = await getProfileData();
  return profileData.name;
}

const BoxName: FunctionComponent<Props> = ({ address }) => {
  const [boxName, setBoxName] = useState<string>();

  useEffect(async () => {
    setBoxName(await getProfileName());
  }, [address]);

  if (boxName) {
    return <StyledBlockie src={boxName} />;
  }

  return <Placeholder />;
};

export default BoxName;




