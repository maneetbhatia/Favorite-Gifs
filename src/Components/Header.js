import styled from 'styled-components'

const Header = ({setSearch}) => {
    return (
        <Main>
        <H1>GifTastic</H1>
        <Form>
            <Input placeholder="Search your favorite topics..." type="text" onChange={(e) => setSearch(e.target.value)}></Input>
        </Form>
        </Main>
        )
}

const H1= styled.h1`
margin: auto;
border-bottom: 3px solid grey;
padding: 10px;
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
padding: 2%;
margin-right: 1%;
border-radius: 15px;
`

export default Header;