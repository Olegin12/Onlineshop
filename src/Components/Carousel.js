import Carousel from 'react-bootstrap/cjs/Carousel';

function CarouselImg() {
    return (
        <Carousel variant="dark" class="mb-3" style={{margin: '1rem'}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/600x200"
                    alt="New collectiion"
                />
                <Carousel.Caption>
                    <h5>New collectiion</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/600x200"
                    alt="More collection"
                />
                <Carousel.Caption>
                    <h5>More collection</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/600x200"
                    alt="Another one coolection"
                />
                <Carousel.Caption>
                    <h5>Another one coolection</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselImg;