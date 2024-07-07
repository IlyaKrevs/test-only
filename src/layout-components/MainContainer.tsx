import React from 'react'
import styled from 'styled-components'
import color from '../const/colors'
import mediaQuery from '../const/mediaQuery'

const StyledContainer = styled.div`
height: 100vh;
padding-left: calc(50% - 960px);
padding-right: calc(50% - 960px);

 .workContainer {
    margin-left: 320px;
    margin-right: 160px;
      
    position: relative;
      
    /* height: 100%; */
    height: 1080px;

    padding: 170px 80px 104px;

    display: flex;
    flex-direction: column;
  }

  @media (width < ${mediaQuery.width.mobile}) {
    padding-left: calc(50% - 160px);
    padding-right: calc(50% - 160px);

    .workContainer {
      margin:0;
      padding: 59px 27px 13px 20px;
      height: 568px;
    }
  }
`



const Borders = styled.div`
  z-index: -2;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  border: 1px solid ${color.borders};

  .verticalLine {
  position: absolute;
  height:100%;
  border-left: 1px solid ${color.borders};
  left: 50%;
  }
  .horizontalLine {
  position: absolute;
  top: 45%;
  width: 100%;
  border-top: 1px solid ${color.borders};
  }

  @media (width < ${mediaQuery.width.mobile}) {
    display:none;
  }
`

interface IProps {
  children?: React.ReactNode
}

export const MainContainer: React.FC<IProps> = ({ children }) => {
  return (
    <StyledContainer>
      <div className="workContainer">
        <Borders>
          <div className="verticalLine"></div>
          <div className="horizontalLine"></div>
        </Borders>
        {children}
      </div>
    </StyledContainer>
  )
}
