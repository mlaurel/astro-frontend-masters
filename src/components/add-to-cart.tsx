/** @jsxImportSource react */

import { addItemToCart } from "../stores/cart";

console.log('AddToCart');
export const AddToCart = ({ item }: { item: ShopItem }) => {

    return (
        <button className="big-link" onClick={() => addItemToCart(item)}>
            Add to Cart
        </button>
    )
}
