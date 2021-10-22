import styled from 'styled-components';

const SF = styled.div`
    && {
        margin-top: 1rem;
        background-color: rgb(235, 195, 64);
        position: sticky;
        bottom: 0;
        left: 0;
        width: 100%;
    }
`;

const Footer = () => {
    return (
        <SF>
            <p>This is some content in sticky footer</p>
        </SF>
    );
};

export default Footer;
