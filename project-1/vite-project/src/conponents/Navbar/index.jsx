import React from 'react'
import Style from "./index.module.css"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const index = () => {
  return (
   <>
   <div className={Style.nav}>
    <div className={Style.container}>
        <div className={Style.logo}>
            <h2>COLOSHOP</h2>
        </div>
        <div className={Style.button}>
            <Button><Link className={Style.link} to={"/"}>Home</Link></Button>
            <Button><Link className={Style.link} to={"/detail"}>Detail</Link></Button>
            <Button><Link className={Style.link} to={"/add"}>Add</Link></Button>
            <Button><Link className={Style.link} to={"/basket"}>Basket</Link></Button>
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default index