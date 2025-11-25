import { FaRegTrashCan } from "react-icons/fa6";
interface QuantitySelectorProps {
  id: number;
  qty: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onClear: () => void;
}

function QuantitySelector({ id, qty, onDecrease, onIncrease, onClear }: QuantitySelectorProps) {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-4">
        <button
          onClick={onDecrease}
          className="w-10 h-10 rounded-full bg-gray-200 text-xl flex items-center justify-center"
        >
          -
        </button>

        <span className="text-xl font-semibold">{qty}</span>

        <button
          onClick={onIncrease}
          className="w-10 h-10 rounded-full bg-gray-200 text-xl flex items-center justify-center"
        >
          +
        </button>
      </div>

      <button onClick={onClear}
              className="w-10 h-10 rounded-full bg-gray-200 text-xl flex items-center justify-center"
      >
        <FaRegTrashCan />
      </button>
    </div>
  )
}
export default QuantitySelector;