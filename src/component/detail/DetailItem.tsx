import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../../store/useProductStore";
import { FaStar } from "react-icons/fa6";
import Button from "../ui/Button";
import useCartStore from "../../store/useCartStore";

function DetailItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products } = useProductStore();
  const item = products.find((v) => v.id === Number(id));
  const addItem = useCartStore(state => state.addItem);

  if (!item) return null;
  const onLoadCart = () => {
    addItem(item, 1);
    navigate(`/pay`);
  }
  return (
    <div className="max-w-[900px] mx-auto pb-32">
      {/* 이미지 */}
      <img
        className="w-full max-h-[500px] object-cover rounded-md"
        src={`${process.env.PUBLIC_URL}${item?.thumbnail}`}
        alt={item?.name}
      />

      {/* 상품 정보 */}
      <div className="mt-4 px-4">
        {/* 이름 + 평점 */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">{item?.name}</h2>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" size={20} />
            <span className="text-lg font-semibold">{item?.rating}</span>
            <span className="text-gray-500 text-sm">
          ({item?.reviewCount.toLocaleString()})
        </span>
          </div>
        </div>

        {/* 할인 영역 */}
        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-red-600 text-lg">
            {Math.round(((item?.realPrice - item?.price) / item?.realPrice) * 100)}%
          </span>
          <span className="text-gray-400 line-through">{item?.realPrice.toLocaleString()}원</span>
          <span className="text-gray-500 text-sm">할인 적용가</span>
        </div>

        {/* 최종 가격 */}
        <p className="text-3xl font-bold mt-1">
          {item?.price.toLocaleString()}원
        </p>

        {/* USP (핵심 장점) */}
        <div className="mt-4 bg-gray-100 p-3 rounded-lg">
          <h3 className="font-semibold mb-2">이 제품의 특징</h3>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            {item?.usp?.map((u: string, i: number) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 하단 고정 구매 버튼 */}
      <div className="border-t fixed bottom-0 left-0 w-full bg-white py-4 px-4">
        <Button onClick={onLoadCart} disabled={false} className="">
          구매하기
        </Button>
      </div>
    </div>
  )
}
export default DetailItem;