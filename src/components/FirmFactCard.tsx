import Button from './Button';
import './styles.scss';

interface Card {
  text: string;
  icon: boolean;
  disabled: boolean;
}

export default function FirmFactCard({
  item,
  idx,
}: {
  item: Card;
  idx: number;
}) {
  return (
    <div className={`grid-item ${idx === 1 ? 'first-column' : ''}`}>
      <Button icon={item.icon} disabled={item.disabled}>
        {item.text}
      </Button>
    </div>
  );
}
