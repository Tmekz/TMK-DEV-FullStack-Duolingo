import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button className="w-full " size={"lg"} variant={"ghost"}>
          <Image
            src={"/fr.svg"}
            alt="French flag"
            height={32}
            width={40}
            className="mr-4 rounded-md w-auto h-auto"
          />
          France
        </Button>
        <Button className="w-full " size={"lg"} variant={"ghost"}>
          <Image
            src={"/es.svg"}
            alt="Spanish flag"
            height={32}
            width={40}
            className="mr-4 rounded-md w-auto h-auto"
          />
          Spanish
        </Button>
        <Button className="w-full " size={"lg"} variant={"ghost"}>
          <Image
            src={"/it.svg"}
            alt="Italian flag"
            height={32}
            width={40}
            className="mr-4 rounded-md w-auto h-auto"
          />
          Italian
        </Button>
        <Button className="w-full " size={"lg"} variant={"ghost"}>
          <Image
            src={"/jp.svg"}
            alt="Japan flag"
            height={32}
            width={40}
            className="mr-4 rounded-md w-auto h-auto"
          />
          Japan
        </Button>
        <Button className="w-full " size={"lg"} variant={"ghost"}>
          <Image
            src={"/us.svg"}
            alt="American flag"
            height={32}
            width={40}
            className="mr-4 rounded-md w-auto h-auto"
          />
          American
        </Button>
      </div>
    </div>
  );
};

export default Footer;
