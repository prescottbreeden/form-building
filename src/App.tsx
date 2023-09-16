import { Typography } from "@mui/material";
import { Box } from "@looker/components";
import { Providers } from "./Providers";

// exercise component entry point
import { Exercise } from "./1/exercise/";
// import { Exercise } from "./2/exercise/";
// import { Exercise } from "./3/exercise/";
// import { Exercise } from "./4/exercise/";

function App() {
  return (
    <Providers>
      <Box padding="2rem">
        <Typography variant="h1">Form Workshop</Typography>
        <Box
          width="30rem"
          padding="2rem"
          border="1px solid purple"
          borderRadius="5px"
          my="1rem"
        >
          <Exercise />
        </Box>
      </Box>
    </Providers>
  );
}

export default App;
