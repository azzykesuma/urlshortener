import routes from "../util/routes";
import Logo from "./ui/Logo";
import fbIcon from '../assets/images/icon-facebook.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg'
import instagramIcon from '../assets/images/icon-instagram.svg'
const Footer = () => {
  return (
    <footer className="bg-very-dark-violet">
      <div className="flex flex-col justify-centern items-center text-center py-6 md:flex-row md:items-start md:justify-between md:px-36">
        <div className="my-10">
          <Logo />
        </div>
        <nav className="md:flex md:text-left md:justify-evenly gap- w-1/2">
          {routes.map((route, index) => (
            <div key={index} className="footer-group">
              <h3 className="text-white my-4 font-semibold">{route.group}</h3>
              <ul>
                {route.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href="/" className="text-gray hover:text-blue-400">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="flex justify-center gap-6 my-4">
          <a href="/">
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a href="/">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="/">
            <img src={pinterestIcon} alt="Pinterest" />
          </a>
          <a href="/">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
