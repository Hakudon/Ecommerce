import React from 'react';
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import Rating from '../components/Rating';
import products from '../products';

function ProductScreen({match}) {
    const params = useParams(); // Access route parameters
    const product = products.find((p) => p._id === params.id); // Access the id param

    if (!product) {
        return <div>Product not found</div>;
    }
    
    return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
      Go Back</Link>
      <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h3>{product.name} </h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#FFA701'} />
                </ListGroupItem>
                <ListGroupItem>
                    Price: ${product.price}
                </ListGroupItem>
                <ListGroupItem>
                    Description: {product.description}
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                                {product.countInStock > 0
                                ? 'In Stock'
                                : 'Out of Stock'
                            }
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-center">
                        <Button className='btn-block' type='button' disabled={product.countInStock == 0}>
                            Add to Cart
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
