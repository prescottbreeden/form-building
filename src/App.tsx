import { Typography } from "@mui/material";
import { Box } from "@looker/components";
import { Providers } from "./Providers";

// exercise component entry point
// import { Solution } from "./1/solution";
import { Solution } from "./2/solution";
// import { Exercise } from "./3/exercise";


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
          <Solution />
        </Box>
      </Box>
    </Providers>
  );
}

export default App;
