import React from 'react';

function EstadoAHijo(props){
    return(
        <div>
            {props.contadorHijo}
        </div>
    )

}

export default class Estado extends React.Component{

    constructor(props){
        super(props)
        this.state={
            contador:0
        }

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        
        }, 1000);
    
    }

    
    render(){
        return(
            <div>
                <h1>Elemento estado</h1>
                <h2>{this.state.contador}</h2>
                <EstadoAHijo
                    contadorHijo={this.state.contador}
                />
            </div>
        )
    }
}