import { Link, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    useScrollTrigger,
    Slide
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import NavbarLogo from '../../../assets/img/Graphicloads-Colorful-Long-Shadow-Home.ico';

function HideOnScroll(props: any) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavbarContentWrapper = styled('ul')`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: 1rem;
`;

const LinksWrapper = styled(Typography)`
    display: flex;
    gap: 50px;
    margin-right: 1.5rem;
    margin-left: auto;
    & > * {
        text-decoration: none;
        color: white;
    }
`;

const StyledButton = styled(Button)`
    transition: 0.5s all;
    display: flex;
    gap: 0.35rem;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

const StyledAppBar = styled(AppBar)`
    background: black;
    border-bottom: 0.5px solid gray;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const StyledLogo = styled('img')`
    border: 2px solid white;
    border-radius: 50%;
    padding: 4px;
    width: 50px;
    height: 50px;
`;

const Navbar = (props: any): JSX.Element => {
    const currentLocation = useLocation();

    return (
        <>
            <HideOnScroll {...props}>
                <StyledAppBar>
                    <Toolbar>
                        <NavbarContentWrapper>
                            <StyledLink to="/">
                                <StyledLogo
                                    src={NavbarLogo}
                                    alt="navbar-logo"
                                />
                            </StyledLink>
                            {currentLocation.pathname === '/' ? (
                                <Typography variant="h6">Home Page</Typography>
                            ) : currentLocation.pathname === '/about-us' ? (
                                <Typography variant="h6">About us</Typography>
                            ) : (
                                <Typography variant="h6">Contact us</Typography>
                            )}
                            <LinksWrapper variant="h6">
                                <StyledLink to={'/'}>
                                    <StyledButton color="inherit">
                                        <HomeIcon />
                                        Home page
                                    </StyledButton>
                                </StyledLink>
                                <StyledLink to={'/about-us'}>
                                    <StyledButton color="inherit">
                                        <InfoIcon />
                                        About us
                                    </StyledButton>
                                </StyledLink>
                                <StyledLink to={'/contact-us'}>
                                    <StyledButton color="inherit">
                                        <ContactMailIcon />
                                        Contact us
                                    </StyledButton>
                                </StyledLink>
                            </LinksWrapper>
                        </NavbarContentWrapper>
                    </Toolbar>
                </StyledAppBar>
            </HideOnScroll>
            )
        </>
    );
};

export default Navbar;
