import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {

    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>{error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding='10px'
                spacing={10}
            >
                {isLoading &&
                    skeletons.map(skeleton => (
                        <GameCardContainer>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {games.map(game => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
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