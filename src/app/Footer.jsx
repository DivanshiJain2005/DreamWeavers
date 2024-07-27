import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        <footer className="mt-20 py-10 flex-col align-middle bg-blue-400">
        <div className="flex justify-center">
          <div className="mr-5">
            <SocialIcon url="#" />
          </div>
          <div className="mr-5">
            <SocialIcon url="https://www.linkedin.com/in/" />
          </div>
          <div className="mr-5">
            <SocialIcon url="https://github.com/" />
          </div>
        </div>
        <div className="pt-12 text-center">
          Made with &#10084; by Dream Weavers | Copyright | Privacy terms | Code Cubicles 2.0 2024
        </div>
      </footer>
    );
  };
  
  export default Footer;
  