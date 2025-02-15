import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';

import images from '../../assets/images';
import styles from './RegisterForm.module.scss';
import CommonFunctions from '../../utils/common_functions';
import config from '../../config';

const cx = classNames.bind(styles);

function RegisterForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Box component="form" noValidate autoComplete="off" className={cx('register-form')}>
            <div className={cx('form-header')}>
                <div className={cx('left-side')}>
                    <img src={images.logo} alt="Logo" width={50} />
                    <p>Register to your account</p>
                </div>
                <div className={cx('right-side')}>
                    <Button
                        variant="outlined"
                        sx={{
                            color: 'white',
                            borderColor: '#464646',
                            borderRadius: '1.6rem',
                            fontSize: '1.6rem',
                            height: '100%',
                            padding: '0 2.4rem',
                        }}
                    >
                        Close
                    </Button>
                </div>
            </div>
            <div className={cx('form-body')}>
                <div className={cx('form-group')}>
                    <label htmlFor="name">Username</label>
                    <TextField
                        required
                        variant="outlined"
                        placeholder="Username"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                borderRadius: '0.8rem',
                                fontSize: '1.4rem',
                                '& fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.5)}`,
                                },
                                '&:hover fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.7)}`,
                                },
                                '&.Mui-focused fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.7)}`,
                                },
                            },
                        }}
                    />
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="email">Email</label>
                    <TextField
                        required
                        type="email"
                        variant="outlined"
                        placeholder="Email"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                borderRadius: '0.8rem',
                                fontSize: '1.4rem',
                                '& fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.5)}`,
                                },
                                '&:hover fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.7)}`,
                                },
                                '&.Mui-focused fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.7)}`,
                                },
                            },
                        }}
                    />
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="password">Password</label>
                    <TextField
                        required
                        type="password"
                        variant="outlined"
                        placeholder="Password"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                borderRadius: '0.8rem',
                                fontSize: '1.4rem',
                                '& fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.5)}`,
                                },
                                '&:hover fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.7)}`,
                                },
                                '&.Mui-focused fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.7)}`,
                                },
                            },
                        }}
                    />
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <TextField
                        required
                        type="password"
                        variant="outlined"
                        placeholder="Confirm Password"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                borderRadius: '0.8rem',
                                fontSize: '1.4rem',
                                '& fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.5)}`,
                                },
                                '&:hover fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.7)}`,
                                },
                                '&.Mui-focused fieldset': {
                                    border: `0.1rem solid ${CommonFunctions.hexWithAlpha('#464646', 0.7)}`,
                                },
                            },
                        }}
                    />
                </div>
                <FormGroup>
                    <FormControlLabel required control={<Checkbox />} label="I agree to the Terms and Conditions" />
                </FormGroup>
                <Button
                    fullWidth
                    sx={{
                        color: '#464646',
                        backgroundColor: '#ffffff',
                        borderRadius: '0.8rem',
                        fontSize: '1.6rem',
                        fontWeight: 'bold',
                        padding: '0.8rem 0',
                        marginTop: '2.4rem',
                    }}
                >
                    Create Account
                </Button>
                <div className={cx('form-footer')}>
                    <p>
                        Already have an account?
                        <Button
                            href={config.routes.register}
                            variant="text"
                            sx={{
                                color: 'white',
                                padding: '0',
                            }}
                        >
                            Login
                        </Button>
                    </p>
                </div>
            </div>
        </Box>
    );
}

export default RegisterForm;
