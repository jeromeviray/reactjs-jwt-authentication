import React, { Component } from 'react';
import { Card, Container, Table, Carousel, Button } from 'react-bootstrap';
import ModalProduct from "./ModalProduct";
import SellerProduct from "../../serviceAPI/SellerProductService";

export default class Product extends Component {
    state = {
        products: [],
        showModal: false,
        action: ''
    }

    constructor(props) {
        super(props);
        // this.showModalProduct = this.showModalProduct.bind(this);
    }

    componentDidMount() {

        // SellerProduct.getSellerProduct().then(
        //     response => (
        //         this.setState({
        //             products: response.data
        //         })
        //     )

        // )
        const data = [{
            name: "product",
            description: "product",
            price: 123,
            stock: 123,
            image: [{
                id: 1,
                fileName: 'iphone-4.jpeg',
                size: 123
            }]
        }]
        this.setState({
            products: data
        })
    }

    showModalProduct = (showModal, action, product = null) => {
        this.setState({
            showModal: showModal,
            action: action,
            product: product
        })
    }

    renderProductModal() {
        const { product, action, showModal } = this.state;

        return (
            <ModalProduct key={showModal} product={product} action={action} showModal={showModal} onClose={() => { this.showModalProduct(false, '') }} deleteCallback={this.deletProduct} />
        )
    }
    render() {
        const style = {
            "width": "30%",
            "text-align": "center"
        };
        const {
            products
        } = this.state;
        return (
            <div>
                { this.renderProductModal()}
                < Container >
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header >Products</Card.Header>
                        <Card.Body>
                            <Table boredered hover striped variant="dark">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>stock</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="6"> No Product Available</td>
                                        </tr> :
                                        products.map((product) => (

                                            <tr key={product.id}>
                                                <td style={style}>
                                                    {product.image.length === 1 ? <img
                                                        src={"/images/" + product.image.map((image) => image.fileName)} alt="product"
                                                        className="rounded" style={{ width: "171px", height: "180px" }}
                                                    /> :
                                                        <Carousel interval={null} indicators={false}>
                                                            {product.image.map((imageName) => (

                                                                // const image = "/images/"+imageName.fileName;
                                                                <Carousel.Item key={imageName.id}>
                                                                    <img
                                                                        src={"/images/" + imageName.fileName} alt="product"
                                                                        className="rounded" style={{ width: "171px", height: "180px" }}
                                                                    />
                                                                </Carousel.Item>)
                                                            )
                                                            }
                                                        </Carousel>
                                                    }

                                                </td>
                                                <td>{product.name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.price}</td>
                                                <td>{product.stock}</td>
                                                <td><Button variant="primary" onClick={() => { this.showModalProduct(true, 'edit', product) }}>edit</Button></td>

                                            </tr>

                                        ))

                                    }
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Footer style={{ "textAlign": "right" }}>
                            <Button onClick={() => { this.showModalProduct(true, "add") }}>Add Product</Button>
                        </Card.Footer>
                    </Card>
                </Container >
            </div>
        );
    }

    deletProduct() {

    }


}