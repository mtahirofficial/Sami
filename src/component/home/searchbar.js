import React,{Component} from "react";
import M from 'materialize-css'; 
class SearchBar extends Component{
    componentDidMount=()=>{
            var elems = document.querySelectorAll('select');
             M.FormSelect.init(elems);
    }
    render(){
    return (
        <div>
             <div className="row grey lighten-2">
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
      <option value="Automobiles $ Motorcycles">Automobiles & Motorcycles</option>
      <option value="Home Improvement, Tools">Home Improvement, Tools</option>
    </select>
    </div>
    <div className="col m9 s7"> 
    <div className="row">
    <div class="input-field col m10 s8">
          <input type="text" id="autocomplete-input" class="autocomplete"/>
          <label for="autocomplete-input">serach</label>
        </div>
    <button  className="blue waves-effect waves-light btn-large col m1 s4" ><i className= "material-icons medium" >search</i></button>
    </div>
    </div>
    </from>

    </div>
            </div>
        </div>
        
    );
    }
}
export default SearchBar ;