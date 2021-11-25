import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import { PhoneContext } from '../../context/Phone.context';
import { PhoneImage, DetailsContainer, DetailsFlex, Price, ButtonContainer } from './DetailPhone.style';

export default function DetailPhone() {
  const history = useHistory();
  const { id } = useParams();
  const { deletePhone, getPhone } = useContext(PhoneContext);

  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPhone(id);
    } else {
      setLoading(false);
    }
  }, [id]);

  const fetchPhone = async (id) => {
    const data = await getPhone(id);
    setPhone(data);
    setLoading(false);
  };

  const handleRemove = async () => {
    await deletePhone(id);
    history.push(`/`);
  };

  if (loading) return <Spinner />;

  if (!phone && !loading) {
    return (
      <>
        <h5>{"Error :( page doesn't exist"}</h5>
        <Link to="/">Go to home</Link>
      </>
    );
  }

  return (
    <DetailsContainer>
      <h1>{phone.name}</h1>
      <DetailsFlex>
        <div>{phone.image && <PhoneImage src={phone.image} alt={phone.name} />}</div>

        <div>
          <Price>
            <strong>{phone.price} €</strong>
          </Price>
          <p>{phone.description}</p>
          <div className="flex-between">
            <strong>Manufacturer: </strong>
            <span>{phone.manufacturer}</span>
          </div>
          <div className="flex-between">
            <strong>Color: </strong>
            <span>{phone.color}</span>
          </div>
          <div className="flex-between">
            <strong>Screen: </strong>
            <span>{phone.screen}</span>
          </div>
          <div className="flex-between">
            <strong>Processor: </strong>
            <span>{phone.processor}</span>
          </div>
          <div className="flex-between">
            <strong>Ram: </strong>
            <span>{phone.ram}</span>
          </div>
        </div>
      </DetailsFlex>
      <ButtonContainer>
        <Button onClick={() => history.push(`/form/${id}`)} bgColor="#73af16">
          Edit
        </Button>
        <Button onClick={() => handleRemove()} bgColor="#b50000">
          Delete
        </Button>
      </ButtonContainer>
    </DetailsContainer>
  );
}
