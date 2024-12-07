import Footer from "./components/Footer";
import Header from "./components/Header";
import { Products } from "./components/Products";
import { IS_DEVELOPMENT } from "./config";
import { products as initialValue } from './mocks/products.json'
import { useFilter } from "./hooks/useFilter";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cart";

export default function App() {
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(initialValue)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}