import Axios from "axios";
// import AuthHeader from '../../../service/AuthHeader';

const API_URL = "http://localhost:8080/api/v1/product/";

class ProductService {
    getProduct() {
        return Axios.get(API_URL)
    }
}
export default new ProductService();