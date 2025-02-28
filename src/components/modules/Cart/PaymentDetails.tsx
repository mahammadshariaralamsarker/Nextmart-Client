"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/CurrencyFormatter";
import {
  citySelector,
  grandTotal,
  orderedProductSelector,
  orderSelector,
  shippingAddressSelector,
  shippingCostSelector,
  subtotalSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

export default function PaymentDetails() {
  const Subtotal = useAppSelector(subtotalSelector);
  const shippingCost = useAppSelector(shippingCostSelector);
  const order = useAppSelector(orderSelector);
  const grandtotal = useAppSelector(grandTotal);
  const city = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);
  const cartProducts = useAppSelector(orderedProductSelector);

  const handleOrder = async () => {
    const orderLoading = toast.loading("Order is being placed");
    try {
      if (cartProducts.length === 0) {
        throw new Error("Cart is empty, what are you trying to order ??");
      }
      if (!city) {
        throw new Error("City is missing");
      }
      if (!shippingAddress) {
        throw new Error("Shipping address is missing");
      }
      toast.success("Order Created Successfully" ,{ id: orderLoading });
    
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message, { id: orderLoading });
    }

    console.log("order", order);
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold"> {currencyFormatter(Subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold"> xx</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold"> {currencyFormatter(shippingCost)}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold"> {currencyFormatter(grandtotal)}</p>
      </div>
      <Button
        onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
}
