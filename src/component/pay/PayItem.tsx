import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import Button from "../ui/Button";
import QuantitySelector from "../ui/QuantitySelector";
import useCartStore from "../../store/useCartStore";
import { loadTossPayments } from "@tosspayments/payment-sdk";

function PayItem() {
  const navigate = useNavigate();
  const { items, updateQty, removeItem } = useCartStore();
  console.log(items);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  )
  const onPayment = async () => {
    try {
      const tossPayments = await loadTossPayments("test_ck_ex6BJGQOVDONEEQj6Rwq3W4w2zNb");

      await tossPayments.requestPayment("카드", {
        amount: totalPrice,
        orderId: `order_${new Date().getTime()}`,
        orderName: "장바구니 결제",
        customerName: "채주원",
        successUrl: `${window.location.origin}/#/pay/success`,
        failUrl: `${window.location.origin}/#/pay/fail`,
      });

    } catch (error) {
      if (error === "USER_CANCEL") {
        console.log("사용자가 결제를 취소했습니다.");
        return;
      }
      console.error(error);
    }
  };
  return (
    <div className="max-w-[900px] mx-auto px-4 my-4">
      {items.map((item) => (
        <Card className="mt-3" key={item.id}>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-100">
              <img src={`${process.env.PUBLIC_URL}${item.thumbnail}`} alt={item.name} className="w-24" />
            </div>
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="">{item.price.toLocaleString()}원</p>
            </div>
          </div>
          <QuantitySelector
            id={item.id}
            qty={item.qty}
            onIncrease={() => updateQty(item.id, item.qty + 1)}
            onDecrease={() => updateQty(item.id, item.qty - 1 > 1 ? item.qty - 1 : 1)}
            onClear ={() => removeItem(item.id)} />
        </Card>
      ))}
      <div className="border-t fixed bottom-0 left-0 w-full bg-white py-4 px-4">
        <Button onClick={onPayment} disabled={false} className="">
          총금액 {totalPrice.toLocaleString()}원
        </Button>
      </div>
    </div>
  )
}
export default PayItem;