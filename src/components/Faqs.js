import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useReveal from "../hooks/UseReval";

function Faqs() {
    const revealRef = useReveal();
    return (
        <Box ref={revealRef} id="faqs" className='reveal'>
            <Box className="container">
                <Box className="section-header">
                    <Typography variant="h1">الأسئلة الشائعة</Typography>
                </Box>
                <Box className="row align-items-center">
                    <Box className="col-md-6" dir='rtl'>
                        <Box className="faqs-text" dir='rtl'>
                            <Typography variant="h2" className='text-start'>الأسئلة الشائعة</Typography>
                            <Typography variant="body1" className='text-start'>
                                نجيب هنا إجابات على أكثر الأسئلة شيوعا حول منتجات شوبيك ALZ، المواصفات الفنية، طرق التركيب، وضمان الجودة، لمساعدتكم على اختيار الحل الكهربائي المناسب بثقة وأمان.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-md-6" dir="rtl">
                        <Box id="accordion">
                            <Box className="card">
                                <Box className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                                        ما هي المنتجات التي تقدمها شوبيك ALZ؟
                                    </a>
                                </Box>
                                <Box id="collapseOne" className="collapse show" data-parent="#accordion">
                                    <Box className="card-body text-start">
                                        نقدم مجموعة متكاملة من القواطع الكهربائية، أجهزة الحماية من زيادة وانخفاض الجهد، وحدات التحكم، وأنظمة التوزيع الكهربائي المناسبة للتطبيقات السكنية والصناعية والتجارية.
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                                        هل منتجاتكم مطابقة لمعايير الجودة الدولية؟
                                    </a>
                                </Box>
                                <Box id="collapseTwo" className="collapse" data-parent="#accordion">
                                    <Box className="card-body text-start">
                                        نعم، جميع منتجات شوبيك ALZ مصممة ومختبرة وفق معايير جودة معتمدة لضمان أعلى مستويات الأمان والأداء.
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#collapseThree">
                                        ما الفرق بين القاطع العادي وجهاز الحماية من الجهد؟
                                    </a>
                                </Box>
                                <Box id="collapseThree" className="collapse" data-parent="#accordion">
                                    <Box className="card-body text-start">
                                        القاطع الكهربائي يفصل التيار عند حدوث حمل زائد أو قصر كهربائي، بينما جهاز الحماية من الجهد يحمي الأجهزة من ارتفاع أو انخفاض الجهد المفاجئ.
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#collapseFour">
                                        هل يمكن استخدام منتجاتكم في المشاريع الصناعية الكبيرة؟
                                    </a>
                                </Box>
                                <Box id="collapseFour" className="collapse" data-parent="#accordion" dir='rtl'>
                                    <Box className="card-body text-start">
                                        بالتأكيد، منتجاتنا مناسبة للمشاريع الصناعية والتجارية الكبرى، وتتميز بقدرتها على العمل بكفاءة في البيئات الصعبة.
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Faqs;