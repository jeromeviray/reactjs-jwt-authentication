import React, { Component } from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap';
import Product from '../../serviceAPI/ProductService'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

    }
    componentDidMount() {
        Product.getProduct().then(
            response => {
                console.log(response.data);
                this.setState({
                    products: response.data
                })
            }
        )
    }
    render() {
        const { products } = this.state;

        return (
            <>
                <Container fluid>
                    <Row >
                        {products.length === 0 ? <Col md="auto">No Data Available</Col> :
                            products.map((product) => (
                                product.image.length !== 0 ?
                                    <Col lg="3" md="4" sm="4" style={{ margin: "20px" }}>
                                        <Card style={{ width: '18rem', margin: "0 auto" }}>
                                            <Card.Img variant="top" src={"/images/" + product.image[0].fileName}
                                                style={{ width: "286px", height: "240px" }} />
                                            {/* {imageFile} */}
                                            <Card.Footer>
                                                <Card.Title>{product.name}</Card.Title>
                                                <Card.Text>Price: {product.price}</Card.Text>
                                            </Card.Footer>
                                        </Card>
                                    </Col> :
                                    <Col lg="3" md="4" sm="4" style={{ margin: "20px" }}>
                                        <Card style={{ width: '18rem', margin: "0 auto" }}>
                                            <Card.Img variant="top" src={null}
                                                style={{ width: "286px", height: "240px" }} />
                                            {/* {imageFile} */}
                                            <Card.Footer>
                                                <Card.Title>{product.name}</Card.Title>
                                                <Card.Text>Price: {product.price}</Card.Text>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                            ))
                        }

                    </Row>
                </Container>
            </>
        )
    }
}
