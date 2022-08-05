import { FunctionComponent, useContext } from "react";
import Stripe from "stripe";
import CartContext from "./context";

type CardProps = {
    price: Stripe.Price
}

const ProductCard: FunctionComponent<CardProps> = ({ price }) => {
    const { add } = useContext(CartContext)

    const addToCart = (p: Stripe.Price) => {
        if (add) {
            add(p)
        }
    }

    return (
        <div>
           
        </div>
    );
};

export default ProductCard;