import { useState, useEffect } from "react";
import styled from 'styled-components'
import Header from "./Header";

const Gif = () =>{
    const [search, setSearch] = useState("10x")
    const [gif, setGif] = useState(null)
    const [isGifStill, setIsGifStill] = useState(true);

    useEffect(()=> {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=a3NI5WruCwCtyyGiwFOUfm5KeH6TASNL&limit=10`)
        .then((response) => response.json())
        .then((data) => {setGif(data.data); console.log(data.data)})
    }, [search])

const handleClick = () => {
    if(isGifStill === true) { 
       return setIsGifStill(false); 
    }else{ 
       return setIsGifStill(true);
    };
}

console.log(isGifStill)
    return (
        <>
        <Header setSearch={setSearch}/>
        <Div>
        {(gif !== null) ?
        <>
            {gif.map((element, index) => {
            return (
            <> 
            <Main key={index}>
                <div>Rating: {element.rating}</div>
                {(isGifStill) ? 
                <Img onClick={handleClick} src={element?.images.fixed_width_still.url} /> 
                :<Img onClick={handleClick} src={element?.images.fixed_width.url} /> 
                }
                </Main>
            </>
            )
            })}
        </>: "Search your favorite topics..."}
        </Div>
        </>
    )
}

const Div = styled.div`
width: 70%;
margin: auto;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-template-rows: 300px 300px 300px;
`

const Main = styled.div`
margin: 12px;
`

const Img = styled.img`
cursor: pointer;
max-width: 100%;
min-height: 250px;
height: auto;
`

export default Gif;