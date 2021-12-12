import { Form, Image, Card,ListGroup,  Table, InputGroup, Button, Col, Container, Modal,Row } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import API from '../API';
import { useState, useEffect } from 'react'
import "./FarmerProducts.css";
import ProductNew from "./ProductNew"

function FarmerProducts(props) {
    console.log("tempo"+props.timeMachine().toString());
    const [products, setProducts] = useState([]);
    const [updateProducts, setUpdateProducts] = useState(true);
    const [updated, setUpdated] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [productsByFarmer, setProductsByFarmer] = useState(false);
    const [addProdShow, setAddProdShow] = useState(false);
    const [ProductsByFarmerUpdate, setProductsByFarmerUpdate] =  useState(true);
    const [isAllowedAddProduct, setIsAllowedAddProduct] = useState(false)
    var dayjs = require('dayjs');

useEffect(() => {

    const currentDay = dayjs(props.timeMachine().toString())
    const day = currentDay.day()
    
    if (day === 6 || day === 0){
        setIsAllowedAddProduct(false);
    }
    else{
        setIsAllowedAddProduct(true)
    }

    console.log('dsafasgfhsaklfsafsaf')


},[])

    
    async function addProdTest(prod){

        try{
        let result = await API.addProduct(prod, props.timeMachine().toString());
        setProductsByFarmerUpdate(true);
        setSelectedProduct([]);
        }
        catch (err) {
            console.log(err);
            //TODO Error message
        }
    }


    async function deleteProductByFarmer(PbFid){
      try{
        let result = await API.deleteProduct({ productByFarmerID : PbFid })
        setProductsByFarmerUpdate(true);
        setSelectedProduct([]);

        }
        catch (err) {
          console.log(err);
          //TODO Error message
        }
    }

    useEffect(() => {
      if(updateProducts){
        API.getAllProducts()
            .then(p => {
                // filter the products that are already present in ProductByFarmer table
                setProducts(p); 
                setUpdated(true);
                setUpdateProducts(false);
            }).catch(f => console.log(f));
          }
    }
        , [props.timeMachine, updateProducts]);

    useEffect(() => {
        if (ProductsByFarmerUpdate) {
        API.getProductsByFarmer(props.timeMachine().toString())
            .then(p => {
                setProductsByFarmer(p);
                setProductsByFarmerUpdate(false);
            }).catch(f => {
              setProductsByFarmer([]);
                setProductsByFarmerUpdate(false);
                console.log(f)
            });
    }
}
        , [ProductsByFarmerUpdate]);


  if (updated && props.user.Role==="Farmer") return (
    <Container className="search-container"  >

          <ProductsDropdown isAllowedAddProduct = {isAllowedAddProduct} products={productsByFarmer.length > 0 ? products.filter(pp => !productsByFarmer.some(pbf => pbf.ProductID === pp.ProductID)) : products} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} />
          <Button className="search-button" disabled={selectedProduct.length > 0 ? false : true} onClick={() => setAddProdShow(true)}>Add product</Button>
          <ProductNew isAllowedAddProduct={isAllowedAddProduct} UpdateProdList={() => setUpdateProducts(true)}/>
          <Table className="d-flex justify-content-center">
          <tbody id="prod-table" align="center">
            {productsByFarmer !== false ? productsByFarmer.map(p => 
              <ProductCard key={p.ProdByFarmerID} p={p} deleteProductByFarmer={deleteProductByFarmer} addProdTest={addProdTest} />
           ) : ""}
            </tbody>
          </Table>
        <ProductByFarmerModal Edit={false} addProdTest={addProdTest} p={selectedProduct.length > 0 ? selectedProduct[0] : null} show={addProdShow} onHide={() => setAddProdShow(false)} />

    </Container >)
    else return "";

}


function ProductCard(props) {
  const [show, setShow] = useState(false);
  const [showPic, setShowPic] = useState(false);

  let newSrc = "http://localhost:3001/images/" + props.p.ImageID + ".png"


//TODO: see if we can make the image responsive using className="img-fluid"

  return (
      <>
      <ProductByFarmerModal Edit={true} addProdTest={props.addProdTest} p={props.p} show={show} onHide={() => setShow(false)} />
      <PictureModal src={newSrc} show={showPic} onHide={()=> setShowPic(false)} />
      <Card className="client-card mt-3">

          <Card.Body>
              <Row>
                  <Col md={4}>
                  <Image className="img-fluid" onClick={()=> setShowPic(true)} src={newSrc} height={"80 px"} rounded />
                  </Col>
                  <Col md={8}>
                      <Card.Title style={{ fontSize: 28 }}> {props.p.NameProduct}</Card.Title>
                  </Col>
              </Row>
          </Card.Body>


          <Card.Body>
              <ListGroup style={{ textAlign: "left" }}>
                  <ListGroup.Item> Quantity: {props.p.Quantity}</ListGroup.Item>
                  <ListGroup.Item> Unit: {props.p.UnitOfMeasurement}</ListGroup.Item>
                  <ListGroup.Item> Price: {props.p.Price}</ListGroup.Item>
              </ListGroup>
          </Card.Body>

          <Card.Body className="sfondo-footer" style={{ textAlign: "right" }}>
          <Button style={{ "marginRight" : "0.3rem"}}  variant="outline-dark" size="sm" onClick={() => setShow(true)}>Edit</Button>
          <Button variant="danger" size="sm" onClick={() => props.deleteProductByFarmer(props.p.ProdByFarmerID)}>Delete</Button>
          </Card.Body>
      </Card>
      </>
  );
}

  function ProductByFarmerModal(props){
    

    const [price, setPrice] = useState(props.Edit ? props.p.Price : "" );
    const [quantity, setQuantity] = useState(props.Edit ? props.p.Quantity : "" );
    const [unit, setUnit] = useState(props.Edit ? props.p.UnitOfMeasurement : "" );

    function AddProduct(){
        let prod = {
            productByFarmerID : props.Edit ? props.p.ProdByFarmerID : false,
            UnitOfMeasurement : unit,
            Quantity : parseInt(quantity),
            Price : parseFloat(price),
            ProductID : props.p.ProductID
        }

        props.addProdTest(prod);
        props.onHide();
        if(!props.Edit){
          setPrice("");
          setQuantity("");
          setUnit("");  
        }

    }




    //TODO VALIDATION
    if(!props.p && !props.Edit)
    return ""
    else
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.p.Name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

           <Form onSubmit={(event) => event.preventDefault()}>
                    <Form.Label>Enter the price in the 0.00 format</Form.Label>
                    <InputGroup>
                    <InputGroup.Text>€</InputGroup.Text>
                    <Form.Control value={price}  onChange={(event) => { setPrice(event.target.value) }}  /><br />
                    </InputGroup>

                    <Form.Label>Enter the quantity</Form.Label>
                    <Form.Control value={quantity}  onChange={(event) => { setQuantity(event.target.value) }}  /><br />
                    <Form.Label>Enter the unit of measurement</Form.Label>
                    <Form.Control value={unit}  onChange={(event) => { setUnit(event.target.value) }} /><br />

          </Form>

        </Modal.Body>
        <Button onClick={AddProduct} variant="success">{props.Edit ? "Add the product" : "Edit the product"}</Button>

      </Modal>
    );



  }
  

function PictureModal(props){
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
            <Image className="img-fluid" src={props.src} />
      </Modal.Body>

    </Modal>
  );




}

function ProductsDropdown(props) {




    const filterByFields = ['Name'];
    return (
        <>
            <Form.Group>
                <Typeahead
                    disabled = {props.isAllowedAddProduct ? false :true}
                    filterBy={filterByFields}
                    id="basic-typeahead-single"
                    labelKey={(option) => `${option.Name}`}
                    onChange={props.setSelectedProduct}
                    options={props.products}
                    placeholder="🍳 Choose a product..."
                    selected={props.selectedProduct}
                    renderMenuItemChildren={(option) => (
                        <div>
                            {option.Name}
                            <div>
                                <small>{option.Description} </small>
                            </div>
                        </div>
                    )}
                />
            </Form.Group>

        </>


    );
};

export default FarmerProducts;
