import { Link } from 'react-router-dom';
import logo from '../../assets/Build Right logo.png'
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <Link to='/'><img className='h-14' src={logo} alt="build right logos" /></Link>
                <p className='text-xl font-semibold'>Build Right LLC.</p>
                <p>Helping Students to learn Construction</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Info</span>
                <a className="link link-hover">Developer: Saidul Islam</a>
                <a className="link link-hover">Email: saidultd@gmail.com</a>
                <a className="link link-hover" href='https://www.linkedin.com/in/saiduldev/'><FaLinkedin /> </a>
            </div>
        </footer>
    );
};

export default Footer;