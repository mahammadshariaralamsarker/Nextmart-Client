 
import CartProducts from "@/components/modules/Cart/CartProduct";
import Coupon from "@/components/modules/Cart/Coupon";
import ProductBanner from "@/components/modules/products/banner/ProductBanner";
import NMContainer from "@/components/ui/core/NMContainer";

const CartPage = () => {
  return (
    <NMContainer>
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />
        <Coupon />
      </div>
    </NMContainer>
  );
};

export default CartPage;