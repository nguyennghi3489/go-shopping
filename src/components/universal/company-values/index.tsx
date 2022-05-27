import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ImagePlaceHolder } from "../image-placeholder";
import styles from "./company-values.module.scss";
import { Container } from "../container";

export const CompanyValues = () => {
    return (
        <Container>
            <Typography variant="h4" component="h3" gutterBottom>
                Company Values
            </Typography>
            <Typography
                variant="body1"
                component="p"
                gutterBottom
                marginBottom={4}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Grid container spacing={2} rowSpacing={{ xs: 4 }}>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm>
                            <ImagePlaceHolder width="150px" height="100px" />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography
                                variant="subtitle2"
                                component="h3"
                                gutterBottom
                                textAlign="left"
                                fontWeight={700}
                            >
                                Company Values
                            </Typography>
                            <Typography
                                variant="body2"
                                component="p"
                                gutterBottom
                                textAlign="left"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm>
                            <ImagePlaceHolder width="150px" height="100px" />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography
                                variant="subtitle2"
                                component="h3"
                                gutterBottom
                                textAlign="left"
                                fontWeight={700}
                            >
                                Company Values
                            </Typography>
                            <Typography
                                variant="body2"
                                component="p"
                                gutterBottom
                                textAlign="left"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm>
                            <ImagePlaceHolder width="150px" height="100px" />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography
                                variant="subtitle2"
                                component="h3"
                                gutterBottom
                                textAlign="left"
                                fontWeight={700}
                            >
                                Company Values
                            </Typography>
                            <Typography
                                variant="body2"
                                component="p"
                                gutterBottom
                                textAlign="left"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
