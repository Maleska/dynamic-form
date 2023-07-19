import { Container, Navbar } from "react-bootstrap";


export default function NavbarMenu() {
  return (
    <div>
        <Navbar  bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#!">
                Dynamic <b>Form</b>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Singned in as: 
                        <a href="www.google.com" target="_blank" rel="noreferrer"> Alex Matias</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
