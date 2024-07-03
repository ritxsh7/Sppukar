import { setBranch, setSemester, setCourse } from "../functions/choices";

export const navbar = [
  {
    name: "Search Material",
    link: "/",
    icon: "search",
  },
  {
    name: "Upload Material",
    link: "/upload-files",
    icon: "cloud-upload",
  },
  {
    name: "My history",
    link: "/",
    icon: "time",
  },
  {
    name: "CGPA Converter *",
    link: "/cgpa-to-percentage",
    icon: "calculator",
  },
];

export const SelectInputs = [
  {
    name: "branch",
    onchange: (branch) => setBranch(branch),
  },
  {
    name: "semester",
    onchange: (semester) => setSemester(semester),
  },
  {
    name: "course",
    onchange: (course) => setCourse(course),
  },
];

export const styles = {
  toast: {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  },
};
