import React,{Component} from 'react';

class AdminContent extends Component {

    render(){
        return(<div>
            {this.props.match.params.name}
        </div>);
    }
}
export default AdminContent;