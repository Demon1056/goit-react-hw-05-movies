import { Outlet } from "react-router-dom"
import { HeaderText } from "./LayoutStyled"
import { Container } from "./LayoutStyled"
import { Header } from "./LayoutStyled"
const Layout = () => {

    return (
        <Container>
            <Header>
                <HeaderText>Home</HeaderText>
                <HeaderText>Movies</HeaderText>
            </Header> <Outlet /></Container>)
}
export default Layout