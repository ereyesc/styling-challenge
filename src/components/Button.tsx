import SearchIcon from '@mui/icons-material/Search';
import './styles.scss';

export default function Button({
  children,
  icon,
  disabled,
}: {
  children: React.ReactNode;
  icon: boolean;
  disabled: boolean;
}) {
  return (
    <button
      className={`button ${icon ? 'icon' : 'default'} ${
        disabled ? 'disabled' : ''
      }`}
      disabled={disabled}
    >
      {icon && (
        <span className='button-icon'>
          <SearchIcon />
        </span>
      )}
      <span className='button-text'>{children}</span>
    </button>
  );
}
