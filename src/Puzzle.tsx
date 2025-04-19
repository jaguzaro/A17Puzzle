import { useState, useRef, useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./Puzzle.css";
import { Box, Progress, VStack, Image, Text } from "@chakra-ui/react";
import loadinGif from "./assets/penguin.gif";
import myGif from "./assets/my.gif"

function Puzzle() {
    const [progress, setProgress] = useState(0);
    const [puzzleSolved, setPuzzleSolved] = useState(0);
    const solvedOnce = useRef(false);

    useEffect(() => {
        solvedOnce.current = false;
    }, [puzzleSolved]);

    const images = [
        "https://i.ibb.co/HfhSX6wB/1.jpg",
        "https://i.ibb.co/0Vz6VX8h/5.jpg",
        "https://i.ibb.co/QzrNr8f/2.jpg",
        "https://i.ibb.co/DJjwHnG/3.jpg"

    ]

    return (
        <>
            <VStack height="80%" alignItems="center" justifyContent="center">
                {puzzleSolved < images.length ? (
                    <Box
                        bg="#011627"
                        justifyContent="center"
                        alignItems="center"
                        width="40rem"
                        border="1px solid black"
                        borderRadius="10px"
                        borderColor="rgba(99,179,237,1)"
                    >

                        <JigsawPuzzle
                            imageSrc={images[puzzleSolved]}
                            rows={2}
                            columns={2}
                            onSolved={() => {
                                if (solvedOnce.current) return;
                                solvedOnce.current = true;
                                setProgress(prev => Math.min(100, prev + 25));
                                setTimeout(() => {
                                    setPuzzleSolved(prev => prev + 1)
                                }, 3000)
                            }}
                        />
                    </Box>
                ) : (
                    <Box>
                        <Image
                            src={myGif}
                            boxSize="300px"
                            objectFit="contain"
                            alt="¡Completaste todos los puzzles!"
                        />
                        <Text color={"white"}>Lo siento mucho en serio, te extraño.</Text>
                    </Box>


                )
                }

            </VStack>

            <VStack height="20%" alignItems="center" justifyContent="center">
                <Box width="80%" position="relative">
                    <Progress.Root value={progress} size="xl" width="100%">
                        <Progress.Track bgColor="white">
                            <Progress.Range
                                bgColor="rgba(99,179,237,1)"
                                transition="width 3s ease-in-out"
                            />
                        </Progress.Track>
                    </Progress.Root>

                    <Image
                        src={loadinGif}
                        boxSize="50px"
                        objectFit="contain"
                        alt="loading gif"
                        position="absolute"
                        top="50%"
                        left={`${progress}%`}
                        transform="translate(-50%, -50%)"
                        transition="left 3s ease-in-out"
                    />
                </Box>
            </VStack>
        </>
    );
}

export default Puzzle;
