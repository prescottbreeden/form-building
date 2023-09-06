import { Box, Typography } from "@mui/material";
import { Providers } from "./Providers";
// import { Exercise } from "./1/exercise";
// import { Exercise } from "./2/exercise";
// import { Exercise } from "./3/exercise";

// import { Solution } from "./1/solution";
// import { Solution } from "./2/solution";
import { Solution } from "./3/solution";

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
