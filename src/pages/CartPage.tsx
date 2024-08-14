import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { CartItem } from '../App'; // Ensure correct import path
import SubFooter from '../components/SubFooter';

interface CartPageProps {
  cartItems: CartItem[];
  removeFromCart: (courseId: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, removeFromCart }) => {
    console.log('Cart Items:', cartItems); // Debug line
    return (
        <>
    <div className="py-10 px-14">
      <h1 className="mb-6 text-[32px] font-[720]">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className='mb-16 '>
        <p className=' font-medium text-[18px] mb-7'>Your cart is empty. Keep shopping to find a course!</p>
        <Link to="/home">
              <button className='bg-[#A435F0] hover:bg-[#8710D8] text-[#FFFFFF] font-bold px-[16px] py-[10px]'>
              Keep shopping
              </button>
            </Link></div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center">
              <img src={item.image} alt={item.title} className="object-cover h-20" />
              <div className="flex-1 ml-3 -mt-3 -mr-10">
                <h2 className="font-bold text-[16px]">{item.title}</h2>
                <p className="text-[#6A6F73]">By {item.instructor}</p>
                <p className="font-bold text-[17px] mt-1">${item.price}</p>
              </div>
              <button className='-mt-10'
                onClick={() => removeFromCart(item.id)}
              >
                <MdDelete size={24} className='fill-[#A435F0] hover:fill-[#8710D8]'/>
              </button>
              
            </div>
          ))}
          <div className="flex justify-center gap-5 pt-5 pb-9">
            <Link to="/home">
              <button className='hover:bg-[#E3E7EA] border border-[#2D2F31] font-bold px-[16px] py-[10px]'>
                Continue Shopping
              </button>
            </Link>
            <button className='hover:bg-[#3E4143] border border-[#2D2F31] bg-[#2D2F31] text-[#FFFFFF] font-bold px-[15px] py-[10px] -ml-[12px] -mr-[12px]'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    <SubFooter />
    </>
  );
};

export default CartPage;
