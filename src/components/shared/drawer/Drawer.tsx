import React, { useState } from 'react';
import {
    Drawer as MuiDrawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledDrawer = styled(MuiDrawer)`
    background: rgba(255, 255, 255, 0.3);
    & > div:nth-of-type(3) {
        background: black;
        min-width: 40vw;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    text-align: center;
`;
const StyledIconButton = styled(IconButton)`
    color: black;
    margin-top: 20px;
    padding: 0px;
`;

const ClosingIcon = styled(CloseIcon)`
    color: white;
    margin-left: auto;
    margin-right: 15px;
`;

function Drawer() {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <StyledDrawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <StyledIconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <ClosingIcon />
                </StyledIconButton>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/">Home page</StyledLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/about-us">About</StyledLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/contact-us">Contact us</StyledLink>
                        </ListItemText>
                    </ListItem>
                </List>
            </StyledDrawer>
            <StyledIconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </StyledIconButton>
        </>
    );
}

export default Drawer;
