import React,{Component} from 'react';
import EmptyCart from './emptycart';
import Content from '../home/content';
import ContentCart from './contentcart';
import Header from '../navbar/header';
class Cart extends Component{

render(){
    return(<div>
        <Header/>
    <EmptyCart/>
    <ContentCart/>
    <Content  />
    </div>);
}
}
export default Cart;