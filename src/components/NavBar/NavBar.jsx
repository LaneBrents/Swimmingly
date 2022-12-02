import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Header, Image, Dropdown } from "semantic-ui-react";
import "./NavBar.css";

export default function NavBar({ loggedUser, handleLogout }) {
    const [showNav, setShowNav] = useState(false);

    return (
        <Menu borderless className="nav-bar">
            <Menu.Item>
                <Header>
                    <Link
                        to="/"
                        id="logo"
                        style={{
                            color: 'yellow',
                            fontFamily: 'Pacifico',
                            fontSize: '20px',
                            letterSpacing: '.05rem',
                        }}
                    >
                        Swimmingly
                    </Link>
                </Header>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Link to={`/${loggedUser?.username}`} style={{ color: 'black' }}>
                        <Image
                            src={
                                loggedUser?.photoUrl
                                    ? loggedUser?.photoUrl
                                    : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
                            }
                            avatar
                        ></Image>
                    </Link>
                </Menu.Item>
                <Dropdown item icon="bars yellow">
                    <Dropdown.Menu>
                    <Dropdown.Item text="Dashboard" href="/Dashboard" />
                    <Dropdown.Divider />
                        <Dropdown.Item as="a" href="/MyTeam">
                            My Team
                        </Dropdown.Item>
                        <Dropdown.Item text="Heatsheets" href="/Heatsheet" />
                        <Dropdown.Item text="Schedule" href="/Calendar" />
                        <Dropdown.Divider />
                        <Dropdown.Item text="Profile Settings" icon="setting" />
                        <Dropdown.Item
                            text="Sign Out"
                            onClick={handleLogout}
                            icon="sign out"
                        />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    );
}