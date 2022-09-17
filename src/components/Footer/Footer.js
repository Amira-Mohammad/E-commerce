import FooterLogo1 from "../../images/FooterIcon1.svg";
function Footer() {
  return (
    <footer className="bg-black text-white w-100 d-flex flex-column justify-content-center  px-5 ">
      <div className="d-flex justify-content-around">
        <img src={FooterLogo1} alt="FooterLogo1" width={50} height={50} />
        <img src={FooterLogo1} alt="FooterLogo1" width={50} height={50} />
        <img src={FooterLogo1} alt="FooterLogo1" width={50} height={50} />
        <img src={FooterLogo1} alt="FooterLogo1" width={50} height={50} />
      </div>

      <div>Copyright © 2022 - All rights reserved</div>
    </footer>
  );
}

export default Footer;
