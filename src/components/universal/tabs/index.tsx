import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import MuiTabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { productsData } from "../../../data/products";
import { ProductList } from "../product-list";

interface TabPanelProps {
    children: ReactNode;
    value: number;
    index: number;
}
export const TabPanel = ({ value, index, children }: TabPanelProps) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

export const Tabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <Box>
            <MuiTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                <MuiTab label="Item One" />
                <MuiTab label="Item Two" />
                <MuiTab label="Item Three" />
            </MuiTabs>
            <TabPanel value={value} index={0}>
                <ProductList products={productsData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Hello Wolrd 123
            </TabPanel>
            <TabPanel value={value} index={2}>
                Hello Wolrd 456
            </TabPanel>
        </Box>
    );
};
