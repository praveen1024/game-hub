import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames, { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {

    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return (<Text>{error}</Text>);

    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding='10px'
            spacing={5}
        >
            {isLoading &&
                skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
            {data.map(game => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    )
}

// interface Props {
//     selectedGenre: Genre | null;
//     selectedPlatform: Platform | null;
// }

// const GameGrid = ({ selectedPlatform, selectedGenre }: Props) => {

//     const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
//     const skeletons = [1, 2, 3, 4, 5, 6];

//     return (
//         <>
//             {error && <Text>{error}</Text>}
//             <SimpleGrid
//                 columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
//                 padding='10px'
//                 spacing={3}
//             >
//                 {isLoading &&
//                     skeletons.map(skeleton => (
//                         <GameCardContainer key={skeleton}>
//                             <GameCardSkeleton />
//                         </GameCardContainer>
//                     ))}
//                 {data.map(game => (
//                     <GameCardContainer key={game.id}>
//                         <GameCard game={game} />
//                     </GameCardContainer>
//                 ))}
//             </SimpleGrid>
//         </>
//     )
// }

//     return (
//         <>{error && <Text>{error}</Text>}
//             <ul>
//                 {games.map(game => <li key={game.id}>{game.name}</li>)}
//             </ul>
//         </>
//     )
// }

export default GameGrid