import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onChangeHandler = (fieldName, value)=>{
    if(fieldName === "name"){
      setName(value);
    }
    else if(fieldName==="email"){
      setEmail(value);
    }
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(name.trim()==="" || email.trim() ===""){
      alert("required both field");
    }
    else{
      alert(name+" " +email);
      setName("");
      setEmail("");
    }
  }
  return (
    <div className="App">
    <form onSubmit={(e)=>{onSubmitHandler(e)}}>
      <input type="text" value={name} onChange={(e)=>{ onChangeHandler("name",e.target.value)}} placeholder='Enter name' /> <br/>
       <input type="email"  value={email} onChange={(e)=>{ onChangeHandler("email",e.target.value)}} placeholder='Enter Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" /> <br/>
       <input type="submit" value="Submit" />
      </form>
  </div>
  );
}

export default App;
