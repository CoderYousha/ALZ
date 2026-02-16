import Box from '@mui/material/Box';
import Category1Image from '../images/categories/category1.png';
import Category2Image from '../images/categories/category2.png';
import Category3Image from '../images/categories/category3.png';
import Category4Image from '../images/categories/category4.png';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import useReveal from '../hooks/UseReval';
import CardMedia from '@mui/material/CardMedia';

function Categories() {
    const revealRef = useReveal();
    return (
        <Box ref={revealRef} id="products" className='reveal'>
            <Box className="container">
                <Box className="section-header">
                    <Typography variant='h1'>الفئات</Typography>
                </Box>
                <Box className="row align-items-center">
                    <Box className="col-lg-3 col-md-6">
                        <Box className="product-single category-hover">
                            <Box className="product-title">
                                <Typography variant='h2'>القواطع الكهربائية</Typography>
                            </Box>
                            <Box className="product-img">
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={Category1Image}
                                    className="w-full h-72"
                                />
                            </Box>
                            <Box className="product-footer">
                                <a className="btn" href="#">عرض المنتجات</a>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-lg-3 col-md-6">
                        <Box className="product-single category-hover">
                            <Box className="product-title">
                                <Typography variant='h2'>أجهزة حماية الجهد</Typography>
                            </Box>
                            <Box className="product-img">
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={Category2Image}
                                    className="w-full h-72"
                                />
                            </Box>
                            <Box className="product-footer">
                                <a className="btn" href="#">عرض المنتجات</a>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-lg-3 col-md-6">
                        <Box className="product-single category-hover">
                            <Box className="product-title">
                                <Typography variant='h2'>مرحلات الحماية</Typography>
                            </Box>
                            <Box className="product-img">
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={Category3Image}
                                    className="w-full h-72"
                                />
                            </Box>
                            <Box className="product-footer">
                                <a className="btn" href="#">عرض المنتجات</a>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-lg-3 col-md-6">
                        <Box className="product-single category-hover">
                            <Box className="product-title">
                                <Typography variant='h2'>وحدات المراقبة والإشارة</Typography>
                            </Box>
                            <Box className="product-img">
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={Category4Image}
                                    className="w-full h-72 max-sm:w-1/3 max-sm:h-60"
                                />
                            </Box>
                            <Box className="product-footer">
                                <a className="btn" href="#">عرض المنتجات</a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="w-full flex justify-center">
                <Stack className='max-sm:text-sm' spacing={2}>
                    <Pagination className='max-sm:!text-sm' count={10} color="standard" />
                </Stack>
            </Box>
        </Box>
    );
}
export default Categories;