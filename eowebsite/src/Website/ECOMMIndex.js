import React,{useEffect,useState} from 'react'
import './ECOMMIndex.css'
import logo from '../logo.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function ECOMMIndex(props) {
    const [user,setuser] = useState([])
    
    useEffect(()=>{
      console.log('hi hi');
      fetchfunction()
    },[])

  async function fetchfunction(){
    let fetchlink='https://dummyjson.com/products';
    try{ 
   await fetch(fetchlink)
   .then((response) => response.json())
   .then((json) => setuser(json))
//    .then((json) => console.log(json))

    }catch(err){
        console.log(err)
    }
    console.log(user.products)
    console.log({user})
   }
  return (
    <div>
        <header id="header">
            <div id="header-first">
                <img src={logo} alt='logo-img' id="img-logo" />
            </div>
            <div id="headertab">
                <ul>
                   <li className="Active"> <p>Home</p></li>
                   <li> <p>Shop</p></li>
                   <li> <p>TesTiMONIAL</p></li>
                   <li> <p>Contact us</p></li>
                    <li><p>👤Login</p></li>  
                    <li><p>🛒</p></li>
                    <li><p>🔍</p></li>
                </ul>
            </div >
        </header>
        <section>
        <div id="heading-fetch">
                    <h1>LATEST PRODUCT</h1>
                </div>
            <div id="container">
                
                {user.products?.map((users)=>{
                    return (<div  id="card-product">
                        <div id="card-image"><img src={users.images[0]} ></img></div>
                        <div id="card-text-contain"><p>{users.title}</p> <p>Price <span id="card-rate">${users.price}</span></p> </div>
                    </div>)
                })}
            </div>
            <div id="bottom-fetch" ><Button variant="outlined">VIew More</Button></div>
        </section>
        <footer id="footer">
            <div>
                <ul id="footer-list">
                    <li>
                        <ul id="About-footer">
                          <li  className="first-head-footer"><h4>About us</h4></li>
                          <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,</p></li>
                        </ul>
                        </li>
                    <li>
                        <ul  id="Newletter-footer">
                            <li className="first-head-footer"><h4>NewsLetter</h4></li>
                            <li><div>
                            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="filled-basic" label="Enter your email" variant="filled" />
        <Button variant="contained">SUBSCRIBE</Button>
</Box>

                                </div></li>
                        </ul>
                    </li>
                    <li>
                        <ul id="Needhelop-footer">
                            <li className="first-head-footer">
                                <h4>Need Help</h4>
                            </li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,</p></li>
                        </ul>
                    </li>
                    <li>
                        <ul id="Contact-footer">
                            <li className="first-head-footer">Contact us</li>
                            <li>🗺Gb road 123 london Uk</li>
                            <li>🗺+91 9977305440</li>
                            <li>🗺kishanmihani@gmail.com</li>
                        </ul>
                        </li>
                </ul>
            </div>
        </footer>
    </div>
  )
}
