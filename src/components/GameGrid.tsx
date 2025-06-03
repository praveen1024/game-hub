import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {

    const { games, error } = useGames();

    return (
        <>{error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10}  >
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    )
}

//     return (
//         <>{error && <Text>{error}</Text>}
//             <ul>
//                 {games.map(game => <li key={game.id}>{game.name}</li>)}
//             </ul>
//         </>
//     )
// }

export default GameGrid