import { useState } from 'react';

import classNames from 'classnames/bind';

import images from '../../assets/images';
import styles from './RegisterForm.module.scss';
import config from '../../config';
import CustomTextField from '../../components/ui/TextField/TextField';
import CustomButton from '../../components/ui/Button/CustomButton';

const cx = classNames.bind(styles);

function RegisterForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <form noValidate autoComplete="off" className={cx('register-form')}>
            <div className={cx('form-header')}>
                <div className={cx('left-side')}>
                    <img src={images.logo} alt="Logo" width={50} />
                    <p>Register to your account</p>
                </div>
                <div className={cx('right-side')}>
                    <CustomButton className={cx('close-btn')} to={config.routes.home} outline>
                        Close
                    </CustomButton>
                </div>
            </div>
            <div className={cx('form-body')}>
                <CustomTextField label={'Username'} placeholder="Username" required type="text" variant="outlined" />

                <CustomTextField label={'Email'} placeholder="Email" required type="email" variant="outlined" />
                <CustomTextField
                    label={'Password'}
                    placeholder="Password"
                    required
                    type="password"
                    variant="outlined"
                />
                <CustomTextField
                    label={'Confirm Password'}
                    placeholder="Confirm Password"
                    required
                    type="password"
                    variant="outlined"
                />

                {/* <FormGroup>
                    <FormControlLabel required control={<Checkbox />} label="I agree to the Terms and Conditions" />
                </FormGroup> */}
                <CustomButton className={cx('register-btn')} filled>
                    Create Account
                </CustomButton>
                <div className={cx('form-footer')}>
                    <p>
                        Already have an account?
                        <CustomButton className={cx('login-btn')} to={config.routes.login} text>
                            Login
                        </CustomButton>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;
