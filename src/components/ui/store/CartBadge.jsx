import { Link } from "react-router-dom";

function CartBadge() {
  return (
    <Link
      to="/carts"
      className="relative rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
    >
      Cart
    </Link>
  );
}

export default CartBadge;