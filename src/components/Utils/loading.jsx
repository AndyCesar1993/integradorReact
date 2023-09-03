import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

export default function Animations() {
    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            height: "90vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}

        >
            <CircularProgress />
        </Box>
    );
}