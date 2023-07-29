import axios from "axios";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useLocation } from "react-router-dom";

function Notice() {
  const [title, setTitle] = useState("");
  const location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const itemId = location && location.state ? location.state.id : null;
    axios
      .get(`http://localhost:8000/notices/get/${itemId}`, {
        responseType: "arraybuffer",
      })
      .then((res) => {
        console.log(res.data);
        // Convert the response data to a base64 string
        const uint8Array = new Uint8Array(res.data);
        const binaryString = uint8Array.reduce(
          (accumulator, byte) => accumulator + String.fromCharCode(byte),
          ""
        );
        const pdfBase64 = btoa(binaryString);
        setPdfData(pdfBase64);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
    // Set the worker path for pdf.js
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, [location]);
  useEffect(() => {
    const itemId = location && location.state ? location.state.id : null;
    axios
      .get(`http://localhost:8000/notices/get/title/${itemId}`)
      .then((res) => {
        setTitle(res.data.title);
      });
  }, [location]);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleDownload() {
    // Create a Blob object from the base64 PDF data
    const byteCharacters = atob(pdfData);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: "application/pdf" });

    // Create a download link and trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "notice.pdf";
    downloadLink.click();
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl text-center font-bold mb-5">{title}</h1>
      {pdfData && (
        <div className="w-full bg-white p-4 shadow-md max-w-2xl mx-auto text-center">
          <div className="h-[600px] w-full overflow-scroll">
            <Document
              file={`data:application/pdf;base64,${pdfData}`}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={600} />
            </Document>
          </div>
          <p className="my-5">
            Page {pageNumber} of {numPages}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDownload}
            disabled={!pdfData}
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default Notice;
