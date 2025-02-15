import { useState } from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';

import images from '../../assets/images';
import CommonFunctions from '../../utils/common_functions';
import config from '../../config';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box component="form" noValidate autoComplete="off" className={cx('login-form')}>
            <div className={cx('form-header')}>
                <div className={cx('left-side')}>
                    <img src={images.logo} alt="Logo" width={50} />
                    <p>Login to your account</p>
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
                        className={cx('text-field')}
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
                <Button
                    variant="text"
                    sx={{
                        color: 'white',
                        padding: '0',
                        fontSize: '1.4rem',
                        marginTop: '2.4rem',
                    }}
                >
                    Forgot Password
                </Button>
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
                    Login
                </Button>

                <div className={cx('form-footer')}>
                    <p>
                        Don't have an account?
                        <Button
                            href={config.routes.register}
                            variant="text"
                            sx={{
                                color: 'white',
                                padding: '0',
                            }}
                        >
                            Sign up
                        </Button>
                    </p>
                </div>
            </div>
        </Box>
    );
}

export default LoginForm;
