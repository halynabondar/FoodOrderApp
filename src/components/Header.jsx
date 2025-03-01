import logo from '../assets/logo.jpg';
import Button from "./Button.jsx";
import {useContext} from "react";
import {CartContext} from "./CartContext.jsx";

export default function Header() {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id='title'>
                <img src={logo} alt='logo'/>
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}