import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useEffect, useState } from "react";
const HeaderCartButton = props => {

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

    const { items } = cartCtx;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton;