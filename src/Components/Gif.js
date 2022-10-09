import { useState, useEffect } from "react";
import styled from 'styled-components'
import Header from "./Header";

const Gif = () =>{
    const [search, setSearch] = useState("Steve Harvey")
    const [gif, setGif] = useState(null)
    const [isGifStill, setIsGifStill] = useState(true);

    useEffect(()=> {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=10`)
        .then((response) => response.json())
        .then((data) => setGif(data.data))
    }, [search])

const handleClick = () => {
    if(isGifStill === true) { 
        return setIsGifStill(false); 
    }else{ 
        return setIsGifStill(true);
    };
}

    return (
        <>
            <Header setSearch={setSearch} />
            <ButtonDiv>
                {(isGifStill) ? <Button onClick={handleClick}>Play</Button> : <Button onClick={handleClick}>Pause</Button>}
            </ButtonDiv>
            <Div>
                {(gif !== null) ?
                    <>
                        {gif.map((element, index) => {
                            return (
                                <> 
                                    <Main key={index}>
                                        <Rating>Rating: {element.rating}</Rating>
                                        {(isGifStill) ? 
                                            <Img src={element?.images.fixed_width_still.url} /> 
                                            :<Img src={element?.images.fixed_width.url} /> 
                                        }
                                    </Main>
                                </>
                            )
                        })}
                    </>
                : "Search your favorite topics..."}
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
row-gap: 8%;
column-gap: 2%;
margin-top: 40px;
`

const Rating = styled.div`
background-color: gray;
color: white;
padding: 10px 0px 10px 5px;
border-radius: 15px 15px 0px 0px;
`

const Main = styled.div`
padding: 0px 10px;
`

const Img = styled.img`
width: 100%;
min-height: 250px;
max-height: 250px;
height: auto;
border-radius: 0px 0px 15px 15px;
margin-bottom: 100px;
`

const ButtonDiv = styled.div`
width: fit-content;
margin: auto;
`

const Button = styled.button`
padding: 10px 15px;
border-radius: 10px;
cursor: pointer;
margin-bottom: 30px;
`

export default Gif;