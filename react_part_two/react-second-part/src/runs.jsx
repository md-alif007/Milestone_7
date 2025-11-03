import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);
    const [singles, setSingles] = useState(0);
    const [balls, setBalls] = useState(0);


    const handleSingles = () => {
        const newRuns = runs + 1;
        const newSingles = singles + 1;
        const newBalls = balls + 1;
        setBalls(newBalls);
        setSingles(newSingles);
        setRuns(newRuns);
    }

    const handleSixes = () => {
        const newRuns = runs + 6;
        const newSixes = sixes + 1;
        const newBalls = balls + 1;
        setBalls(newBalls);
        setSixes(newSixes);
        setRuns(newRuns);
    }

    const handleFours = () => {
        const newRuns = runs + 4;
        const newFours = fours + 1;
        const newBalls = balls + 1;
        setBalls(newBalls);
        setFours(newFours);
        setRuns(newRuns);
    }

    const counterStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center'

    };

    return (
        <div style={counterStyle}>
            <h3>Player : Batsman One</h3>
            <h3>Runs   : {runs}</h3>
            <h3><small>Six    : {sixes}</small></h3>
            <h3><small>Fours  : {fours}</small></h3>
            <h3><small>Singles: {singles}</small></h3>
            <h3><small>Balls: {balls}</small></h3>

            <button onClick={handleSingles}>Singles</button>

            <button onClick={handleSixes}>Sixes</button>

            <button onClick={handleFours}>Fours</button>
        </div>
    )
}