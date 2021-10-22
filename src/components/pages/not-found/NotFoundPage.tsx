import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const NotFoundPage = () => {
    return (
        <Container>
            <h1>404 Page not found</h1>
            <Link to={'/'}>Go back home</Link>
        </Container>
    );
};

export default NotFoundPage;
