import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

const Sidebar = ({ changeRoute , route, handleDrawerToggle}) => {

    return (

        <div className="sidebar" id="sidebar-drawer">
            <div className="logo"><a href="" className="simple-text logo-normal">German Cheat Sheet</a></div>
            <div className="sidebar-wrapper">
            
                <Nav
                    activeKey={route}
                    onSelect={(key => changeRoute(key))}
                    as="ul">
                    <Nav.Item as="li" > {/*className={route === 'dashboard' ? 'active' : ''}*/}
                        <Nav.Link eventKey="dashboard">Dashboard</Nav.Link> {/*style={route === 'dashboard' ? activeStyle : {}}*/}
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="articles">Articles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="pronouns">Pronouns</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="adjectives">Adjectives</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="prepositions">Prepositions</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}

export default Sidebar;