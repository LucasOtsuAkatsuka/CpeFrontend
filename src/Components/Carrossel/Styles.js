import styled from "styled-components";


export const CarouselWrapper = styled.div`
    width: 80%;
    width: 1000px;
    margin-top: 50px; 

    .carousel {
        height: 350px;

    }

    .img-caroussel{
      height: 600px;
      object-fit: contain;
    }
    

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 80%;
        .carousel {
          height: 100px;
          width: 300px;
        }

        .img-caroussel{
          height: 200px;
          object-fit: contain;
        }
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