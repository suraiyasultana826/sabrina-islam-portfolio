import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const Education = () => {
    return (
        <div id="/education">
            
                 <Stack className="text-center justify-center my-10"
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  <Box className='border-blue-700'>
  <Card sx={{ minWidth: 275 }}>
      <CardContent  className="border-blue-700" >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        B.Sc. in Geography & Environment (2023- on going)
        </Typography>
        <Typography variant="h5" component="div">
        Jagannath University <br></br> (JnU)
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        CGPA- 3.94

        </Typography>
      </CardContent>
    </Card>
  </Box>
  <Box>
  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        HSC in science 2022
        </Typography>
        <Typography variant="h5" component="div">
        Bir Shreshtha Noor <br></br> Mohammad Public College (BNMPC) 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        GPA-5 

        </Typography>
      </CardContent>
    </Card>
  </Box>
  <Box>
  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        SSC in science 2020
        </Typography>
        <Typography variant="h5" component="div">
        Mohammadpur Preparatory <br></br> School & College (MPSC) 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        GPA-5 

        </Typography>
      </CardContent>
    </Card>
  </Box>
</Stack>
        </div>
    );
};

export default Education;