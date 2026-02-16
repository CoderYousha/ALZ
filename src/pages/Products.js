import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Category1Image from '../images/categories/category1.png';
import Category2Image from '../images/categories/category2.png';
import Category3Image from '../images/categories/category3.png';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

function Products() {
    return (
        <Box className="py-3">
            <Box className="grid grid-cols-4 gap-3 w-full px-5 py-5 max-sm:grid-cols-1">
                <Box className="card1 relative border-none">
                    <Box className="card-inner cursor-pointer bg-white rounded-xl">
                        <Box className="front-face">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={Category1Image}
                                className="w-full h-72"
                            />
                            <Typography variant="h6" fontWeight={800} className="!text-start p-2" dir="rtl">قاطع نوع أول</Typography>
                            <Typography variant="h5" fontWeight={800} className="!text-start p-2" dir="rtl">السعر: 40$</Typography>
                        </Box>
                        <Box className="back-face !bg-red-400 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                            <Typography variant="body1" className="text-start text-white" dir="rtl">معلومات عن القطعة الكهربائية التالية</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="card1 relative border-none">
                    <Box className="card-inner cursor-pointer bg-white rounded-xl">
                        <Box className="front-face">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={Category1Image}
                                className="w-full h-72"
                            />
                            <Typography variant="h6" fontWeight={800} className="!text-start p-2" dir="rtl">قاطع نوع أول</Typography>
                            <Typography variant="h5" fontWeight={800} className="!text-start p-2" dir="rtl">السعر: 40$</Typography>
                        </Box>
                        <Box className="back-face !bg-red-400 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                            <Typography variant="body1" className="text-start text-white" dir="rtl">معلومات عن القطعة الكهربائية التالية</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="card1 relative border-none">
                    <Box className="card-inner cursor-pointer bg-white rounded-xl">
                        <Box className="front-face">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={Category1Image}
                                className="w-full h-72"
                            />
                            <Typography variant="h6" fontWeight={800} className="!text-start p-2" dir="rtl">قاطع نوع أول</Typography>
                            <Typography variant="h5" fontWeight={800} className="!text-start p-2" dir="rtl">السعر: 40$</Typography>
                        </Box>
                        <Box className="back-face !bg-red-400 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                            <Typography variant="body1" className="text-start text-white" dir="rtl">معلومات عن القطعة الكهربائية التالية</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="card1 relative border-none">
                    <Box className="card-inner cursor-pointer bg-white rounded-xl">
                        <Box className="front-face">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={Category1Image}
                                className="w-full h-72"
                            />
                            <Typography variant="h6" fontWeight={800} className="!text-start p-2" dir="rtl">قاطع نوع أول</Typography>
                            <Typography variant="h5" fontWeight={800} className="!text-start p-2" dir="rtl">السعر: 40$</Typography>
                        </Box>
                        <Box className="back-face !bg-red-400 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                            <Typography variant="body1" className="text-start text-white" dir="rtl">معلومات عن القطعة الكهربائية التالية</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="card1 relative border-none">
                    <Box className="card-inner cursor-pointer bg-white rounded-xl">
                        <Box className="front-face">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={Category1Image}
                                className="w-full h-72"
                            />
                            <Typography variant="h6" fontWeight={800} className="!text-start p-2" dir="rtl">قاطع نوع أول</Typography>
                            <Typography variant="h5" fontWeight={800} className="!text-start p-2" dir="rtl">السعر: 40$</Typography>
                        </Box>
                        <Box className="back-face !bg-red-400 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                            <Typography variant="body1" className="text-start text-white" dir="rtl">معلومات عن القطعة الكهربائية التالية</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="card1 relative border-none">
                    <Box className="card-inner cursor-pointer bg-white rounded-xl">
                        <Box className="front-face">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={Category1Image}
                                className="w-full h-72"
                            />
                            <Typography variant="h6" fontWeight={800} className="!text-start p-2" dir="rtl">قاطع نوع أول</Typography>
                            <Typography variant="h5" fontWeight={800} className="!text-start p-2" dir="rtl">السعر: 40$</Typography>
                        </Box>
                        <Box className="back-face !bg-red-400 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                            <Typography variant="body1" className="text-start text-white" dir="rtl">معلومات عن القطعة الكهربائية التالية</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="card1 relative border-none">
                    <Box className="card-inner cursor-pointer bg-white rounded-xl">
                        <Box className="front-face">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={Category1Image}
                                className="w-full h-72"
                            />
                            <Typography variant="h6" fontWeight={800} className="!text-start p-2" dir="rtl">قاطع نوع أول</Typography>
                            <Typography variant="h5" fontWeight={800} className="!text-start p-2" dir="rtl">السعر: 40$</Typography>
                        </Box>
                        <Box className="back-face !bg-red-400 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                            <Typography variant="body1" className="text-start text-white" dir="rtl">معلومات عن القطعة الكهربائية التالية</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="card1 relative border-none">
                    <Box className="card-inner cursor-pointer bg-white rounded-xl">
                        <Box className="front-face">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={Category1Image}
                                className="w-full h-72"
                            />
                            <Typography variant="h6" fontWeight={800} className="!text-start p-2" dir="rtl">قاطع نوع أول</Typography>
                            <Typography variant="h5" fontWeight={800} className="!text-start p-2" dir="rtl">السعر: 40$</Typography>
                        </Box>
                        <Box className="back-face !bg-red-400 absolute top-0 w-full h-full rounded-xl flex justify-center items-center">
                            <Typography variant="body1" className="text-start text-white" dir="rtl">معلومات عن القطعة الكهربائية التالية</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="w-full flex justify-center">
                <Stack className='' spacing={2}>
                    <Pagination count={10} color="standard" />
                </Stack>
            </Box>
        </Box >
    );
}

export default Products;