import { Box, Header } from "@looker/components";
import { BasicForm } from "./exercises/ex1/BasicForm";
import {CreateSettings} from "./exercises/ex4/CreateSettings";

function App() {
  return (
    <Box padding="2rem">
      <Header>Form Workshop</Header>
      <Box
        width="30rem"
        padding="2rem"
        border="1px solid purple"
        borderRadius="5px"
      >
        <BasicForm />
      </Box>
      <Box
        width="30rem"
        padding="2rem"
        border="1px solid purple"
        borderRadius="5px"
      >
        <CreateSettings />
      </Box>
    </Box>
  );
}

export default App;
