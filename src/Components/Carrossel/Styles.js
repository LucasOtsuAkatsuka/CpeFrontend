import styled from "styled-components";


export const CarouselWrapper = styled.div`
    width: 70%;
    margin-top: 50px; 

    .carousel {
        height: 350px;

    }

    .img-caroussel{
      height: 80%;
      object-fit: contain;
    }
    
    @media (max-width: 1200px) {
      width: 80%;
        .carousel {
          height: 350px;
          width: 100%;
        }

        .img-caroussel{
          height: 70%;
          object-fit: contain;
        }
    }

    @media (max-width: 768px) {
      width: 80%;
        .carousel {
          height: 200px;
          width: 100%;
        }

        .img-caroussel{
          height: 60%;
          object-fit: contain;
        }
    }

    @media (max-width: 480px) {
        width: 95%;
        .carousel {
          height: 150px;
          width: 100%;
        }

        .img-caroussel{
          height: 60%;
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