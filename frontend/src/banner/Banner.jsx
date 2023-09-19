import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Banner = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 bg-gradient-to-t from-gray-100 to-transparent h-32 w-full z-10" />
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img
                src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
                alt=""
              />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/81KKrQWEHIL._SX3000_.jpg" />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" />
            </div>
          </Carousel>
        </div>
      
    </>
  );
}

export default Banner