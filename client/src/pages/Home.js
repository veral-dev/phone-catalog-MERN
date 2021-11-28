import React, { useContext } from 'react';
import { PhoneContext } from '../context/Phone.context';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { Grid } from '../styles/general_styles';

export default function Home() {
  const { phoneData, loading } = useContext(PhoneContext);

  if (loading) return <Spinner />;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Discover the best phones here</h1>
      <Grid>{!!phoneData && phoneData.map((phone, idx) => <Card key={idx} phone={{ ...phone, idx }} />)}</Grid>
    </div>
  );
}
