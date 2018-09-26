import React, { Component } from 'react';
import axios from 'axios';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
const { SearchBar } = Search;
class DisplayData extends Component {
    state = {
        products: [],
          columns: [{
            dataField: '_id',
            text: '#Id',
            sort: true
          },
          {
            dataField: 'created',
            text: 'Created',
            sort: true
          },
          {
            dataField: 'createdBy',
            text: 'CreatedBy',
            sort: true
          },
          {
            dataField: 'lineName',
            text: 'Line Name',
            sort: true
          },
          {
            dataField: 'lineType',
            text: 'line Type',
            sort: true
          },
          {
            dataField: 'numberOfMixers',
            text: 'Mixers',
            sort: true
          },
          {
            dataField: 'siteId',
            text: 'Site Id',
            sort: true
          }]
      }
    componentWillMount=()=>{
        let token= localStorage.getItem('Token');
        console.log(token)
        if(token){
        axios.get(`http://18.197.144.240:3000/api/lines`, { 'headers': { 'Authorization': 'Bearer '+token } })
        .then(res => {
            console.log(res.data.lines);
            this.setState({
                products: [...res.data.lines ]
               })
           console.log(this.state);
        })
         }else{
            this.props.history.push("/");
         }
       
    }
    render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        
        <ToolkitProvider
        keyField="_id"
        data={this.state.products }
        columns={ this.state.columns }
        search
        >
            {
                props => (
                <div>
                    <h3>Search BOX:</h3>
                    <SearchBar { ...props.searchProps } />
                    <hr />
                    <BootstrapTable
                    { ...props.baseProps }
                    />
                </div>
                )
            }
        </ToolkitProvider>
      </div>
    );
    }
}
export default DisplayData;
