import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfReader(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const nextPage = (currentPage) => {
    // console.log(pageNumber);
    setPageNumber(pageNumber + 1);
  };
  const previousPage = (currentPage) => {
    // console.log(pageNumber);
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="container-fluid">
      <Document
        file={props.file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(err) => console.log(err)}
      >
        <Page pageNumber={pageNumber} className="d-inline-block" />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>

      <button
        className="btn btn-primary"
        style={{ marginLeft: "5px" }}
        onClick={nextPage}
        disabled={pageNumber === numPages}
      >
        صفحه بعد
      </button>
      <button
        disabled={pageNumber === 1}
        className="btn btn-primary"
        onClick={previousPage}
      >
        صفحه قبل
      </button>
    </div>
  );
}
export default PdfReader;
