import {
    BrowserRouter, 
    Routes, 
    Router, 
    Route, 
    Link
} from 'react-router-dom';

export default function AppRouter() {
    return(
        <Router>
            {/* <Routes> */}
                <Route
                    path='/router'
                >                    
                        Buenas, estoy en router                    
                </Route>
                <Route
                    path='/home'
                >                    
                        Buenas, este es el home                    
                </Route>
                <Route
                    path='/about'
                >                       
                        Buenas, este es el about                    
                </Route>
                <Route
                    path='/contact'
                >                       
                        Buenas, este es la página de contacto                    
                </Route>
            {/* </Routes> */}
        </Router>
    )
}