import React from "react";

interface OrderItemProps {
  dish: {
    imageUrl: string;
    title: string;
    status: string;
    time: string;
  };
  getStatusColor: (status: string) => string;
}

const OrderItem: React.FC<OrderItemProps> = ({ dish, getStatusColor }) => {
  const { imageUrl, title, status, time } = dish;

  return (
    <div className="dish-item py-2 bg-white flex md:flex-1 flex-row gap-4 p-2 rounded-2xl relative shadow-md| hover:translate-x-5 transition-all hover:shadow-lg max-w-96">
      <img src={imageUrl} alt={title} className="w-20 rounded-full" />
      <div className="title-status flex flex-col justify-center text-left">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className={`${getStatusColor(status)} font-medium`}>{status}</p>
      </div>
      <p className="text-gray-400 text-xs absolute right-4 bottom-2 font-semibold">
        {time}
      </p>
    </div>
  );
};

export default OrderItem;
