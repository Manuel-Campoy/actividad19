import { useState } from "react";

const getInitialLikes = () => { 
    console.log('getInitialLikes')
    return 12
}

const Likes = () => {
    console.log('Render Likes')
    
    const [likes, setLikes] = useState(() => getInitialLikes())

    return <Button onClick={() => setLikes(likes + 1)}>{likes} likes</Button>
}

/* const Likes = () => {
    console.log('Render Likes')

    const [likes, setLikes] = useState({ val:0 })

    return (
        <Button
            onClick={() => {
                const newLikes = { ...likes }  // { val: likes.val } - otra forma de realizar la copia
                newLikes.val++
                setLikes(newLikes)
            }}
        >
            {likes.val} likes
        </Button>
    )
} */

const Button = ({onClick, children}) => {
    console.log('Render Button')
    return <button onClick={onClick}>{children}</button>
}

const App = () => {
    console.log('Render App')
    return <Likes />;
}

export default App
