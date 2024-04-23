// choix 1 pour export component (permet d'exporter plusieurs éléments sur un fichier mais ne peut pas etre renommer)
// export const Header = () => {
//   return (
//     <div className="h-20 w-full border-b-2 border-slate-200 px-4">header</div>
//   );
// };

import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
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
        {/* to show a loader while clerk cheks if signed in or no */}
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>

        {/* clerk icon after loading and after being signed in*/}
        {/* interface quand user connecté */}
        <ClerkLoaded>
          {/* When im logged and i want to show the clerk icon to manage settings or sign out*/}
          <SignedIn>
            {/* what is happening when i sign out */}
            <UserButton afterSignOutUrl="/buttons" />
          </SignedIn>

          {/* Clerk icon when not signed in */}
          {/* interface pas encore connectée */}
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl={"/"}>
              <Button size={"lg"} variant={"ghost"}>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
};
export default Header;
