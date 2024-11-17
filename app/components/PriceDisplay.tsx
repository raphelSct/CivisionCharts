interface PriceDisplayProps {
    total: number;
  }
  
  export default function PriceDisplay({ total }: PriceDisplayProps) {
    return <h2 className='price-display'>Prix Total : {total} €</h2>;
  }
  