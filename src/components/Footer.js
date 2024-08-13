import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
       <Box className='bg-black px-2 py-10 text-white text-center'>
        <Container>
            <Typography>
            Copyright © 2024 - All right reserved by Suria Sultana
            </Typography>
        </Container>
       </Box>
    );
};

export default Footer;