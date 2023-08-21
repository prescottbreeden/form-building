import { Box, Typography } from "@mui/material";
// import { Exercise1 } from "./1/exercise/Exercise1";
// import { Exercise2 } from "./2/exercise/Exercise2";
//
import { CreateUser } from "./3/solution/CreateUser";

function App() {
  return (
    <Box padding="2rem">
      <Typography variant="h1">Form Workshop</Typography>
      <Box
        width="30rem"
        padding="2rem"
        border="1px solid purple"
        borderRadius="5px"
        my="1rem"
      >
        <CreateUser />
      </Box>
    </Box>
  );
}

export default App;
