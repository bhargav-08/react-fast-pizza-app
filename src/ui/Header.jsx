import { Link } from 'react-router-dom';
import OrderSearch from '../features/order/OrderSearch';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="flex flex-1 items-center justify-around border-b border-stone-200 bg-yellow-500 p-6 uppercase text-stone-800 sm:p-4">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <OrderSearch />
      <UserName />
    </header>
  );
}

export default Header;
