import { useEffect, useState } from "react";
import Axios from "axios";

function TarjetaAvanzada({id, title, description, price}) {
    // const [json, setJson] = useState();

    // useEffect(() => {
    //     Axios({
    //         url: 'https://dummyjson.com/products/1'
    //     })
    //     .then((response) => {
    //         setJson(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }, []);

    return(
        <div
            style={{
                border: 'solid 1px black', 
                margin: 10
            }}
        >
            <p>{title}</p>
            <p>{description}</p>
            <h3>U$D {price}</h3>
        </div>
    );
}

function ListaTarjetasAvanzadas(){
    const [json, setJson] = useState();

    useEffect(() => {
        Axios({
            url: 'https://dummyjson.com/products/1'
        })
        .then((response) => {
            setJson(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {json.map(({id, title, description, price}) => {
                <TarjetaAvanzada 
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                />
            })}
        </div>
    )
}

export {TarjetaAvanzada, ListaTarjetasAvanzadas}