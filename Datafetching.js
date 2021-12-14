import React, {useState ,useEffect} from "react";
import axios from 'axios';
import {Card,CardBody,CardText,CardTitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// imort "./Datafecting.css";p

function Datafetching(){
    const [posts,setPosts] =useState([])

     useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
         })
    },[])


    return(
        <div>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
            </head>
            <h1>posts</h1>
        
             {posts.map((post,id)  =>(
                 <div>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                {post.title}
                                </CardTitle>
                            <CardText>
                                {post.body}
                            </CardText>
                        </CardBody>
                     </Card>
                 </div>))}
        </div>
    )
}

export default Datafetching;



