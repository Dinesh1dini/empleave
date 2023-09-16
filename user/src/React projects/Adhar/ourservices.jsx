import React from "react";
import styled from "styled-components";
//import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
//import Services from "./ervices";






const Services = () => {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cat = searchParams.get('cat');

 // console.log(cat);
    const [services,setPost] = useState({});
       

  

    useEffect(()=>{
 
        const getPost = async () =>{
            const res = await axios.get("http://localhost:5000/api/addservices?cat=" + cat);
            setPost(res.data);
           
        }
     getPost();
    
       },[cat]);

//console.log(services);


const [username,setUsername] = useState("");
const [number,setNumber] = useState("");
const [servicetype,setServicetype] = useState("");
const [desc,setDesc] = useState("");

//console.log(sort);

const handleSubmit = async(e) =>{
    e.preventDefault();
      try{

  const res = await axios.post("http://localhost:5000/api/userrequest",{
    username,
    number,
    servicetype,
    desc,
    });

res.data && window.location.replace("/");

 console.log(res.data)

     }catch(err){
     }}





  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
       
      
     
      {services.length > 0 ? (
  services.map((p) => 
  
             <div  className="card">
              
              <div className="card-data">
                <h3 key={p._id}>{p.servicetitle}</h3>
                <p key={p._id}>{p.desc}</p>
                <NavLink to="">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          
  )
          ): (
            <p>No services found.</p>
              )}
          
            
              
          
          
          
          


      </div>



      <div className="container">
        <div className="contact-form">
          <form 
           onSubmit={handleSubmit}
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              onChange={(e)=>setUsername(e.target.value)}
              required
            />

            <input
              type="text"
              name="Number"
              placeholder="Number"
              onChange={(e)=>setNumber(e.target.value)}

              autoComplete="off"
              required
            />


    <select  onChange={(e)=>setServicetype(e.target.value)}  required>
    <option value="">Select</option>
    {services.length > 0 ? (
  services.map((p) => 
        <option value={p.servicetitle}>{p.servicetitle}</option>
        )
        ): (
          <p>No services found.</p>
            )}
      </select>



            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              onChange={(e)=>setDesc(e.target.value)}
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>


    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

 

  .container {
    margin-top: 6rem;
    text-align: center;



    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }





  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
