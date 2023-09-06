import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

export default function Animations({ loading }) {

    const style = {
        display: loading ? "flex" : "none",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndez: '5',
        backdropFilter: "blur(10px)"
    }

    return (
        <Box style={style}>
            <CircularProgress color="secondary" />
        </Box>
    );
}