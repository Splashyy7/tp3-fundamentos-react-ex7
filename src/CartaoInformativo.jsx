import React from 'react';

const CartaoInformativo = ({ titulo, subtitulo, conteudo }) => {
  return (
    <div style={styles.cartao}>
      <h1 style={styles.titulo}>{titulo}</h1>
      <h2 style={styles.subtitulo}>{subtitulo}</h2>
      <p style={styles.conteudo}>{conteudo}</p>
    </div>
  );
};

const styles = {
  cartao: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    margin: '16px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  titulo: {
    margin: '0 0 8px',
    fontSize: '24px',
  },
  subtitulo: {
    margin: '0 0 16px',
    fontSize: '18px',
    color: '#555',
  },
  conteudo: {
    margin: '0',
    fontSize: '16px',
    color: '#333',
  },
};

export default CartaoInformativo;
