import { useEffect, useState } from "react";
import Axios from "axios";

function TarjetaAvanzadaEspecifica({id}){
    const [json, setJson] = useState({});

    // Se ejecuta una sola vez al principio del montaje
    useEffect(() => {
            Axios({
                url: `https://dummyjson.com/products/${id}`
            })
            .then((response) => {
                console.log(response.data);
                console.log(id);
                setJson(response.data)
            })
            .catch((error) => {
                console.log(error);
            })        
    }, []);

    return(
        <TarjetaAvanzada 
            title={json.title}
            description={json.description}
            price={json.price}
        />
    );
}

function TarjetaAvanzada({title, description, price}) {
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
    const [json, setJson] = useState([]);

    useEffect(() => {
        Axios({
            url: 'https://dummyjson.com/products'
        })
        .then((response) => {
            setJson(response.data.products);
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
            {json.map(({id, title, description, price}) => (
                <TarjetaAvanzada 
                    key={`tarjetaavanzada-${id}`}
                    title={title}
                    price={price}
                    description={description}
                />
                ))}
        </div>
    )
}

export {TarjetaAvanzada, ListaTarjetasAvanzadas, TarjetaAvanzadaEspecifica};