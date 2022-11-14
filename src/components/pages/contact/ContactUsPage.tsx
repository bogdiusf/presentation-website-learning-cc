import { Formik, Form } from 'formik';
import { TextField } from './form-components/TextField';
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';

const Footer = styled('footer')`
    display: flex;
    margin-top: 20px;
    gap: 50px;
`;

const StyledButtons = styled('button')`
    padding: 10px 20px;
`;

const ContactUs = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First name required!'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirmation password is required')
    });

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={(values: any, { resetForm }) => {
                alert(JSON.stringify(values));
                resetForm({ values: '' });
            }}
        >
            <div style={{ marginTop: '10vh' }}>
                <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
                <h2 style={{ textAlign: 'center' }}>
                    Playing with Formik and yup
                </h2>
                <Form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '30px'
                    }}
                >
                    <TextField
                        label="First Name"
                        name="firstName"
                        type="text"
                    />
                    <TextField label="last Name" name="lastName" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField
                        label="password"
                        name="password"
                        type="password"
                    />
                    <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                    />
                    <Footer>
                        <StyledButtons type="submit">Register</StyledButtons>
                        <StyledButtons type="reset">Reset</StyledButtons>
                    </Footer>
                </Form>
            </div>
        </Formik>
    );
};

export default ContactUs;
