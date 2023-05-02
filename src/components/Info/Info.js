import React from "react";
import {
  InfoSection,
  BottomLine,
  Image,
  InfoWrapper,
  InfoNumber,
  InfoText,
  InfoDesc,
  InfoRow,
  InfoColumn,
  InfoHeading
} from './InfoStyles.js';
import { infoData } from '../../data/InfoData.js'; // importando data

function Info({ id }){

  const { headline, description, bottomLine } = infoData; // importando dados de infoData

  return <InfoSection id={id}>
    <InfoRow>
      <InfoColumn>
        <Image 
          src='./assets/pic2.jpg' alt=''
        />
      </InfoColumn>
      <InfoColumn>
        <InfoWrapper>
          <InfoHeading> { headline } </InfoHeading>
          <InfoDesc> { description } </InfoDesc>

          <BottomLine>
            {bottomLine.map((el, index) => (
              <InfoColumn key={index}>
                <InfoNumber> { el.dado1 } </InfoNumber>
                <InfoText> { el.dado2 } </InfoText>
              </InfoColumn>
            ))}
          </BottomLine>
        </InfoWrapper>
      </InfoColumn>
    </InfoRow>
  </InfoSection> 
   
}

export default Info;