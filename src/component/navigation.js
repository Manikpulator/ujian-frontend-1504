import React from 'react'
import {
    Navbar,
    Nav,
    Dropdown
} from 'react-bootstrap'

class Navigation extends React.Component{
    render(){
        return(
            <Navbar expand="lg" fixed='top' style={{ height: '70px', backgroundColor: 'rgba(43, 104, 213, .7)' }}>
                <Navbar.Brand>
                    <strong style={{ color: 'white', fontSize: '30px' }}>Toko Sepatu</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Dropdown style={{ marginRight: '40px' }}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.props.username || "username"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.props.username
                                    ?
                                    <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                                    :
                                    <>
                                        <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/register' >Register</Dropdown.Item>
                                    </>
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation