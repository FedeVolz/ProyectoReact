import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import leche from '../../assets/Leche.jpg'

function CardLeche() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={leche} alt='Leche' />
      <Card.Body>
        <Card.Title>Leche Descremada</Card.Title>
        <Card.Text>
          Esta es una leche descremada, no contiene gluten. Elavorada con vacas libres.
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardLeche;