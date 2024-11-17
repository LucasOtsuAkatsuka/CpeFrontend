import React from 'react'
import { CarouselWrapper, StyledArrowButton } from './Styles'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carrossel() {
  const images = [
    {
        "id":"102",
        "author":"Ben Moore",
        "width":4320,
        "height":3240,
        "url":"https://unsplash.com/photos/pJILiyPdrXI",
        "download_url":"https://picsum.photos/id/102/4320/3240"
    },
    {
        "id":"103",
        "author":"Ilham Rahmansyah",
        "width":4320,
        "height":3240,
        "url":"https://unsplash.com/photos/DwTZwZYi9Ww",
        "download_url":"https://picsum.photos/id/103/2592/1936"
    },
    {
        "id":"112",
        "author":"Zugr",
        "width":4200,
        "height":3240,
        "url":"https://unsplash.com/photos/kmF_Aq8gkp0",
        "download_url":"https://picsum.photos/id/112/4200/2800"
    },
    {
        "id":"106",
        "author":"Arvee Marie",
        "width":4320,
        "height":3240,
        "url":"https://unsplash.com/photos/YnfGtpt2gf4",
        "download_url":"https://picsum.photos/id/106/2592/1728"
    },
    {
        "id":"107",
        "author":"Lukas Schweizer",
        "width":4320,
        "height":3240,
        "url":"https://unsplash.com/photos/9VWOr22LhVI",
        "download_url":"https://picsum.photos/id/107/5000/3333"
    },
  ]
  
  
    return (
        <CarouselWrapper>
            <Carousel
                 className='carousel'
                 infiniteLoop 
                 autoPlay 
                 showThumbs={false} 
                 showStatus={false} 
                 showIndicators={false} 
                 height='100%'
                 renderArrowPrev={(onClickHandler, hasPrev) =>
                     hasPrev && (
                     <StyledArrowButton onClick={onClickHandler} className="prev">
                         &#9664;
                     </StyledArrowButton>
                     )
                 }
                 renderArrowNext={(onClickHandler, hasNext) =>
                     hasNext && (
                     <StyledArrowButton onClick={onClickHandler} className="next">
                         &#9654;
                     </StyledArrowButton>
                     )
                 }>
                {
                    images.map(image => <img key={image.id} className='img-caroussel' src={image.download_url} alt={image.author}/>)
                }
            </Carousel>
        </CarouselWrapper>
        
  )
}