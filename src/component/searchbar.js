import React,{Component} from "react";
import {Row,Input, Button, Icon} from 'react-materialize';
import M from 'materialize-css'; 
class SearchBar extends Component{

    render(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
             M.FormSelect.init(elems);
          });
        
    return (
        <div>
             <Row>
                 <div className="container">
                 <from>
             <div className="input-field col s5 m3">
    <select >
      <option value="" disabled selected>Choose your option</option>
      <option value="All Category">All Category</option>
      <option value="Women’s Clothing">Women’s Clothing</option>
      <option value="Men’s Clothing">Men’s Clothing</option>
      <option value="Cellphones & Accessories">Cellphones & Accessories</option>
      <option value="Computer, Office, Security">Computer, Office, Security</option>
      <option value="Consumer Electronics">Consumer Electronics</option>
      <option value="Jewelry & Watches">Jewelry & Watches</option>
      <option value="Home & Garden, Appliance<">Home & Garden, Appliance</option>
      <option value="Bags & Shoes">Bags & Shoes</option>
      <option value="Toys, Kids & Baby">Toys, Kids & Baby</option>
      <option value="Sports & Outdoors<">Sports & Outdoors</option>
      <option value="Beauty & Health, Hair">Beauty & Health, Hair</option>
      <option value="Automobiles & Motorcycles">Automobiles & Motorcycles</option>
      <option value="Home Improvement, Tools">Home Improvement, Tools</option>
    </select>
    </div>
    <Input  s={5} m={4} label="search" type="search" />
    <Button s={2} m={2} className="blue waves-effect waves-light btn-large" ><Icon medium>search</Icon></Button>
    </from>
    </div>
            </Row>
        </div>
        
    );
    }
}
export default SearchBar ;