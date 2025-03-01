import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between p-4">
      <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left p-4 rounded-lg">
        <Image src="/LogoWhtPNG.png" alt="logo" width="250" height="150" />
        <p className="pt-5">
          DarkCode Coffee is part of{" "}
          <Link href="http://www.iempire.net">iEmpire</Link>
        </p>
      </div>
      {/* <div>
        2222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        accusantium harum omnis consectetur iusto et vitae obcaecati libero
        error, provident eveniet doloribus, ipsam animi. Ea eos exercitationem
        optio esse culpa!
      </div> */}
      <div className="lg:w-1/3 flex flex-col lg:items-end mt-6 lg:mt-0">
        <h3 className="text-xl font-semibold mb-4 text-center w-full">
          SOCIALS
        </h3>
        <div className="grid grid-flow-row-dense grid-cols-3 w-full">
          <Link
            href="https://www.facebook.com/DarkCodeCoffee/"
            className="mx-auto"
          >
            <Image src="/FBbw.png" alt="facebook" width="50" height="50" />
          </Link>
          <Link
            href="https://www.instagram.com/darkcodecoffee/"
            className="mx-auto"
          >
            <Image src="/IGbw.png" alt="instagram" width="50" height="50" />
          </Link>
          <Link href="https://twitter.com/DarkCodeCoffee" className="mx-auto">
            <Image src="/TWbw.png" alt="twitter" width="50" height="50" />
          </Link>
        </div>
      </div>
      {/* <div className="w-max">Dark Code Coffee is part of iEmpire</div> */}
      {/* <div class="foot-social"></div> */}
    </footer>
  );
}

export default Footer;
