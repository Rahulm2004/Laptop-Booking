import axios from "axios";
import React from 'react';
import "../css/ManageUser.css";

class ManageUser extends React.Component{

 
        state = {
          posts: [],
        };
        componentDidMount() {
          axios.get(`http://localhost:8080/getuser`).then((res) => {
            const posts = res.data;
            this.setState({ posts });
          });
        }

        deleteRow(userid, e){
          axios.delete(`http://localhost:8080/deleteuser/${userid}`)
            .then(res => {
              console.log(res);
              console.log(res.data);
              const posts = this.state.posts.filter(item => item.userid !== userid);
              this.setState({ posts });
            })
        }
    render(){

    
    return(

        <div>

            <form>
            <table class="tableuser ">
          <thead  style={{backgroundColor: '#607d8b',color:'white',borderRadius:'10px',height:"1cm"}}>
            <tr>
              <th>User Id</th>
              <th>First name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Password</th>
              <th>Mobileno</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.userid}</td>
                <td>{post.firstname}</td>
                <td>{post.lastname}</td>
                <td>{post.gender}</td>
                <td>{post.email}</td>
                <td>{post.password}</td>
                <td>{post.mobileno}</td>
                <td><button style={{border:"none"}} onClick={(e) => this.deleteRow(post.userid, e)} class="fa-solid fa-trash">Delete</button></td>
              </tr>
            ))}
          </tbody>
          
        </table>
            </form>
        </div>
    )
            }
}
export default ManageUser;