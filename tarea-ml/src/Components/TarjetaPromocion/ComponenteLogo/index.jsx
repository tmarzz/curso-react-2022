import './style.css';

function ComponenteLogo(props) {
    return(
        <img 
            src={props.logo}
            className='logo'
            alt={props.detalle}
        />
    );
}

export default ComponenteLogo;