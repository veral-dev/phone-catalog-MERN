import React, { useState, useContext, useEffect } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import { useParams, useHistory } from 'react-router-dom';
import Alert from '../../components/ui/Alert';
import Loading from '../../components/ui/Loading';
import TextInput from '../../components/ui/TextInput';
import { AlertContext } from '../../context/Alert.context';
import { PhoneContext } from '../../context/Phone.context';
import firebase from '../../firebase/firebase';
import { FormContainer, ImageUploader, PhoneImage, SubmitButton, FormGrid } from './AddEditPhone.style';

const INITIAL_VALUES = {
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: '',
  screen: '',
  processor: '',
  ram: ''
};

export default function AddEditPhone() {
  const history = useHistory();
  const { createNewPhone, editPhone, getPhone } = useContext(PhoneContext);
  const { setToastMsg } = useContext(AlertContext);

  const { id } = useParams();
  const [editing, setEditing] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [error, setError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchPhone(id);
    } else {
      setValues(INITIAL_VALUES);
      setEditing(false);
      setImage(null);
    }
    return () => {
      setValues(INITIAL_VALUES);
    };
  }, [id]);

  const fetchPhone = async (id) => {
    const data = await getPhone(id);
    if (!data) history.push('/');
    else {
      setImage(data.image);
      setValues(data);
      setEditing(true);
    }
  };

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
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const formValidation = () => {
    return Object.values(values).includes('');
  };

  const onSubmit = async (e) => {
    setSubmitLoading(true);
    e.preventDefault();
    setError(null);
    if (formValidation(values)) {
      setError('Please, fill required fields');
      setSubmitLoading(false);
      return;
    }
    const phone = values;
    if (image) phone.image = image;
    let resp;
    if (editing) {
      resp = await editPhone(phone);
    } else {
      resp = await createNewPhone(phone);
    }
    if (resp.ok) {
      setToastMsg(resp.ok);
      history.push(`/phone/${resp.id}`);
    }
    setSubmitLoading(false);
  };

  if (editing === null) return <></>;

  return (
    <FormContainer onSubmit={onSubmit}>
      <h2>{editing ? 'Edit phone' : 'Create a new phone'}</h2>
      <FormGrid>
        <TextInput name="name" label="Name*" type="text" value={values.name} onChange={handleChange} />
        <TextInput name="manufacturer" label="Manufacturer*" type="text" value={values.manufacturer} onChange={handleChange} />
        <TextInput name="description" label="Description*" type="text" value={values.description} onChange={handleChange} />
        <TextInput name="screen" label="Screen*" type="text" value={values.screen} onChange={handleChange} />
        <TextInput name="processor" label="Processor*" type="text" value={values.processor} onChange={handleChange} />
        <TextInput name="ram" label="Ram*" type="number" value={values.ram} onChange={handleChange} />
        <TextInput name="color" label="Color*" type="text" value={values.color} onChange={handleChange} />
        <TextInput name="price" label="Price*" type="number" value={values.price} onChange={handleChange} />
      </FormGrid>

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
      <SubmitButton disabled={uploading} type="submit">
        {submitLoading || uploading ? <Loading /> : 'Submit'}
      </SubmitButton>
      {error && <Alert message={error} />}
    </FormContainer>
  );
}
