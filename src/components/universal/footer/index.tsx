import { Apple as AppleIcon } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./footer.module.scss";

export const Footer = () => {
    return (
        <div>
            <div className={styles.logoAndRegister}>
                <AppleIcon />
                <Box className={styles.register}>
                    <Box className={styles.registerInput}>
                        <TextField
                            id="standard-search"
                            label="Input your email"
                            type="search"
                            size="small"
                            fullWidth
                        />
                    </Box>
                    <Button variant="contained">Register</Button>
                </Box>
            </div>
            <div className={styles.socialsAndCopyright}>
                <Box className={styles.socials}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </Box>
                <Typography>Copyright by NguyenNghi</Typography>
            </div>
        </div>
    );
};
