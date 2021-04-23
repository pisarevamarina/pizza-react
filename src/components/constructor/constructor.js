import React from 'react';
import _ from 'lodash';

function Constructor() {

    const [size, setSize] = React.useState(30);
    const [dough, setDough] = React.useState('deep-dish');
    const [sauce, setSauce] = React.useState('tomato');
    const [cheese, setCheese] = React.useState([]);
    const [greens, setGreens] = React.useState([]);
    const [meat, setMeat] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(200);
    const [orderItems, setOrderItems] = React.useState([]);


    function selectSize(evt) {
        const value = Number.parseInt(evt.target.value);
        if (value === 35) {
            const newPrice = totalPrice + 50;
            setTotalPrice(newPrice);
        } else {
            const newPrice = totalPrice - 50;
            setTotalPrice(newPrice);
        }
        setSize(value);
    }

    function selectDough(evt) {
        setDough(evt.target.value);
    }

    function selectSauce(evt) {
        setSauce(evt.target.value);
    }

    function selectCheese(evt) {
        if (_.includes(cheese, evt.target.value)) {
            const i = cheese.indexOf(evt.target.value);
            const newArray = [...cheese];
            newArray.splice(i, 1);
            setCheese(newArray);
            setTotalPrice(totalPrice - 29);

        } else {
            setCheese(prevValue => [...prevValue, evt.target.value]);
            setTotalPrice(totalPrice + 29);
        }
    }

    function selectGreens(evt) {
        if (_.includes(greens, evt.target.value)) {
            const i = greens.indexOf(evt.target.value);
            const newArray = [...greens];
            newArray.splice(i, 1);
            setGreens(newArray);
            setTotalPrice(totalPrice - 29);
        } else {
            setGreens(prevValue => [...prevValue, evt.target.value]);
            setTotalPrice(totalPrice + 29);
        }
    }

    function selectMeat(evt) {
        if (_.includes(meat, evt.target.value)) {
            const i = meat.indexOf(evt.target.value);
            const newArray = [...meat];
            newArray.splice(i, 1);
            setMeat(newArray);
            setTotalPrice(totalPrice - 29);
        } else {
            setMeat(prevValue => [...prevValue, evt.target.value]);
            setTotalPrice(totalPrice + 29);
        }

    }

    function showOrder(evt) {
        evt.preventDefault();
        const order = cheese.concat(greens, meat);
        setOrderItems(prevValue => [...prevValue, ...order.join(', ')]);
        setCheese([]);
        setGreens([]);
        setMeat([]);
        setSize(30);
        setSauce('tomato');
    }

    return (
        <div>
            <form className={'constructor'} onSubmit={showOrder}>
                <div className={'constructor__block'}>
                    <input onChange={selectSize} type='radio' defaultChecked value={30} name='gender'/> 30cm
                    <input onChange={selectSize} type='radio' value={35} name='gender'/> 35cm
                </div>
                <div className={'constructor__block'}>
                    <input onChange={selectDough} type='radio' defaultChecked value={'deep-dish'}
                           name='dough'/> Deep-dish pizza
                    <input onChange={selectDough} type='radio' value={'thin-crust'} name='dough'/> Thin-crust pizza
                </div>
                <div className={'constructor__block'}>
                    <input onChange={selectSauce} type='radio' defaultChecked value={'tomato'} name='dough'/> Tomato
                    sauce
                    <input onChange={selectSauce} type='radio' value={'white'} name='dough'/> White sauce
                    <input onChange={selectSauce} type='radio' value={'chilli'} name='dough'/> Chilli sauce
                </div>
                <div className={'constructor__block'}>
                    <input type='checkbox' onChange={selectCheese} value={'mozzarella'} name='cheese'/> Mozzarella
                    <input type='checkbox' onChange={selectCheese} value={'cheddar'} name='cheese'/> Cheddar
                    <input type='checkbox' onChange={selectCheese} value={'dor-blue'} name='cheese'/> Dor blue
                </div>
                <div className={'constructor__block'}>
                    <input type='checkbox' onChange={selectGreens} value={'tomato'} name='greens'/> Tomato
                    <input type='checkbox' onChange={selectGreens} value={'mushrooms'} name='greens'/> Mushrooms
                    <input type='checkbox' onChange={selectGreens} value={'pepper'} name='greens'/> Pepper
                </div>
                <div className={'constructor__block'}>
                    <input type='checkbox' onChange={selectMeat} value={'bacon'} name='cheese'/> Bacon
                    <input type='checkbox' onChange={selectMeat} value={'pepperoni'} name='cheese'/> Pepperoni
                    <input type='checkbox' onChange={selectMeat} value={'ham'} name='cheese'/> Ham
                </div>
                <button type={'submit'}>Make order</button>
            </form>
            <p>Ingredients: {orderItems}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
}

export default Constructor;
