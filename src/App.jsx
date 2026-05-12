import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "white",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      <h1 style={{fontSize:"64px", color:"#00ff66"}}>RUBLOX</h1>

      <p>Rublox v1 UI</p>

      <div style={{
        marginTop:"30px",
        background:"#111",
        border:"1px solid #222",
        borderRadius:"20px",
        padding:"20px",
        width:"350px"
      }}>
        <h2>Регистрация</h2>

        <input placeholder="Никнейм" style={inp}/>
        <input placeholder="Email" style={inp}/>
        <input placeholder="Пароль" type="password" style={inp}/>

        <button style={btn}>Создать аккаунт</button>

        <button style={guest}>Играть как Guest</button>
      </div>
    </div>
  )
}

const inp = {
  width:"100%",
  marginTop:"10px",
  padding:"12px",
  background:"#1a1a1a",
  border:"1px solid #333",
  borderRadius:"12px",
  color:"white"
}

const btn = {
  width:"100%",
  marginTop:"16px",
  padding:"14px",
  background:"#00ff66",
  color:"black",
  border:"none",
  borderRadius:"14px",
  fontWeight:"bold",
  cursor:"pointer"
}

const guest = {
  width:"100%",
  marginTop:"10px",
  padding:"14px",
  background:"#222",
  color:"white",
  border:"1px solid #333",
  borderRadius:"14px",
  fontWeight:"bold",
  cursor:"pointer"
}
