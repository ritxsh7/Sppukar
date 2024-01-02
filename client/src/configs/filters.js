//file icons
import pdf from "../assets/pdf.png";
import ppt from "../assets/ppt.png";
import jpeg from "../assets/jpeg.png";

//icon images
import pptCard from "../assets/ppt-card.png";
import bookCard from "../assets/book-card.png";
import decodeCard from "../assets/decode-card.png";
import pyqCard from "../assets/pyq-card.png";
import notesCard from "../assets/notes-card.png";
import qbCard from "../assets/qb-card.png";

export const filters = [
  {
    name: "semester",
    options: ["Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"],
  },
  {
    name: "FY",
    options: ["Sem 1", "Sem 2"],
  },
];

export const categories = [
  "TEXTBOOK",
  "NOTES",
  "PYQS",
  "DECODE",
  "QUESTION BANK",
  "PPT",
];

export const images = {
  pdf: pdf,
  pptx: ppt,
  jpg: jpeg,
  jpeg: jpeg,
};

export const icons = [
  bookCard,
  notesCard,
  pyqCard,
  decodeCard,
  qbCard,
  pptCard,
];
