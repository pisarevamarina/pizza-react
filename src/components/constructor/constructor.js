import React from 'react';

function Constructor() {

    const [size, setSize] = React.useState(30);
    const [dough, setDough] = React.useState('deep-dish');
    const [sauce, setSauce] = React.useState('tomato');
    const [cheese, setCheese] = React.useState([]);
    const [greens, setGreens] = React.useState([]);
    const [meat, setMeat] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);


    function selectSize(evt) {
        setSize(Number.parseInt(evt.target.value));
    }

    function selectDough(evt) {
        setDough(evt.target.value);
    }

    function selectSauce(evt) {
        setSauce(evt.target.value);
    }

    function selectCheese(evt) {
        setCheese(prevValue => [...prevValue, evt.target.value]);
    }

    function selectGreens(evt) {
        setGreens(prevValue => [...prevValue, evt.target.value]);
    }

    function selectMeat(evt) {
        setMeat(prevValue => [...prevValue, evt.target.value]);
    }

    function submitOrder() {
        let summ = 200;

        if (size !== 30) {
            summ = 250;
        }
        if (cheese.length && cheese.length > 0) {
            let cheesePrice = 29 * cheese.length;
            summ = summ + cheesePrice;
        }

        if (greens.length && greens.length > 0) {
            let greensPrice = 29 * greens.length;
            summ = summ + greensPrice;
        }

        if (meat.length && meat.length > 0) {
            let meatPrice = 29 * meat.length;
            summ = summ + meatPrice;
        }
        setTotalPrice(summ);

        showOrder();
    }

    function showOrder () {
        if (cheese.length && cheese.length > 0) {
            setOrderItems(prevValue => [...prevValue, ...cheese.join(', ')]);
        }

        if (greens.length && greens.length > 0) {
            setOrderItems(prevValue => [...prevValue, ...greens.join(', ')]);
        }

        if (meat.length && meat.length > 0) {
            setOrderItems(prevValue => [...prevValue, ...meat.join(', ')]);
        }
    }

    return (
        <div className={'constructor'}>
            <div className={'constructor__block'}>
                <input onChange={selectSize} type='radio' defaultChecked value={30} name='gender'/> 30cm
                <input onChange={selectSize} type='radio' value={35} name='gender'/> 35cm
            </div>
            <div className={'constructor__block'}>
                <input onChange={selectDough} type='radio' defaultChecked value={'deep-dish'} name='dough'/> Deep-dish pizza
                <input onChange={selectDough} type='radio' value={'thin-crust'} name='dough'/> Thin-crust pizza
            </div>
            <div className={'constructor__block'}>
                <input onChange={selectSauce} type='radio' defaultChecked value={'tomato'} name='dough'/> Tomato sauce
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
            <button onClick={submitOrder}>Make order</button>
            <p>Your order: {orderItems}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
}

export default Constructor;
