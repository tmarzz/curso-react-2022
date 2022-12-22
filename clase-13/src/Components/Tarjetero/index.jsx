// Modificar el tarjetero/postItem para que cada vez que se haga
// click en una tarjeta se habra un modal con los datos de la 
// tarjeta en un postItemInput

import PostItem from '../PostItem';
import PostItemInput from '../PostItemInput';
import Modal from '../Modal';
import './style.css';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const jsonExample = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}


function Tarjetero(){
    const [json, setJson] = useState([]);
    const [show, setShow] = useState(false);

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
        {json.map((post) => (
            <React.Fragment>
                <PostItem 
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    onClick={() => {setShow(true)}}
                />
                <Modal
                    show={show}
                    setShow={setShow}
                >
                    <PostItemInput 
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />
                </Modal>                
            </React.Fragment>
        ))}
        {/* {json.map((post) => (
            <PostItemInput 
                id={post.id}
                title={post.title}
                body={post.body}
            />
        ))} */}
    </div>
    );
}

export default Tarjetero;