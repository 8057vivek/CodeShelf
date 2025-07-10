import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context"

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`cart(${cartList.length})`);

    return (
      <main>       
        { cartList.length ? <CartList /> : <CartEmpty /> }   
      </main>
    )
}