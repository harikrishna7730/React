import Carousel from 'react-bootstrap/Carousel';
const imgg={
   width:"100%",
   height:"620px"
}


function Carousels() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2021/12/13/19/10/nature-6868923_1280.jpg"
          alt="First slide"
          style={imgg}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2019/12/16/16/42/hill-station-4699704_960_720.jpg"
          alt="Second slide"
          style={imgg}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eskipaper.com/images/landscape-wallpaper-hd-32.jpg"
          alt="Third slide"
          style={imgg}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;