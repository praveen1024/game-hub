import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { P } from 'framer-motion/dist/types.d-CtuPurYT'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import { Platform } from './hooks/useGames'
import { Genre } from './hooks/useGenres'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string
}

function App() {

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);


  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
  >
    <GridItem area='nav' ><NavBar /></GridItem>
    <Show above='lg'><GridItem area='aside' paddingX={5}>
      {/* <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} /> */}
      <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
    </GridItem>
    </Show>
    <GridItem area='main' >
      {/* <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} /> */}
      <Flex paddingLeft={2} marginBottom={4} >
        <Box marginRight={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        </Box>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      </Flex>
      <GameGrid gameQuery={gameQuery} />
      {/* <GameGrid selectedPlatform={gameQuery.platform} selectedGenre={gameQuery.genre} /> */}
      {/* <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} /> */}
    </GridItem>
  </Grid>
}

export default App
