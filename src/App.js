import React, { Component } from "react";
import './estilo.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      num:0,
      botao: 'Iniciar'
    }
    this.time = null
    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)
  
  }

  iniciar(){
    if(this.time !== null){
     clearInterval(this.time)
     this.time = null
     let state = this.state
     state.botao = 'Continuar'
     this.setState(state)
    }else{
   this.time = setInterval(()=>{
    let state = this.state
    state.botao = 'Pausar'
    this.setState(state)
    state.num += 0.1
    this.setState(state)
   },100)}
  }
  limpar(){
    clearInterval(this.time)
    this.time = null
    let state = this.state
    state.botao = 'Iniciar'
    this.setState(state)
    state.num = 0
    this.setState(state)
  }
  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"></img>
        <a className="cro">{this.state.num.toFixed(1)}</a>
        <div className="con-butto">
          <a className="btn" onClick={this.iniciar}>{this.state.botao}</a>
          <a className="btn" onClick={this.limpar}>Limpar</a>
        </div>
      </div>
    );
  }
}

export default App;
