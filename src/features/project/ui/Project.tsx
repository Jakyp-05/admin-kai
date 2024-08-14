import React, { useState, useEffect } from 'react';
import { ProjectContainer } from './styles';

const Project: React.FC = () => {
  const [popup, setPopup] = useState<boolean>(true);

  const handlePopup = () => {
    setPopup(true);
  };
  return (
    <ProjectContainer>
      
    </ProjectContainer>
  )
}

export default Project
