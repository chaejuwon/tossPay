import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
function Header() {
  const isDetail = useMatch("/detail/:id");
  const isPay = useMatch("/pay/");
  const title = isDetail ? '상세페이지' : isPay ? '장바구니' : '';

  const navigate = useNavigate()
  const onHistory = () => navigate(-1);
  const onHome = () => navigate(`/`);
  const onCart = () => navigate(`/pay`)
  return (
    <div className={`${title ? 'p-4 flex justify-between bg-gray-50' : 'p-4 bg-gray-50'}`}>
      {title ? (
        <>
          <FaArrowLeft className="cursor-pointer" fontSize="20" onClick={onHistory} />
          <h3 className="font-bold">{title}</h3>
        </>
      ) : null}
      <div className={`${title ? 'flex gap-4' : 'flex justify-between'}`}>
        <FaCartShopping className="cursor-pointer" fontSize="20" onClick={onCart} />
        <IoHomeSharp className="cursor-pointer" fontSize="20" onClick={onHome} />
      </div>
    </div>
  )
}
export default Header;