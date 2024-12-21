import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:w-1/3 bg-slate-500">
        <Image src="/LogoWhtPNG.png" alt="logo" width="250" height="150" />
        <p>
          DarkCode Coffee is part of
          <a href="http://www.iempire.net">iEmpire</a>
        </p>
      </div>
      {/* <div>
        2222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        accusantium harum omnis consectetur iusto et vitae obcaecati libero
        error, provident eveniet doloribus, ipsam animi. Ea eos exercitationem
        optio esse culpa!
      </div> */}
      <div className="lg:w-1/3">
        <h3 className="text-center">SOCIALS</h3>
        <div className="flex flex-col justify-center lg:flex-row lg:justify-evenly gap-4">
          <Link href="https://www.facebook.com/DarkCodeCoffee/">
            <Image src="/FBbw.png" alt="facebook" width="50" height="50" />
          </Link>
          <Link href="https://www.instagram.com/darkcodecoffee/">
            <Image src="/IGbw.png" alt="instagram" width="50" height="50" />
          </Link>
          <Link href="https://twitter.com/DarkCodeCoffee">
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
