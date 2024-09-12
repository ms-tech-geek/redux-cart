import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItems.map((cartItem) => (
					<CartItem
						key={cartItem.itemId}
						item={{
							title: cartItem.name,
							quantity: cartItem.quantity,
							total: cartItem.totalPrice,
							price: cartItem.price,
						}}
					/>
				))}
			</ul>
		</Card>
	);
};

export default Cart;
