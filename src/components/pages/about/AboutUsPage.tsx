import img1 from '../../../assets/img/smiling_guy_endava_1.png';
import img2 from '../../../assets/img/endava_2.png';
import { styled } from '@mui/material/styles';

const Container = styled('div')`
    margin-top: 5vh;
    padding: 15px 0;
`;
const InformationWrapper = styled('div')<{ order: string }>`
    display: flex;
    border-bottom: 10px solid black;

    ${({ order }) =>
        order === 'first' ? `padding: 0 0 15px 0;` : `padding: 15px 0;`}

    & > img {
        width: 100%;
        height: 100%;
    }
    & > div {
        margin-left: 30px;
    }

    @media screen and (max-width: 1280px) {
        flex-wrap: wrap;
        padding: 0 0 30px 0;
        margin-bottom: 30px;
        border-bottom: 2px solid lightgray;
        ${({ order }) =>
            order === 'first'
                ? `flex-direction: column;`
                : `flex-direction: column-reverse;`}
        & > img {
            margin: 0 auto;
        }
        & > div {
            margin-left: 0;
        }
    }
`;
const MultiNewsWrapper = styled('div')`
    display: flex;
    padding: 15px 0;
    border-bottom: 10px solid black;

    .wrapper-child {
        height: 400px;
        flex: 1;
    }
    .news-order-first {
        background: rgb(100, 102, 109);
        color: white;
        padding: 0 60px;
        & > .upper-bar {
            width: 50px;
            border-top: 5px solid white;
            margin-bottom: -10px;
        }
    }
    .news-order-second {
        background: rgb(222, 65, 27);
        color: white;
        padding: 0 60px;
        & > .upper-bar {
            width: 50px;
            border-top: 5px solid white;
            margin-bottom: -10px;
        }
    }
    .news-order-third {
        background: rgb(239, 239, 240);
        color: black;
        padding: 0 60px;
        & > .upper-bar {
            width: 50px;
            border-top: 5px solid black;
            margin-bottom: -10px;
        }
    }

    @media screen and (max-width: 1280px) {
        flex-wrap: wrap;
        padding: 0 0 30px 0;
        margin-bottom: 20px;
        border-bottom: 2px solid lightgray;
        .news-order-first,
        .news-order-second,
        .news-order-third {
            padding: 0 20px;
            & h1 {
                letter-spacing: -3px;
            }
        }
        .wrapper-child {
            font-size: 1.2rem;
        }
    }
`;

const News = styled('div')`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'robotolight,Arial,sans-serif';
    font-size: 1vw;
    padding: 0 25px;

    & > .upper-bar {
        width: 50px;
        border-top: 5px solid black;
        margin-bottom: -10px;
    }

    @media screen and (max-width: 1280px) {
        padding: 0;
        font-size: 1.2rem;
    }
`;

const AboutUsPage = () => {
    return (
        <Container>
            <InformationWrapper order="first">
                <News>
                    <div className="upper-bar"></div>
                    <h1>ADEPTS AT A GLANCE</h1>
                    <p>
                        Adepts is reimagining the relationship between people
                        and technology.
                    </p>
                    <br />
                    <p>
                        We have helped some of the world's leading Payments,
                        Financial Services, Telecommunications, Media,
                        Technology, Consumer Products, Retail, Mobility, and
                        Healthcare companies accelerate their ability to take
                        advantage of new business models and market
                        opportunities. By ideating and delivering dynamic
                        platforms and intelligent digital experiences, we help
                        our clients fuel the rapid, ongoing transformation of
                        their business.
                    </p>
                    <p>
                        By leveraging next-generation technologies, our agile,
                        multi-disciplinary teams provide a combination of
                        Product & Technology Strategies, Intelligent
                        Experiences, and World Class Engineering to help our
                        clients become more engaging, responsive, and efficient.
                    </p>
                    <p>
                        Adepts has 8,883 employees, as of June 30, 2021, located
                        in close to client locations in Australia, Austria,
                        Denmark, Germany, Ireland, Netherlands, Singapore,
                        Switzerland, United Kingdom, United States and nearshore
                        delivery centres in the European Union: Bulgaria,
                        Croatia, Romania and Slovenia; Central European
                        Countries: Bosnia & Herzegovinia, Moldova, North
                        Macedonia and Serbia; Latina America: Argentina,
                        Colombia, Mexico, Uruguay and Venezuela.
                    </p>
                    <p>
                        Along with investing in long-term customer
                        relationships, Adepts recognises the importance of
                        providing rewarding and challenging careers for our
                        people and, by doing so, has established itself as the
                        employer of choice in certain regions.
                    </p>
                </News>
                <img src={img1} alt="dudeson" />
            </InformationWrapper>
            <InformationWrapper order="second">
                <img src={img2} alt="heart" />
                <News>
                    <div className="upper-bar"></div>
                    <h1>SUSTAINABILITY | WE CARE</h1>
                    <p>
                        As Adepts has grown, we have remained true to our core
                        purpose and values. These values make us distinctive and
                        drive the way we operate as a business and as human
                        beings. We are thoughtful and care deeply about the
                        success of our people, our customers, the communities we
                        are part of, and our environmental responsibilities.
                    </p>
                </News>
            </InformationWrapper>
            <MultiNewsWrapper>
                <News className="news-order-first wrapper-child">
                    <div className="upper-bar"></div>
                    <h1>MANAGEMENT TEAM</h1>
                    <p>
                        Meet the people who help to steer our business,
                        including our Board and Senior Management Team.
                    </p>
                </News>
                <News className="news-order-second  wrapper-child">
                    <div className="upper-bar"></div>
                    <h1>DELIVERY CENTRES</h1>
                    <p>
                        Our people are located both in offices close to our
                        clients, as well as in global nearshore delivery centre
                        locations across Latin America and Europe.
                    </p>
                </News>
                <News className="news-order-third  wrapper-child">
                    <div className="upper-bar"></div>
                    <h1>AWARDS & ACCREDITATIONS</h1>
                    <p>
                        We are proud to be recognised as an aspirational IT
                        services brand.
                    </p>
                </News>
            </MultiNewsWrapper>
        </Container>
    );
};

export default AboutUsPage;
