import Box from '@mui/material/Box';
import BackgroundImage2 from '../images/background2.jpg';
import Typography from '@mui/material/Typography';
import useReveal from '../hooks/UseReval';

function Services() {
    const revealRef = useReveal();

    return (
        <Box ref={revealRef} className="reveal" id="feature" dir='rtl'>
            <Box className="container">
                <Box id='services' className="section-header">
                    <Typography variant='h1'>الخدمات</Typography>
                </Box>
                <Box className="row align-items-center">
                    <Box className="col-md-4">
                        <Box className="product-feature">
                            <Box className="product-content">
                                <Typography variant='h2'>توريد الأنظمة الكهربائية</Typography>
                                <Typography variant='body1'>توفير قواطع وأجهزة حماية وحلول توزيع بجودة صناعية معتمدة</Typography>
                            </Box>
                            <Box className="product-icon">
                                <i className="fa fa-truck"></i>
                            </Box>
                        </Box>
                        <Box className="product-feature">
                            <Box className="product-content">
                                <Typography variant='h2'>تصميم أنظمة الحماية</Typography>
                                <Typography variant='body1'>إعداد حلول كهربائية متكاملة حسب احتياجات المشروع</Typography>
                            </Box>
                            <Box className="product-icon">
                                <i className="fa fa-lock"></i>
                            </Box>
                        </Box>
                        <Box className="product-feature">
                            <Box className="product-content">
                                <Typography variant='h2'>تركيب وتشغيل</Typography>
                                <Typography variant='body1'>تنفيذ احترافي وفق أعلى المعايير الفنية</Typography>
                            </Box>
                            <Box className="product-icon">
                                <i className="fa fa-cogs"></i>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-md-4">
                        <Box className="product-img">
                            <img src={BackgroundImage2} alt="Product Image" />
                        </Box>
                    </Box>
                    <Box className="col-md-4">
                        <Box className="product-feature">
                            <Box className="product-icon">
                                <i className="fa fa-wrench"></i>
                            </Box>
                            <Box className="product-content">
                                <Typography variant='h2'>الصيانة والدعم الفني</Typography>
                                <Typography variant='body1'>خدمة مستمرة لضمان استقرار وأمان التشغيل</Typography>
                            </Box>
                        </Box>
                        <Box className="product-feature">
                            <Box className="product-icon">
                                <i className="fa fa-drafting-compass"></i>
                            </Box>
                            <Box className="product-content">
                                <Typography variant='h2'>استشارات هندسية</Typography>
                                <Typography variant='body1'>مساعدة فنية لاختيار النظام الأنسب لكل تطبيق</Typography>
                            </Box>
                        </Box>
                        <Box className="product-feature">
                            <Box className="product-icon">
                                <i className="fa fa-project-diagram"></i>
                            </Box>
                            <Box className="product-content">
                                <Typography variant='h2'>تلبية احتياجات المشاريع</Typography>
                                <Typography variant='body1'>توريد سريع والتزام كامل بالجداول الزمنية</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Services;