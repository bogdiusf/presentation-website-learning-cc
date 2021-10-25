import { useEffect, useState } from 'react';
import TextLoop from 'react-text-loop';
import axios from 'axios';
import { Employee } from '../../types/EmployeeType';
import Slider from './head/slider/Slider';
import Typography from '@mui/material/Typography';
import Cards from './body/Cards';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Example = styled('div')`
    font-size: 24px;
`;

const Title = styled('div')`
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: #aaa;
`;

const Section = styled('div')`
    font-size: 25px;
    font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
`;

const CardsWrapper = styled('div')`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 25px 0 25px 0;
    border: 15px solid black;
    border-top: none;
    margin-bottom: 15px;

    @media screen and (max-width: 600px) {
        border: none;
    }
`;

const useStyles = makeStyles({
    typography: {
        padding: '100px',
        background: 'black',
        color: 'white'
    }
});

const Smooth = (): JSX.Element => (
    <Section>
        <Title>Here, we value everyone</Title>
        <Example>
            Our employees{' '}
            <TextLoop
                springConfig={{ stiffness: 70, damping: 31 }}
                adjustingSpeed={1000}
            >
                <span>of the month</span>
                <span>are the best</span>
            </TextLoop>
        </Example>
    </Section>
);

const DisplaySkeleton = (): JSX.Element => {
    const skeletons = [];

    for (let i = 0; i <= 23; i++) {
        skeletons.push(
            <Stack spacing={1} key={i}>
                <Skeleton
                    variant="rectangular"
                    width={345}
                    height={200}
                    animation="wave"
                />
                <Skeleton variant="text" width={150} animation="wave" />
                <Skeleton variant="text" width={345} animation="wave" />
                <Skeleton variant="text" width={345} animation="wave" />
                <Skeleton variant="text" width={200} animation="wave" />
            </Stack>
        );
    }

    return <>{skeletons}</>;
};

export default function HomePage(): JSX.Element {
    const [employeeInfo, setEmployeeInfo] = useState<Employee[]>([]);
    const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(true);

    const fetchData = async (): Promise<any> => {
        const response = await axios.get('/getemployees');
        setEmployeeInfo(response.data);
        setIsSkeletonLoading(false);
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);

    const classes = useStyles();

    return (
        <>
            <Slider />
            <Typography
                component="header"
                variant="h3"
                align="center"
                className={classes.typography}
            >
                <Smooth />
            </Typography>
            <CardsWrapper>
                {isSkeletonLoading && <DisplaySkeleton />}
                {employeeInfo &&
                    employeeInfo.map((item) => (
                        <Cards {...item} key={item.id} />
                    ))}
            </CardsWrapper>
        </>
    );
}
