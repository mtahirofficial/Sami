import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Footer,Row,Col} from 'react-materialize';
class DownFooter extends Component{

    render(){
        return(<div>
           <Footer className="blue" copyrights="© 2010-2019 ecom.com. All rights reserved."
  moreLinks={
      <div>
   <Link className="grey-text text-lighten-3" to="/Intellectual-Property-Protection">Intellectual Property Protection</Link>
    -
   <Link className="grey-text text-lighten-3" to="/Privacy-Policy">Privacy Policy</Link>
    -
 <Link className="grey-text text-lighten-3" to="/Sitemap">Sitemap</Link> 
 -
 <Link className="grey-text text-lighten-3" to="/Terms-of-Use">Terms of Use</Link>
  -
 <Link className="grey-text text-lighten-3" to="/Law-Enforcement-Compliance-Guide"> Law Enforcement Compliance Guide</Link>
</div>

  }
  
> <Row>
    <Col m={12}>
    <ul>
        <li><h5>Help</h5></li>
        <li>
            <Link className="grey-text text-lighten-3"  to="/Customer-Service">Customer Service</Link>,
            <Link className="grey-text text-lighten-3"  to="/Disputes-and-Reports"> Disputes & Reports</Link>,
            <Link className="grey-text text-lighten-3"  to="/Buyer-Protection"> Buyer Protection</Link>,
            <Link className="grey-text text-lighten-3"  to="/Report-IPR-infringement"> Report IPR infringement</Link>
        </li>
        <li><h5>Browse by Category</h5></li>
        <li><Link className="grey-text text-lighten-3"  to="/All-Popular">All Popular</Link>,
        <Link  className="grey-text text-lighten-3" to="/Product">Product</Link>,
        <Link className="grey-text text-lighten-3"  to="/Promotion">Promotion</Link>,
        <Link className="grey-text text-lighten-3"  to="/Low-Price"> Low Price</Link>,
        <Link className="grey-text text-lighten-3"  to="/Great-Value"> Great Value</Link>,
        <Link className="grey-text text-lighten-3"  to="/Reviews">Reviews</Link></li>
    </ul>
    </Col>
</Row>
    
</Footer>;
          
        </div>);
    }
}

export default DownFooter;