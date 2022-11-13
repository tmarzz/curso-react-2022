import fotoModelo from './../Img/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg';
import anteojos from './../Img/Anteojos/Anteojos.jpg';
import fotoAnteojos from './../Img/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg';
import ItemFromList from './ListItem';
import Nav from './Nav';
import SearchBox from './SearchBox';


// const estilos = {
//     // navWrapper: {
//     //     boxSizing: 'border-box',
//     //     display: 'flex',
//     //     flexDirection: 'column',
//     //     justifyContent: 'center',
//     //     alignItems: 'center'
//     // },
//     // nav: {
//     //     boxSizing: 'border-box',
//     //     padding: '20px',
//     //     borderBottom: '1px solid black',
//     //     display: 'flex',
//     //     flexDirection: 'column',
//     //     justifyContent: 'flex-end',
//     //     height: '190px',
//     // },
//     // logo: {
//     //     fontSize: '32px',
//     //     padding: '20px',
//     //     boxSizing: 'border-box'
//     // },
//     // cartButton: {
//     //     display: 'block',
//     //     color: 'black',
//     //     textDecoration: 'none',
//     //     borderRadius: '30px',
//     //     border: '1px solid black',
//     //     boxSizing: 'border-box',
//     //     padding: '10px',
//     //     width: '100px',
//     // },
//     // searchBoxWrapper: {
//     //     padding: '50px',
//     //     boxSizing: 'border-box',
//     //     display: 'flex',
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     // },
//     // searchBox: {
//     //     display: 'block',
//     //     borderRadius: '30px',
//     //     border: '1px solid black',
//     //     color: 'rgba(0, 0, 0, 0.5)',
//     //     padding: '30px',
//     //     boxSizing: 'border-box',
//     //     fontSize: '26px',
//     //     width: '90%'
//     // },
//     // listItem: {
//     //     display: 'block',
//     //     boxSizing: 'border-box',
//     //     padding: '30px',
//     //     position: 'relative',
//     // },
//     // listItemImg: {
//     //     display: 'block',
//     //     width: '100%',
//     //     height: '100%',
//     // },
//     // listItemBox: {
//     //     backgroundColor: 'rgba(255, 255, 255, 0.65)',
//     //     position: 'absolute',
//     //     top: '100px',
//     //     left: '70px',
//     //     width: 'calc(100% - 140px)',
//     //     height: 'calc(100% - 200px)',
//     //     display: 'flex',
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     // },
//     // listItemBoxSpan: {
//     //     fontSize: '32px',
//     //     fontWeight: 'bold',
//     // },
// }

// function Nav(){
//     return(
//         <div
//             style={estilos.nav}
//         >
//             <div
//                 style={estilos.navWrapper}
//             >
//                 <h1
//                     style={estilos.logo}
//                 >
//                     MioMio
//                 </h1>
//                 <button
//                     style={estilos.cartButton}
//                 >
//                     carrito
//                 </button>
//             </div>

//         </div>
//     );
// }

// function SearchBox() {
//     return(
//         <div
//             style={estilos.searchBoxWrapper}
//         >
//             <input 
//                 type='text'
//                 placeholder='Tu búsqueda...'
//                 style={estilos.searchBox}
//             />
//         </div>
//     );
// }

// function ListItem(props) {
//     return(
//         <div
//             style={estilos.listItem}
//         >
//             <img 
//                 src={props.imagen}
//                 style={estilos.listItemImg}
//                 alt=''
//             />
//             <div
//                 style={estilos.listItemBox}
//             >
//                 <span
//                     style={estilos.listItemBoxSpan}
//                 >
//                     {props.texto}
//                 </span>
//             </div>
//         </div>
//     );
// }

function AppIndex() {
    return(
        <div>
            <Nav />
            <SearchBox />
            <ItemFromList 
                imagen={fotoModelo}
                texto='Lorem Ipsum'
            />
            <ItemFromList 
                imagen={anteojos}
                texto='Lorem Ipsum'
            />
            <ItemFromList 
                imagen={fotoAnteojos}
                texto='Lorem Ipsum'
            />
        </div>
    );
}

export default AppIndex;