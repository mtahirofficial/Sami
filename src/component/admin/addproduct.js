import React,{Component} from 'react';
import NavBar from '../navbar/navbar';
import M from 'materialize-css';

class AddProduct extends Component {
      
    componentDidMount=()=>{
        var elems = document.querySelectorAll('select');
               M.FormSelect.init(elems);
    }
// add product in database
addProduct =(e)=>{
    e.preventDefault();
    let productName =this.refs.pName.value.trim();
    let productColor =this.refs.pColor.value.trim();
    // create arry product color
    productColor = productColor.split(',');
    let productSize =this.refs.pSize.value.trim();
    //create arry product size
    productSize = productSize.split(',');

    let subCategoryName = this.refs.pSubCategory.value.trim();
    let productCategory =this.refs.category.value;
    let fromData =new FormData(this.refs.myform);
    // create product obj
    let singelProduct ={pName:productName,pColor:productColor,pSize:productSize,sCategory:subCategoryName,pCategory:productCategory}
    fromData.append('data',JSON.stringify(singelProduct));
    // feacth api use send data to the server
    let  options ={
        method: 'POST',
        body:fromData,  
    }
        fetch('/addProduct',options)
        .then((res) => res.text())
                .then((message) => console.log(message))
                .catch((error) => console.log(error))
} 

    render(){
        return(<div>
           <NavBar/>
           <div className="row">
           <div className="col m6  offset-m2 s12">
           <form onSubmit={this.addProduct} ref="myform" enctype="multipart/form-data" >
           <div className="card">
           <div className="card-content">
           <h4 className="center">Add Product</h4>
           <hr/>
           <div className="input-field ">
          <input id="product_name" type="text" className="validate" ref="pName"/>
          <label htmlFor="product_name">Product Name</label>
        </div>
           <div className="input-field ">
          <input id="product_color" type="text" className="validate" ref="pColor"/>
          <label htmlFor="product_color">product color</label>
        </div>
           <div className="input-field ">
          <input id="product_size" type="text" className="validate" ref="pSize"/>
          <label htmlFor="product_size">product size</label>
        </div>
           <div className="input-field ">
          <input id="product_sub_category" type="text" className="validate" ref="pSubCategory"/>
          <label htmlFor="product_sub_category">product sub category name</label>
        </div>
        {/* category of product */}
        <div className="input-field">
        <select ref="category" >
      <option value="" disabled selected>Choose your main category</option>
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

        <div className="file-field input-field">
      <div className="btn">
        <input type="file" multiple name="productImage"/>
        <span>File</span>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Upload one or more files" />
      </div>
    </div>
    <div className="row">
    <input type="submit" value="add product" className="btn blue col m12 s12"/>
    </div>
           </div>
           </div>
           </form>
           </div>
           </div>
        </div>);
    }
}
export default AddProduct;