import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import styles from './home.module.css';

export default function App() {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const filename = params.get('filename');

  const url = `https://intranet.svmatesur.com.ar/Estadisticas/BoletosMobile?filename=` + filename;

  const { pdfDocument, pdfPage } = usePdf({ canvasRef, file: url, page });

  return (
    <div>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <div className={styles.container}>
          <button className={styles.button} disabled={page === 1} onClick={() => setPage(page - 1)}>
            Anterior
          </button>
          <button className={styles.button} disabled={page === pdfDocument.numPages}
            onClick={() => setPage(page + 1)}> 
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};
