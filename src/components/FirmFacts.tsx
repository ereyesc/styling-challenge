import FirmFactCard from './FirmFactCard';
import './styles.scss';

export default function FirmFacts() {
  const items = [
    {
      text: 'This is a two line button that terminates with...',
      icon: true,
      disabled: false,
    },
    {
      text: 'This is a two line button that terminates with...',
      icon: true,
      disabled: false,
    },
    {
      text: 'This is a one line button',
      icon: false,
      disabled: false,
    },
    {
      text: 'This is a two line button that terminates with...',
      icon: true,
      disabled: false,
    },
    {
      text: 'This is a two line button that terminates with...',
      icon: true,
      disabled: false,
    },
    {
      text: 'This is a two line button that terminates with...',
      icon: true,
      disabled: true,
    },
    {
      text: 'This is a two line button that terminates with...',
      icon: true,
      disabled: false,
    },
  ];
  return (
    <>
      <h1 className='header'>Firm Facts</h1>
      <div className='grid-container'>
        {items.map((item, idx) => (
          <FirmFactCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </>
  );
}
