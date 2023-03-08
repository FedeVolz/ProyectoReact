import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import yerba from '../../assets/Yerba.jpg'

function CardYerba() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={yerba} />
      <Card.Body>
        <Card.Title>Yerba Canarias</Card.Title>
        <Card.Text>
          Yerba elavorada a base de palo seco y agregados. No contiene azucar.
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardYerba;