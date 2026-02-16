import Box from '@mui/material/Box';
import BackgroundImage1 from '../images/background1.jpg';

function Header() {
    return (
        <Box id="header1" className=''>
            <Box className="">
                <img src={BackgroundImage1} className='w-full max-sm:h-[450px]' style={{}} />
            </Box>
        </Box>
    );
}

export default Header;