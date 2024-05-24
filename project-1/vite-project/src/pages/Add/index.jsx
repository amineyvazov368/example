import React from 'react'
import { useFormik } from 'formik';
import Style from "./index.module.css"
import {Helmet} from "react-helmet";
import * as Yup from 'yup';
import {usePostModelMutation} from "../../services/ProductQuerySlice"
const index = () => {

     const [postModel]= usePostModelMutation()
    const formik = useFormik({
        initialValues: {
          title: '',
          img: '',
          discribtion: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            img: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            discribtion: Yup.string().required('Required'),
        }),
        onSubmit:async(values) => {
          await postModel(values)
       
          refetch()
          formik.resetForm()
        },
      });
   
  return (
  <>

<div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
  
  <form  className={Style.from} onSubmit={formik.handleSubmit}>
       <label htmlFor="title">title</label> <br />
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 <br />
       <label htmlFor="img">img</label> <br />
       <input
         id="img"
         name="img"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.img}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.img}</div>
       ) : null}
 <br />
       <label htmlFor="discribtion">discribtion</label> <br />
       <input
         id="discribtion"
         name="discribtion"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.discribtion}
       />
       {formik.touched.discribtion && formik.errors.discribtion ? (
         <div>{formik.errors.discribtion}</div>
       ) : null}
  <br />
       <button type="submit">Submit</button>
     </form>

     {/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>

    </tr>
    {products && products.products.map((product)=>{
        return(
            <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
        )
  </thead>
    }
</table> */}
  
  </>
  )
}

export default index