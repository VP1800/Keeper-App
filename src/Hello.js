import React from 'react';
function Hello(){
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.desc}</h2>
        </div>
    );
}
export default Hello;
//app.js
//app.js
// function createHello(info){
//     return <div><Hello name={info.name} number={info.number}/></div>
// }
// return App{
//     return (
//         <div>
//         {info.map{createHello}}
//         </div>
//     )
// }