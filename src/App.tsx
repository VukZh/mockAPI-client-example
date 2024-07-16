import './App.css'
import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import Main from "./pages/main/Main.tsx";

function App() {

  return (
    <MantineProvider defaultColorScheme="dark">
      <Main/>
    </MantineProvider>
  )
}

export default App
