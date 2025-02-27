import { Formik } from 'formik';
import { Form, Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
    <Container>
      <Formik
       initialValues={{ firstName: '', lastName: '', email: '', password: '' }}

       validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}

       onSubmit={(values) => {
        console.log(values);
      }}
      >
      {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         
       }) => (
         <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Enter First Name</label>
          <input
             type="text"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           />
           {errors.firstName && touched.firstName && errors.firstName}
           <br />
           <label htmlFor="lastName">Enter Last Name</label>
          <input
             type="text"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
           />
           {errors.lastName && touched.lastName && errors.lastName}
           <br />
           <label htmlFor="email">Enter Email</label>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <br />
           <label htmlFor="password">Enter Password</label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <br />
           <Button type='submit' disabled={isSubmitting}>
             Submit
           </Button>
         </form>
       )}
      </Formik>
      
      {/* <Form
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}

      validate={values => {
       const errors = {};
       if (!values.email) {
         errors.email = 'Required';
       } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
       ) {
         errors.email = 'Invalid email address';
       }
       return errors;
     }}

      onSubmit={(values) => {
       console.log(values);
     }}
      >
        (
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         
       ) = (
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="firstName">
          First Name
        </Label>
        <Input
          id="firstname"
          name="firstName"
          placeholder="enter first name"
          type="text"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="lastName">
          Last Name
        </Label>
        <Input
          id="lastname"
          name="lastName"
          placeholder="enter last name"
          type="text"
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="enter email"
          type="email"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="password">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="enter password"
          type="password"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
      Address
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="1234 Main St"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleAddress2">
      Address 2
    </Label>
    <Input
      id="exampleAddress2"
      name="address2"
      placeholder="Apartment, studio, or floor"
    />
  </FormGroup>
  <Button type='submit'>
    Sign in
  </Button>
</Form>
) */}
      </Container>
    </>
  )
}

export default App
