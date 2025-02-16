import classNames from 'classnames/bind';

import styles from './TextField.module.scss';

const cx = classNames.bind(styles);

function CustomTextField({ label = null, type = 'text', placeholder = '', required = true }) {
    return (
        <div className={cx('form-group')}>
            {label ? <label>{label}</label> : null}
            <input className={cx('text-field')} required={required} type={type} placeholder={placeholder} />
        </div>
    );
}

export default CustomTextField;
