import { Employee } from '../../../types/EmployeeType';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)`
    max-width: 345px;
`;

const Cards = ({ employee_name, profile_image }: Employee): JSX.Element => {
    return (
        <StyledCard>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={profile_image}
                    alt="profile pic"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                    >
                        {employee_name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    );
};

export default Cards;
