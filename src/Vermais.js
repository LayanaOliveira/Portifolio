import React, { useState } from 'react';

function VerMaisEsconder(){
    const [mostrarTexto, setMostrarTexto] = useState(false)

    const handleClick = () => {
        setMostrarTexto(!mostrarTexto)
    }

    return(
        <div className='vermaisdesign'>
            <button onClick={handleClick} className='btdesign'>
                {mostrarTexto ? 'Esconder' : 'Ver mais'}
            </button>
            {mostrarTexto && <h4 className='textdesign'>- Criação de logotipos <br/>
            - Design de cartões de visitas <br/>
            - Design de banners e cartazes <br/>
            - Projeto de mídias sociais <br/>
            - Design de sites <br/> <br/>
            Entre outros</h4>}
        </div>
    )
}

export default VerMaisEsconder