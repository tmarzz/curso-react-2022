import { useState } from "react";

function InputPassword() {
    const [password, setPassword] = useState()
    
    return(
        <input 
            type='password'
            style={{margin: '20px'}}
            placeholder='Password'
            value={password}
            onChange={(event) => (setPassword(event.target.value))}
        />
    );
}

export default InputPassword;