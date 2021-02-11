/**COMPONENTES
 * -Hay 3 maneras de crear un componente (de clase, funcional, y arrow function)
 */

import React from 'react';

//componente de clase
class Componente extends React.Component{
    render(){
        return(
            <h2>{this.props.message}</h2>
        )
    }
}

//componente funcional
function Componente1(props){
    return <h2>{props.message}</h2>
}

//componente empleando arrow function
const Componente2 = (props) =><h1>{props.message}</h1>


export {Componente,Componente1, Componente2}