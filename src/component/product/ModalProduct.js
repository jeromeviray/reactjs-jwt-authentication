import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Container, Card } from "react-bootstrap";
import SellerProductService from "../../serviceAPI/SellerProductService";



export default class ModalProduct extends Component {
    state = {
        product: this.initialState,
        showModal: false
    }
    constructor(props) {
        super(props);

        this.input = React.createRef()
        this.handleClose = this.handleClose.bind(this);
        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.submitProduct = this.submitProduct.bind(this);
        this.onResetValue = this.onResetValue.bind(this);

        if (props.action === 'edit') {
            this.state.product = props.product;

        }
        this.state.showModal = props.showModal;
    }
    initialState = {
        name: '',
        description: '',
        price: '',
        stock: '',
        file: [],
        imagePreviewUrl: []

    }
    handleClose() {
        if (this.props.onClose) {
            // const value = this.props.onClose();
            // console.log(value);
            this.props.onClose();
        }

    }

    onChangeProduct(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    onImageChange = (event) => {

        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];

        this.setState({
            files: event.target.files
        })

        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        }
        if (file) {
            reader.readAsDataURL(file)
        } else {
            console.log("ERROR");
        }

    }
    onResetValue = () => {
        this.setState(() => this.initialState)
    }

    submitProduct(event) {
        event.preventDefault();

        const {
            files,
            name,
            description,
            price,
            stock
        } = this.state;


        let imageData = new FormData();

        for (let i = 0; i < files.length; i++) {
            imageData.append('files[]', files[i]);
        }
        imageData.append('name', name);
        imageData.append('description', description);
        imageData.append('price', price);
        imageData.append('stock', stock);

        SellerProductService.createProduct(imageData);
        this.onResetValue();
    }

    render() {
        const {
            name,
            description,
            price,
            stock,
            imagePreviewUrl,
            file,
            showModal
        } = this.state;

        console.log(this.state.product);
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<Card.Img variant="top" src={imagePreviewUrl} style={{ height: '200px' }} />);
        } else {
            $imagePreview = (<Card.Text>No file selected</Card.Text>);
        }
        return (
            <>
                <Modal show={showModal} onHide={this.handleClose} size="lg" backdrop="static" animation>
                    <Modal.Header>
                        <Modal.Title >Add Product</Modal.Title>
                    </Modal.Header>
                    <Form id="productFormID" onReset={this.onResetValue} onSubmit={this.submitProduct}>
                        <Modal.Body>
                            <Row>
                                <Col lg="4">
                                    <Card style={{ margin: "0 auto" }}>
                                        <Card.Body>
                                            {$imagePreview}
                                        </Card.Body>
                                        <Card.Footer >
                                            <Form.Group style={{ margin: "0", textAlign: "center" }}>
                                                <Form.Label for="formFileID" class="input-label"
                                                    style={{
                                                        backgroundColor: "#009688",
                                                        color: "#fff",
                                                        padding: "10px", width: "100%"
                                                    }}>
                                                    <i class="fas fa-file-upload"></i>
                                                    <span id="span-label"></span>Select File
                              </Form.Label>
                                                <Form.File id="formFileID"
                                                    name="file"
                                                    multiple="true"
                                                    accept="image/*"
                                                    style={{ display: "none" }}
                                                    onChange={this.onImageChange}
                                                    value={file}
                                                />
                                            </Form.Group>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col lg="8">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formNameId">
                                                    <Form.Label>Product Name</Form.Label>
                                                    <Form.Control type="text"
                                                        name="name"
                                                        placeholder="Enter Name"
                                                        onChange={this.onChangeProduct}
                                                        value={name}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formDescriptionId">
                                                    <Form.Label>Product Description</Form.Label>
                                                    {/* <Form.Control type="email" placeholder="Product Description" /> */}
                                                    <Form.Control as="textarea"
                                                        name="description"
                                                        onChange={this.onChangeProduct}
                                                        value={description}
                                                        arial-label="with textarea"
                                                        placeholder="Enter Description" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formPriceId">
                                                    <Form.Label>Product Price</Form.Label>
                                                    <Form.Control type="text"
                                                        name="price"
                                                        onChange={this.onChangeProduct}
                                                        value={price}
                                                        placeholder="Enter Price" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formStockId">
                                                    <Form.Label>Product Stock</Form.Label>
                                                    <Form.Control type="text"
                                                        name="stock"
                                                        onChange={this.onChangeProduct}
                                                        value={stock}
                                                        placeholder="Enter Stock" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" type="button" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }

}
