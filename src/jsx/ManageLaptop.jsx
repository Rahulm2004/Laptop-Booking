import axios from "axios";
import React from 'react';
import "../css/ManageLaptop.css";
import { Link } from "react-router-dom";

class ManageLaptop extends React.Component{

 
        state = {
          posts: [],
        };
        componentDidMount() {
          axios.get(`http://localhost:8080/lapdetail`).then((res) => {
            const posts = res.data;
            this.setState({posts});
          });
        }

        deleteRow(modelid, i){
          axios.delete(`http://localhost:8080/delete/${modelid}`)
            .then(res => {
              console.log(res);
              console.log(res.data);
              const posts = this.state.posts.filter(item => item.modelid !== modelid);
              this.setState({posts });
            })
      
        }

    render(){

    
    return(

        <div>

            <form>
            <table class="laptoptable ">
          <thead  style={{backgroundColor: '#607d8b',color:'white',borderRadius:'10px',height:"1cm"}}>
            <tr>
              <th>Model Id</th>
              <th>BrandName</th>
              <th>ModelName</th>
              <th>Proccesor</th>
              <th>SSD</th>
              <th>RAM</th>
              <th>Colour</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Waranty</th>
              <th>Edit</th>
              <th>Delete</th>
         
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.modelid}</td>
                <td>{post.brandname}</td>
                <td>{post.modelname}</td>
                <td>{post.processor}</td>
                <td>{post.ssd}</td>
                <td>{post.ram}</td>
                <td>{post.colour}</td>
                <td>{post.price}</td>
                <td>{post.rating}</td>
                <td>{post.warranty}</td>
                <td><Link to={`/adminupdatelaptop/${post.modelid}`}><button>Edit</button></Link></td>
                <td><button onClick={(i) => this.deleteRow(post.modelid, i)} class="fa-solid fa-trash">Delete</button></td>

              </tr>
            ))}
          </tbody>
        </table>
            </form>
        </div>
    )
            }
}
export default ManageLaptop;