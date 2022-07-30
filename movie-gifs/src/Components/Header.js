import styled from 'styled-components'

const Header = ({setSearch}) => {
    return (
        <Main>
        <H1>Find Your Favorite Gif's</H1>
        <Form>
            <Input placeholder="10x" type="text" onChange={(e) => setSearch(e.target.value)}></Input>
        </Form>
        </Main>
        )
}

const H1= styled.h1`
margin: auto;
border-bottom: 1px solid coral;
`

const Main = styled.div`
margin-bottom: 40px;
`

const Form = styled.div`
padding-top: 30px;
width: 50vw;
margin: auto;
`

const Input = styled.input`
width: 100%;
padding: 1.2%;
margin-right: 1%;
`

export default Header;