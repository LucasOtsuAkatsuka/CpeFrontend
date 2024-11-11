import styled from "styled-components";


export const CarouselWrapper = styled.div`
    width: 80%;
    height: 500px; 
    width: 800px;
    margin-top: 50px; 

    .carousel {
        height: 350px;
    }


    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 100%; 
    }
`;

export const StyledArrowButton = styled.button`
  background: none;
  border: none;
  color: yellow;
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;


  &.prev {
    left: 10px; 
  }

  &.next {
    right: 10px; 
  }
`;