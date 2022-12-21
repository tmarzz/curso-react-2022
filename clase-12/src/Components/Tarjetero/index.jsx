import PostItem from '../PostItem';
import PostItemInput from '../PostItemInput';
import './style.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

const jsonExample = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

function Tarjetero(){

    const [json, setJson] = useState([]);

    // Quiero que esto se ejecute una sola vez, por eso usamos dependencias vacias '[]'
    useEffect(() => {
        Axios({
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        .then((response) => {
            setJson(response.data)
            console.log(json)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return(
    <div
        className='tarjetero-contenedor'
    >
        {/* {json.map((post) => (
            <PostItem 
                id={post.id}
                title={post.title}
                body={post.body}
            />
        ))} */}
        {json.map((post) => (
            <PostItemInput 
                id={post.id}
                title={post.title}
                body={post.body}
            />
        ))}
    </div>
    );
}

export default Tarjetero;