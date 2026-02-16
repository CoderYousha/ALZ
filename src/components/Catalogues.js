import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useReveal from "../hooks/UseReval";
import Catalogue1Image from '../images/catalogue/catalogue1.jpg';
import Catalogue2Image from '../images/catalogue/catalogue2.jpg';

function Catalogues() {
    const revealRef = useReveal();

    const openPdf = (filePath) => {
        window.open( filePath, "_blank");
    }

    return (
        <Box ref={revealRef} className='reveal' id="catalogues">
            <Box className="container">
                <Box className="section-header">
                    <Typography variant='h1'>الكتلوغ</Typography>
                </Box>
                <Box className="flex justify-around">
                    <Box className="card relative w-1/3 border-none">
                        <Box className="card-inner cursor-pointer" onClick={() => openPdf('/files/catalogue1.pdf')}>
                            <Box className="front-face">
                                <img src={Catalogue1Image} className="rounded-xl cursor-pointer" />
                            </Box>
                            <Box className="back-face bg-red-300 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                                <Typography variant="h5" fontWeight={800} className="text-center text-white max-sm:!text-sm">TECHNICAL DATA SHEET</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="card w-1/3 border-none">
                        <Box className="card-inner cursor-pointer" onClick={() => openPdf('/files/catalogue2.pdf')}>
                            <Box className="front-face">
                                <img src={Catalogue2Image} className="rounded-xl cursor-pointer" />
                            </Box>
                            <Box className="back-face bg-red-300 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                                <Typography variant="h5" fontWeight={800} className="text-center text-white max-sm:!text-sm">TECHNICAL CATALOGUE DISTRIBUTION BOXES</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Catalogues;