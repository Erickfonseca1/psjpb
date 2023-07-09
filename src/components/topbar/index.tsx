import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

const Topbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{fleGrow: 1}}
                    >
                        PSJPB/
                    </Typography>
                    <Button color="inherit">Home</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Topbar