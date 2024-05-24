import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Style from "./index.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useGetModelQuery, useDeleteModelMutation} from "../../services/ProductQuerySlice"
import { Link } from 'react-router-dom';
const index = () => {
 const {basket ,setBasket}=useState('')

    const { data: products, error, isLoading , refetch} = useGetModelQuery()
    const [deleteOne, {isError, isSuccess}]=useDeleteModelMutation()
  return (
   <>
  
   <div className={Style.container} >
      <Row>
     
        {products && products.products.map((product)=>{

            return(
                <Col lg={3} sm={12}>
                <div className={Style.card}>
                    <div className={Style.cardImg}>
                        <img src={product.img} alt="" />
                    </div>
                    <div className={Style.cardInfo}>
                        <h5>{product.title}</h5>
                    </div>
                    <button onClick={async()=>{
                         if (window.confirm("delete?")){
                       await deleteOne(product._id);
                       refetch()
                         }
                    }}>delete</button>
                    <button > <Link to={`/detail/${product._id}`}>detail</Link></button>
                    <button onClick={()=>{
                      const foundItem =basket.find((x)=>x.id == product.id);
                    if (foundItem) {
                      foundItem.count += 1;
                      setBasket([...basket]);
                      localStorage.setItem("basket", JSON.stringify(basket));
                    } else {
                      const basketProduct = {...product};
                      basketProduct.count = 1;
                      setBasket((currentBasket)=>{
                        currentBasket.push(basketProduct);
                        localStorage.setItem("basket", JSON.stringify(currentBasket));
                        return [...currentBasket];
                      });
                    }
                  }}>basket</button>
                </div>
                
                </Col>
            )
        })}
       
      </Row>
    </div>
   
   
   </>
  )
}

export default index