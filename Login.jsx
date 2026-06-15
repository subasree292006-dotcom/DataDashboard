import Logpic from "../assets/logpic.jpg"
import Logo from "../assets/logo 2.jpg"
function Login(){
    return(
        
            <div className="items-center justify-between flex" 
            style={{alignItems:"center",
            
            alignItems:"center",
            justifyContent:"space-between",
                textAlign:"center",
                display:"flex",
                height:"100vh"
            }}>
                <div style={{ background:"transparent",
            color:"black",
            border:"white",
            width:"700px",
            height:"500px",
            borderRadius:"10px"
        }}>
            <img style={{ alignItems:"center",marginTop:"10px",padding:"2px",}} src={Logo} width="150px"></img>
 <h2 style={{ alignItems:"center"}}> Login</h2>
<form>
    <center>
    <table >
    <tr>
        <td> Email:</td><td> <input type="Email" placeholder="Enter Email"></input></td>
    </tr>
    <br/>

    <tr>
        <td> Password:</td><td> <input type="Password" placeholder="Enter Password"></input></td>
    </tr>
    <br/>

 </table>
<button style={{ marginRight:"20px",cursor:"pointer"}} > Login</button>
 <button style={{ cursor:"pointer"}}> Reset</button>
</center>
</form>
            </div>
            <img src={Logpic} style={{ width:"500px",height:"600px"}} ></img>
        </div>
        
    );
}
export default Login;