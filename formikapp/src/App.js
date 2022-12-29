import './App.css';
import { Field, Form, Formik } from 'formik'
import { Helmet } from 'react-helmet'

function App() {

  const addedlist = () => {

    const li = document.createElement("li");

    const listforadded = document.getElementById("listim")

    const value = document.getElementById("formforadded")

    li.appendChild(value)
    listforadded.append(li)

  }
  return (
    <>

      <Helmet>
        <title> Helmet practices</title>
        <meta name='description' content='helmetpractic' />
      </Helmet>

      <Formik initialValues={{
        name: "",
        surname: "",
        email: "",
        about: "",
        phone: "",
      }}
        onSubmit={(values) => {

          console.log(values);
        }}>

        {
          (props) =>
          (

            <Form id='formforadded'>

              <Field name="name" id="all" />  <br /> <br />
              <Field name="surname" id="all" /> <br /> <br />
              <Field name="email" id="all" /> <br /> <br />
              <Field name="about" id="all" /> <br /> <br />
              <Field name="phone" id="all" /> <br /> < br />
              <button type='submit' onClick={addedlist}>Submit</button>
            </Form>
          )
        }

      </Formik>

      <ul id="listim">
      </ul>

    </>
  );
}

export default App;
