import React, { useContext, useEffect } from 'react';
import { PhoneContext } from '../context/phone-context';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';

export default function Home() {
  const { phoneData, loading } = useContext(PhoneContext);

  if (loading) return <Spinner />;

  return (
    <div>
      <h1>Home</h1>
      <div className="grid">{!!phoneData && phoneData.map((phone, idx) => <Card key={idx} phone={phone} />)}</div>
    </div>
  );
}
