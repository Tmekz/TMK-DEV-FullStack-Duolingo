// choix 1 pour export component (permet d'exporter plusieurs éléments sur un fichier mais ne peut pas etre renommer)
// export const Header = () => {
//   return (
//     <div className="h-20 w-full border-b-2 border-slate-200 px-4">header</div>
//   );
// };

import { ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

// choix 2 RSC pour export component (permet de pouvoir renommer le fichier lors de l'import)
const Header = () => {
  return (
    <div className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/mascot.svg"
            height={40}
            width={40}
            alt="Duolingo Mascot"
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Duolingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
      </div>
    </div>
  );
};
export default Header;
