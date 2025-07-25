import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePdfFromElement = async (
  element,
  fileName = "invoice.pdf",
  returnBlob = false
) => {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#fff",
    scrollY: -window.screenY,
  });

  const imageData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "pt", "a4");
  const imageProps = pdf.getImageProperties(imageData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imageProps.height * pdfWidth) / imageProps.width;
  pdf.addImage(imageData, "JPEG", 0, 0, pdfWidth, pdfHeight);
  if (returnBlob) {
    return pdf.output("blob");
  } else {
    pdf.save(fileName);
  }
};

// 🧾 "Take a div → make it an image → turn that image into a PDF → download it."
