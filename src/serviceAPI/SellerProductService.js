import Axios from "axios";

const API_URL = "http://localhost:8080/api/v1/seller";
const user = JSON.parse(localStorage.getItem("userToken"));

class SellerProductService {
    getSellerProduct() {
        return Axios.get(API_URL + "/product",
            { headers: { Authorization: "Bearer " + user.jwtToken } })

    }
    createProduct(formData) {
        console.log(formData);
        return Axios.post("http://localhost:8080/api/v1/product/create",
            formData,
            { headers: { Authorization: "Bearer " + user.jwtToken } }
        );

    }

}
export default new SellerProductService();