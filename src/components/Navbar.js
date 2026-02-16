import Logo from '../images/logo.png';
import Box from '@mui/material/Box';

function Navbar() {
    return (
        <Box id="nav">
            <Box className="navbar navbar-expand-md bg-light navbar-light">
                <a href="https://htmlcodex.com/product-landing-page-template" className="navbar-brand">
                    <img src={Logo} className='w-24' />
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Box className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="#header1" className="nav-link !text-lg">الرئيسية</a></li>
                        <li className="nav-item"><a href="#aboutus" className="nav-link !text-lg">من نحن</a></li>
                        <li className="nav-item"><a href="#feature" className="nav-link !text-lg">الخدمات</a></li>
                        <li className="nav-item"><a href="#products" className="nav-link !text-lg">الفئات</a></li>
                        <li className="nav-item"><a href="#faqs" className="nav-link !text-lg">الأسئلة الشائعة</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link !text-lg">تواصل معنا</a></li>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
}

export default Navbar;