import { Box, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";

const Experience = () => {
    return (
        <div id="/experience">
            <div className="bg-slate-200 py-10">
                <h1 className="text-center font-bold my-10 md:text-5xl">
                    EXPERIENCES
                </h1>
                <div className="md:flex bg-slate-200 md:w-[90%] md:mx-auto md:gap-x-10">
                    <Stack spacing={10}>
                        <Card  sx={{ minWidth: 275 }}>
                            <CardContent className="bg-slate-200 h-500px">
                                <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Campus Ambassador
                                </Typography>
                                <Typography variant="h5" component="div">
                                G17 UAC Bangladesh
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                (2024-till now)
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent className="bg-slate-200">
                                <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                General Member

                                </Typography>
                                <Typography variant="h5" component="div">
                                Debating Club of Jagannath University (GEO)
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                (2024-till now)
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent className="bg-slate-200">
                                <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Head of IT at
                                </Typography>
                                <Typography variant="h5" component="div">
                                WOOW-Work for Orientation & Organizing the World
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                (2022-2023)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                    <Stack spacing={10}>
                    <Card sx={{ minWidth: 275 }}>
                            <CardContent className="bg-slate-200">
                                <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                General Secretary at
                                </Typography>
                                <Typography variant="h6" component="div">
                                Bir Shreshtha Noor Mohammad Public College IT Club
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                (2022-2023)
                                </Typography>
                            </CardContent>
                        </Card> <Card sx={{ minWidth: 275 }}>
                            <CardContent className="bg-slate-200">
                                <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Volunteer at
                                </Typography>
                                <Typography variant="h6" component="div">
                                Bir Shreshtha Noor Mohammad Public College IT Club
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                (2021-2022)

                                </Typography>
                            </CardContent>
                        </Card> <Card sx={{ minWidth: 275 }}>
                            <CardContent className="bg-slate-200">
                                <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Volunteer at
                                </Typography>
                                <Typography variant="h6" component="div">
                                Bir Shreshtha Noor Mohammad Public College Science Club
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                (2021-2022)

                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default Experience;