import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/61353712_2048308485277640_6990253776128966656_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Ff09yvLhTHAAX-5z9UC&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCb0fCXqUDymklLbpoAAUxiALvKy_tT-JgHPIscGnFXdw&oe=63AE3C2E"
        alt="tseb"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
