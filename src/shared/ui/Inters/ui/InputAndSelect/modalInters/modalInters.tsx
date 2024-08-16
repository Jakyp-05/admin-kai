import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import logoAdd from 'shared/assets/svg/logoAdd.svg';
import PlusIcon from 'shared/assets/svg/VectorPlus.svg';
import CancelIcon from 'shared/assets/svg/VectorX.svg';
import FormIntersAdd from '../../DetailsInter/FormInfo';
import MockAdapter from 'axios-mock-adapter';
import { useOutSideClick } from 'shared/hooks/useOutSideClick';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  direction: string;
  status: string;
  photo: File | string;
  level1: string;
  level2: string;
  project: string;
}

interface AddInternModalProps {
  open: boolean;
  onClose: () => void;
}

const mock = new MockAdapter(axios);

mock.onPost('/api/interns').reply(200, {
  message: 'Intern added successfully'
});

const AddInternModal: React.FC<AddInternModalProps> = ({ open, onClose }) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { ref } = useOutSideClick(onClose);

  if (!open) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPhoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <DialogDiv>
      <Dialog ref={ref}>
        <DialogTitle>Добавить стажёра</DialogTitle>
        <DialogGroupTwo>
          <DialogContent>
            <Formik<FormData>
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                direction: '',
                status: '',
                photo: '',
                level1: '',
                level2: '',
                project: '',
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .min(2, 'Имя должно содержать минимум 2 символа')
                  .max(50, 'Имя должно содержать максимум 50 символов')
                  .required('Это поле обязательно'),
                lastName: Yup.string()
                  .min(2, 'Фамилия должна содержать минимум 2 символа')
                  .max(50, 'Фамилия должна содержать максимум 50 символов')
                  .required('Это поле обязательно'),
                email: Yup.string().email('Неверный формат email').required('Это поле обязательно'),
                phone: Yup.string().matches(/^\d{10}$/, 'Телефон должен содержать 10 цифр').required('Это поле обязательно'),
                direction: Yup.string().required('Это поле обязательно'),
                status: Yup.string().required('Это поле обязательно'),
                level1: Yup.string().required('Это поле обязательно'),
                level2: Yup.string().required('Это поле обязательно'),
                project: Yup.string().required('Это поле обязательно'),
              })}
              onSubmit={async (values, { setSubmitting }: FormikHelpers<FormData>) => {
                const formData = new FormData();
                formData.append('firstName', values.firstName);
                formData.append('lastName', values.lastName);
                formData.append('email', values.email);
                formData.append('phone', values.phone);
                formData.append('direction', values.direction);
                formData.append('status', values.status);
                formData.append('level1', values.level1);
                formData.append('level2', values.level2);
                formData.append('project', values.project);
                if (photo) formData.append('photo', photo);
        
                try {
                  const response = await axios.post('/api/interns', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  });
                  console.log('Success:', response);
                } catch (error) {
                  console.error('Error:', error);
                } finally {
                  setSubmitting(false);
                  onClose();
                }
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <FieldContainer>
                    <AddPhoto>
                      {preview ? (
                        <ImgPhotoAfter src={preview} alt="Preview" />
                      ) : (
                        <ImgPhoto src={logoAdd} alt="Add Logo" />
                      )}
                      <LabelAdd htmlFor="photo">Добавить фото</LabelAdd>
                      <Field
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e)}
                        style={{ display: 'none' }}
                      />
                    </AddPhoto>
                  </FieldContainer>
                  <FormIntersAdd errors={errors} touched={touched} />
                  <DialogActions>
                    <CancelButton type="button" onClick={onClose}>
                      <img src={CancelIcon} alt="Отмена" /> Отмена
                    </CancelButton>
                    <SaveButton type="submit" disabled={isSubmitting}>
                      <img src={PlusIcon} alt="Сохранить" /> Сохранить
                    </SaveButton>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </DialogGroupTwo>
      </Dialog>
    </DialogDiv>
  );
};

export default AddInternModal;

// Стили
const DialogDiv = styled('div')({
  backgroundColor: 'rgba(50, 50, 50, 0.4)',
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  zIndex: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Dialog = styled('div')({
  width: '100%',
  maxWidth: '710px',
  margin: '10px auto',
  borderRadius: '10px',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
  padding: '0 0 16px 0',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
});

const DialogTitle = styled('h2')({
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  padding: '16px 0',
  width: '100%',
  backgroundColor: 'rgba(54, 203, 255, 1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '32px',
  textAlign: 'center',
  color: 'white',
  fontWeight: 500,
  fontFamily: 'Montserrat, sans-serif',
  margin: '0 auto'
});

const DialogActions = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '25px',
  padding: '20px 35px 0 0',
});

const Button = styled('button')({
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});

const CancelButton = styled(Button)({
  backgroundColor: 'rgba(131, 131, 131, 1)',
  color: 'white',
  width: '148px',
  height: '43px',
  borderRadius: '7.3px',
});

const SaveButton = styled(Button)({
  backgroundColor: 'rgba(54, 203, 255, 1)',
  color: 'white',
  width: '174px',
  height: '43px',
  borderRadius: '7.3px',
});

const DialogContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const DialogGroupTwo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const AddPhoto = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '15px 0',
});

const FieldContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
});

const ImgPhoto = styled('img')({
  width: '73px',
  height: '73px',
  borderRadius: '50%',
});

const ImgPhotoAfter = styled('img')({
  width: '73px',
  height: '73px',
  borderRadius: '50%',
  border: '1px solid rgba(0, 0, 0, 0.1)',
});

const LabelAdd = styled('label')({
  display: 'block',
  margin: '10px 0 0',
  color: 'rgba(51, 51, 80, 1)',
  fontSize: '15px',
  fontWeight: 500,
  fontFamily: 'Montserrat, sans-serif',
});
