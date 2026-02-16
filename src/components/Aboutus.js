import Box from '@mui/material/Box';
import AboutusImage from '../images/aboutus.jpg';
import Typography from '@mui/material/Typography';
import useReveal from '../hooks/UseReval';

function Aboutus() {
    const revealRef = useReveal();
    return (
        <Box ref={revealRef} id='aboutus' dir='rtl' className='reveal'>
            <Box className="container" dir='rtl'>
                <Box className="section-header">
                    <Typography variant='h1'>من نحن</Typography>
                </Box>
                <img src={AboutusImage} alt="About Us Image" className='w-1/3 rounded-lg float-left max-sm:w-full max-sm:float-none max-sm:mb-5' />
                <Box className='text-lg text-start w-6/12 max-sm:w-full' dir='rtl'>
                    تُعد ALZ SHOCK شريككم الموثوق في مجال المنتجات الكهربائية عالية الجودة، ملتزمين بدعم التقدم في مختلف القطاعات الصناعية والتجارية والسكنية. منذ انطلاقنا، بنينا سمعة قوية قائمة على الموثوقية، والأسعار التنافسية، وخدمة العملاء المتميزة.

                    نحن متخصصون في توريد وتزويد مجموعة واسعة من الحلول الكهربائية، بما في ذلك القواطع الكهربائية، لوحات التوزيع، الكابلات وملحقات التوصيل، أنظمة التحكم الصناعية، حلول الإضاءة، وغيرها من المكونات الكهربائية الأساسية. يتم توريد منتجاتنا من مصنعين عالميين موثوقين، مع الالتزام الكامل بمعايير الجودة والسلامة الدولية.

                    مدفوعين بالابتكار وفهم عميق لصناعة الكهرباء، نعمل عن كثب مع عملائنا لتقديم حلول مخصصة تلبي احتياجاتهم الخاصة. سواء كانت مشاريع صناعية كبيرة، أو منشآت تجارية، أو مشاريع سكنية، فإن خبرتنا تضمن توفيرًا سلسًا ودعمًا متكاملاً من البداية حتى النهاية.

                    ALZ SHOCK ليست مجرد شركة — بل شريك يعتمد عليه، ملتزم بدعم نجاحكم من خلال منتجات عالية الجودة، وتسليم في الوقت المحدد، وخدمة احترافية، والأهم من ذلك توفير حلول تضمن أعلى مستويات الأمان والأداء.
                </Box>
            </Box>
        </Box>
    );
}

export default Aboutus;