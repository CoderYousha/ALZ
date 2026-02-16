import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useReveal from "../hooks/UseReval";

function Contacts() {
    const revealRef = useReveal();
    return (
        <Box ref={revealRef} id="contact" className="reveal">
            <Box className="container-fluid">
                <Box className="row">
                    <Box className="col-md-6">

                    </Box>
                    <Box className="col-md-6">
                        <Box className="contact-info">
                            <Typography variant="h2" className="text-start">تواصل معنا</Typography>
                            <Typography variant="body1" className="text-start" dir="rtl">
                                نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو دعم، وسنعود إليك في أقرب فرصة.
                            </Typography>
                            <Typography variant="h3" className="mt-5"><i className="fa fa-map-marker"></i>123 Drones Tower, Los Angeles, CA, USA</Typography>
                            <Typography variant="h3"><i className="fa fa-envelope"></i>email@example.com</Typography>
                            <Typography variant="h3"><i className="fa fa-phone"></i>+123-456-7890</Typography>
                            <a className="btn" href="https://htmlcodex.com/contact">تواصل معنا</a>
                            <Box className="social">
                                <a className="contact-a-hover" href="https://twitter.com/htmlcodex"><i className="fab fa-twitter"></i></a>
                                <a className="contact-a-hover" href="https://facebook.com/htmlcodex"><i className="fab fa-facebook-f"></i></a>
                                <a className="contact-a-hover" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="contact-a-hover" href=""><i className="fab fa-instagram"></i></a>
                                <a className="contact-a-hover" href=""><i className="fab fa-youtube"></i></a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Contacts;