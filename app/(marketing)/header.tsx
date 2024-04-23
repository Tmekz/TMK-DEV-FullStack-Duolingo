// choix 1 pour export component (permet d'exporter plusieurs éléments sur un fichier mais ne peut pas etre renommer)
// export const Header = () => {
//   return (
//     <div className="h-20 w-full border-b-2 border-slate-200 px-4">header</div>
//   );
// };

// choix 2 pour export component (permet de pouvoir renommer le fichier lors de l'import)
const Header = () => {
  return (
    <div className="h-20 w-full border-b-2 border-slate-200 px-4">header</div>
  );
};
export default Header;
