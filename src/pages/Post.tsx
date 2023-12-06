import { useState, useEffect } from 'react';
import {mockPost} from '../mocks/mockData'
import { useParams } from "react-router-dom";
import '../stylesheets/post.css'


const Post = () => {
    // const [postData, setPostData] = useState(mockPost);

    const { id } = useParams();
    

    useEffect(() => {
        console.log(id);
    },[id,]);

    // const {
    //     _id,
    //     title,
    //     copy,
    //     author,
    //     date,
    //     tags,
    //     comments,
    //     likes,
    //     status,
    //     __v
    //   } = postData;

    return (
        <div>A post with _id {id} </div>
    )

}

export default Post;