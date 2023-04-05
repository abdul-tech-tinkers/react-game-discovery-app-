import axios from "axios";
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from "./game-hub/components/NavBar";
function App() {
  return(
   <Grid templateAreas={{
                  base:`"nav" "main"`,
                  lg:`"nav   nav"
                      "aside main"`
                  }}>
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <Show above="lg">
        <GridItem area="aside" >Aside</GridItem>
        </Show>
        <GridItem area="main">Main</GridItem>
        </Grid>

  )
}

export default App;
