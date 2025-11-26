import useCartStore from "../../store/useCartStore";

function PaySuccess() {
  const clear = useCartStore(state => state.clear);
  setTimeout(() => {
    clear();
    window.location.replace("/");
  }, 2000);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">결제 성공!</h1>
      <p>주문이 정상적으로 완료되었습니다.</p>
    </div>
  );
}

export default PaySuccess;