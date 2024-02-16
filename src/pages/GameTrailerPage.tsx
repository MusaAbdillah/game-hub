import { PropsOf, Spinner } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
    slug: string;
}


const GameTrailerPage = ({slug}: Props) => {

    // fetching game trailer if game already loaded
    const {data: trailer, isLoading, error} = useGameTrailers(slug!);
    if (isLoading) return <Spinner />;  
    if (error || !trailer) throw error;

    const first = trailer.results[0]

    return first ?  (
        <>
            <video 
            src={first.data.max}
            poster={first.preview}
            controls
            />
        </>
        ) : null
}

export default GameTrailerPage
