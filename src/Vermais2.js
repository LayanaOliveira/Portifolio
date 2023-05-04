import React, { useState } from 'react';

function VerMaisEsconder2(){
    const [mostrarTexto, setMostrarTexto] = useState(false)

    const handleClick = () => {
        setMostrarTexto(!mostrarTexto)
    }

    return(
        <div className='vermaisman'>
            <button onClick={handleClick} className='btman'>
                {mostrarTexto ? 'Esconder' : 'Ver mais'}
            </button>
            {mostrarTexto && <h5 className='textman'>- Diagnóstico e solução de problemas <br/>
            - Reparo de hardware <br/>
            - Instalação e atualização de aplicativos <br/>
            - Formatação <br/>
            - Limpeza <br/> <br/>
            Entre outros</h5>}
        </div>
    )
}

export default VerMaisEsconder2