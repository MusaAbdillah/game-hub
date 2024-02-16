interface GameTrailerData{
    480: string;
    max: string;
}

export default interface GameTrailer {
    id: number;
    name: string;
    preview: string;
    data: {480: string, max: string};
}