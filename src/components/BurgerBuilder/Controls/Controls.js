import React from 'react';
import './Controls.css';
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap';



const controls = [
    { label: "Salad", type: "salad"},
    { label: "Cheese", type: "cheese"},
    { label: "Meat", type: "meat"}
]

const BuildControls = props =>{
        return (
            <div className="d-flex justify-content-between px-5">
                <div className="ml-5 label">{props.label}</div>
                <div>
                    <button className="btn btn-danger btn-sm m-1" onClick={props.remove}>Less</button>
                    <button className="btn btn-success btn-sm m-1" onClick={props.added}>More</button>
                </div>
            </div>
        )
}

const Controls = props => {
    return(
        <div className="container ml-md-5">
            <Card className="Card">
                <CardHeader className="CardHeader text-center"><h4>Add Ingredients</h4></CardHeader>
                <CardBody>
                   {
                        controls.map(item => {
                            return <BuildControls 
                            label={item.label}
                            type = {item.type}
                            key = {Math.random()}
                            added={()=> props.ingredientAdded(item.type)}
                            remove={()=> props.ingredientRemove(item.type)}/>
                        })
                   }
                </CardBody>
                <CardFooter className="text-center">
                    <h5> Price : <strong>{props.price}</strong> BDT</h5>
                </CardFooter>
            </Card>
        </div>
    )
}



export default Controls;