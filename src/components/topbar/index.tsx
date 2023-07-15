import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import * as S from './styles';

const Topbar = () => {
    return (
        <S.Wrapper>
            <Box>
                <AppBar
                    position="static"
                    sx={{backgroundColor: 'rgb(11, 110, 79)'}}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1}}
                        >
                            Paróquia São José |
                        </Typography>
                        <Button color="inherit">Página inicial</Button>
                        <Button color="inherit" disabled>Pastorais</Button>
                        <Button color="inherit" disabled>Notícias</Button>
                        <Button color="inherit" disabled>Galeria</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </S.Wrapper>

    )
}

export default Topbar