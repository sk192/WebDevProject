
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { pdfjs } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import '../stylesheet/resume.css';


export default function SinglePage(props) {
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumnetLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // function changePage(offset) {
  //   setPageNumber((prevPageNumber) => prevPageNumber + offset);
  // }

  // function previousPage() {
  //   changePage(-1);
  // }
  // function nextPage() {
  //   changePage(1);
  // }

  return (
    <>
      <Document
     
        file="./shweta_korulkar_resume.pdf"
        // file={pdf}
        // options={{ workerSrc: "/pdf/worker.js" }}
        onLoadSuccess={onDocumnetLoadSuccess}
        
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        {/* <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button> */}
      </div>
    </>
  );
}
