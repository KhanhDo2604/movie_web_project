import { useState } from 'react';
import classNames from 'classnames/bind';

import images from '../../assets/images';
import config from '../../config';
import styles from './LoginForm.module.scss';
import CustomTextField from '../../components/ui/TextField/TextField';
import CustomButton from '../../components/ui/Button/CustomButton';

const cx = classNames.bind(styles);

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form noValidate autoComplete="off" className={cx('login-form')}>
            <div className={cx('form-header')}>
                <div className={cx('left-side')}>
                    <img src={images.logo} alt="Logo" width={50} />
                    <p>Login to your account</p>
                </div>
                <div className={cx('right-side')}>
                    <CustomButton className={cx('close-btn')} to={config.routes.home} outline>
                        Close
                    </CustomButton>
                </div>
            </div>
            <div className={cx('form-body')}>
                <CustomTextField label={'Email'} placeholder="Email" required type="email" variant="outlined" />

                <CustomTextField
                    label={'Password'}
                    placeholder="Password"
                    required
                    type="password"
                    variant="outlined"
                />

                <CustomButton className={cx('forgot-password-btn')} text>
                    Forgot Password
                </CustomButton>
                <CustomButton className={cx('login-btn')} filled>
                    Login
                </CustomButton>

                <div className={cx('form-footer')}>
                    <p>
                        Don't have an account?
                        <CustomButton className={cx('sign-up-btn')} to={config.routes.register} text>
                            Sign up
                        </CustomButton>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
