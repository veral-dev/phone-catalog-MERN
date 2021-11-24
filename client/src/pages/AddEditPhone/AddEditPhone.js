import React, { useState } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import Alert from '../../components/ui/Alert';
import TextInput from '../../components/ui/TextInput';
import firebase from '../../firebase/firebase';
import { Grid } from '../../styles/general_styles';
import { FormContainer, ImageUploader, PhoneImage, SubmitButton } from './AddEditPhone.style';

const INITIAL_VALUES = {
  name: '',
  manufacturer: '',
  description: '',
  screen: '',
  processor: '',
  ram: '',
  price: '',
  isValid: false
};

export default function AddEditPhone() {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [error, setError] = useState(null);

  const handleUploadSuccess = (name) => {
    firebase.storage
      .ref('phoneCatalog')
      .child(name)
      .getDownloadURL()
      .then((url) => {
        setImage(url);
        setUploading(false);
      });
  };

  const handleChange = (e) => {
    const newValues = {
      ...values,
      [e.target.name]: e.target.value
    };
    const isValid = !Object.values(newValues).includes('error');
    setValues({
      ...newValues,
      isValid
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!values.isValid) setError('All fields are required');
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <h2>Create a new phone</h2>
      <Grid>
        <TextInput name="name" label="Name" type="text" value={values.name} onChange={handleChange} />
        <TextInput name="manufacturer" label="Manufacturer" type="text" value={values.manufacturer} onChange={handleChange} />
        <TextInput name="description" label="Description" type="text" value={values.description} onChange={handleChange} />
        <TextInput name="screen" label="Screen" type="text" value={values.screen} onChange={handleChange} />
        <TextInput name="processor" label="Processor" type="text" value={values.processor} onChange={handleChange} />
        <TextInput name="ram" label="Ram" type="text" value={values.ram} onChange={handleChange} />
        <TextInput name="price" label="Price" type="number" value={values.price} onChange={handleChange} />
      </Grid>

      <ImageUploader>
        <FileUploader
          disabled={uploading}
          hidden
          accept="image/*,.pdf"
          id="image"
          name="image"
          randomizeFilename
          storageRef={firebase.storage.ref('phoneCatalog')}
          onUploadStart={() => setUploading(true)}
          onUploadError={(error) => setUploading(error)}
          onUploadSuccess={handleUploadSuccess}
        />
        {uploading ? 'Uploading' : 'Upload Preview Image'}
      </ImageUploader>
      <div className="flex-center">{image && <PhoneImage className="photo" src={image} width="100" height="100" alt="temp-photo" />}</div>
      <SubmitButton type="submit">Submit</SubmitButton>
      {error && <Alert message={error} />}
    </FormContainer>
  );
}
