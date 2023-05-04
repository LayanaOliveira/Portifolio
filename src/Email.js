import React, { useState } from 'react';

function EmailForm() {
  const [duvida, setDuvida] = useState('');

  const Enviaremail = (event) => {
    event.preventDefault();
    window.location.href = `mailto:maria.oliveira1867@aluno.ce.gov.br?subject=${encodeURIComponent(duvida)}`;
  };

  return (
    <form onSubmit={Enviaremail}>
      <label>
        <input type="text" value={duvida} onChange={(event) => setDuvida(event.target.value)} placeholder='Como podemos ajudar? ' className='email'/>
      </label>
      <button type="submit" className='submit'>Enviar</button>
    </form>
  );
}

export default EmailForm;