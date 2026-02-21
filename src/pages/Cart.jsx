import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0)
    return <p className="p-6">Cart is empty.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.code}
          className="flex justify-between items-center border p-3 mb-2"
        >
          <p>{item.product_name}</p>

          <button
            onClick={() => removeFromCart(item.code)}
            className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={clearCart}
        className="bg-black text-white px-4 py-2 mt-4 rounded cursor-pointer"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;