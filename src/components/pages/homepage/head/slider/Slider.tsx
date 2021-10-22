import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import SliderPic1 from '../../../../../assets/img/slider_pic_1.jpg';
import SliderPic2 from '../../../../../assets/img/slider_pic_2.jpg';
import SliderPic3 from '../../../../../assets/img/slider_pic_3.jpg';
import { styled } from '@mui/material/styles';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledAutoplaySlider = styled(AutoplaySlider)`
    height: 700px;
    margin: 65px 0 20px 0;

    @media screen and (max-width: 900px) {
        margin-top: 20px;
        height: 400px;
    }
`;

const Slider = (): JSX.Element => {
    return (
        <StyledAutoplaySlider
            bullets={false}
            infinite={true}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={5000}
        >
            <div data-src={SliderPic1} />
            <div data-src={SliderPic2} />
            <div data-src={SliderPic3} />
        </StyledAutoplaySlider>
    );
};

export default Slider;
