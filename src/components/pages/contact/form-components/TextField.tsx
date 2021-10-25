import { ErrorMessage, useField } from 'formik';
import { TextField as MuiTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledErrorMessage = styled(ErrorMessage)`
    font-size: 1rem;
    padding: 0;
    padding-top: 10px;
    color: red;
`;
const Wrapper = styled('div')`
    margin-bottom: 2px;
    display: flex;
    flex-direction: column;
    width: 30vw;

    @media screen and (max-width: 450px) {
        width: 100%;
        padding: 0 10px;
    }
`;

export const TextField = ({ label, ...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <Wrapper>
            <MuiTextField
                className={`form-control ${
                    meta.touched && meta.error && 'is-invalid'
                }`}
                {...field}
                {...props}
                autoComplete="off"
                label={label}
                variant="outlined"
                required
            />
            <StyledErrorMessage component="div" name={field.name} />
        </Wrapper>
    );
};
