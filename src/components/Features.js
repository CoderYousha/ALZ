import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Features() {
    return (
        <Box id="feature-mini">
            <Box className="container">
                <Box className="row align-items-center">
                    <Box className="col-md-3 col-sm-6 hover-features">
                        <Box className="feature-item">
                            <i className="fa fa-shield-alt"></i>
                            <Typography variant="h3" className='text-white'>الحماية</Typography>
                        </Box>
                    </Box>
                    <Box className="col-md-3 col-sm-6 hover-features">
                        <Box className="feature-item">
                            <i className="fa fa-check-circle"></i>
                            <Typography variant="h3" className='text-white'>الاعتمادية</Typography>
                        </Box>
                    </Box>
                    <Box className="col-md-3 col-sm-6 hover-features">
                        <Box className="feature-item">
                            <i className="fa fa-tools"></i>
                            <Typography variant="h3" className='text-white'>التطبيقات الصناعية</Typography>
                        </Box>
                    </Box>
                    <Box className="col-md-3 col-sm-6 hover-features">
                        <Box className="feature-item">
                            <i className="fa fa-industry"></i>
                            <Typography variant="h3" className='text-white'>الجودة والتصنيع</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Features;