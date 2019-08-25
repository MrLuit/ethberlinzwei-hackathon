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

  let profile = null;

  try {
    profile = await getProfile(addresses[0]);
  } catch (e) {
    return null;
  }

  profile.imageUrl = `https://ipfs.infura.io/ipfs/${
    profile.image[0].contentUrl["/"]
    }`;
  //profile.image = <img src={profile.imageUrl} alt="profile"></img>

  //profile.name and profile.imageUrl
  return profile;
};

const getProfileImage = async () => {
  const profileData = await getProfileData();
  if (profileData) return profileData.imageUrl;
  return null;
}

const BoxImage: FunctionComponent<Props> = ({ address }) => {
  const [boxImage, setBoxImage] = useState<string>();

  return <Placeholder />;
  useEffect(async () => {
    setBoxImage(await getProfileImage());
  }, [address]);

  if (boxImage) {
    return <StyledBlockie src={boxImage} />;
  }

};

export default BoxImage;




