import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormStyle = styled.form`
  margin: var(--space-medium) 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Label = styled.label`
  // margin: var(--space-medium) 0;
  font-size: 1.5rem;
  font-weight: 600;
  // width: 90vw;
  margin: 2vh 0;
  @media (max-width: 600px) {
    width: 70vw;
  }
`;

const InputStyle = styled.input`
  // margin: var(--space-medium) 0;
  height: 3rem;
  width: 25rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  padding: 8px;
  opacity: 0.8;
  color: #00000bb;
  background-color: #d3dcfb;
  border-color: transparent;
`;

const emailPattern =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const BuyForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log('submitted Data --> ', data);
  // const onSubmit = (data) => {};
  // console.log('watching...', watch('email')); // watch input value by passing the name of it

  // todo: insert autoslash for expiration date, auto space for card number inputs
  // const autoSlash = (input) => {
  //   if (input.length === 2) return input + '/';
  // };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Label>name</Label>
      <InputStyle
        placeholder="name"
        {...register('name', { required: true })}
      />
      {errors.name && <span>This field is required</span>}
      <Label>email</Label>
      <InputStyle
        placeholder="name@email.com"
        {...register('email', {
          required: true,
          pattern: emailPattern,
        })}
      />
      {errors.email && <span>This field is required</span>}

      <Label>card number</Label>
      <InputStyle
        placeholder="card number"
        {...register('cardNumber', { required: true, valueAsNumber: true })}
      />
      {errors.cardNumber && <span>This field is required</span>}

      <Label>name on card</Label>
      <InputStyle
        placeholder="name on card"
        {...register('cardName', { required: true })}
      />
      {errors.cardName && <span>This field is required</span>}

      <Label>cvv</Label>
      <InputStyle
        style={{ width: '15rem', textAlign: 'center' }}
        placeholder="000"
        maxLength="3"
        {...register('cvv', {
          required: true,
          maxLength: 3,
          valueAsNumber: true,
          pattern: /[A-Za-z]{3}/,
          minLength: 3,
        })}
      />
      {errors.cvv && <span>This field is required</span>}

      <Label>expiration date</Label>
      <InputStyle
        style={{ width: '15rem', textAlign: 'center' }}
        placeholder="MM/YY"
        maxLength="5"
        {...register('expirationDate', {
          required: true,
          pattern: /\d{2}\/\d{2}/,
        })}
      />
      {errors.expirationDate && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register('emailRequired', { required: true })} /> */}
      {/* <input {...register('cardNumber', { required: true })} />
      <input {...register('cardName', { required: true })} />
      <input {...register('expirationDate', { required: true })} /> */}
      {/* errors will return when field validation fails  */}

      <InputStyle
        style={{
          height: '6vh',
          width: '8vw',
          marginTop: '4vh',
          opacity: 1,
          backgroundColor: '#356F49',
          borderColor: 'transparent',
          color: 'whitesmoke',
          fontWeight: '700',
        }}
        type="submit"
        value="BUY"
      />
    </FormStyle>
  );
};

export default BuyForm;
