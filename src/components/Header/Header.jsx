import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ loggedUser, handleLogout }) {
    console.log(loggedUser, "loggedUser in header");
    return (
        <>
            <Header as="h2" floated="left">
                <Link to="/">
                    <Icon name="home"></Icon>
                </Link>
            </Header>

            <Header as="h2" floated="center">
                {loggedUser ? (
                    <>
                        <Link to="/"> Home </Link>
                        {/* <Link to="/MyTeam"> My Team </Link>
                        <Link to="/Heatsheet"> Heatsheet </Link> */}
                    </>
                ) : null}
            </Header>

            <Header as="h2" floated="right">
                <Link to="" onClick={handleLogout}>
                    Logout
                </Link>

                {/* <Link to={`/${loggedUser?.username}`}>Login</Link> */}

                <Link to={`/${loggedUser?.username}`}>
                    <Image
                        src={
                            loggedUser?.photoUrl
                                ? loggedUser?.photoUrl
                                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                        }
                        avatar
                    ></Image>
                </Link>
            </Header>
        </>
    );
}