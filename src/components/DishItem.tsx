import React from "react";
import star from "../Images/Star.svg";
import add from "../Images/icons/Add.svg";
import "./DishItem.css";

interface DishItemProps {
  dish: Dish;
  tagColor: string;
}

interface Dish {
  name: string;
  rating: number;
  imageUrl: string;
  tagName: string;
  deliveryTime: number;
  cost: string;
}

const DishItem: React.FC<DishItemProps> = ({ dish, tagColor }) => {
  return (
    <div className="p-4 flex flex-col relative">
      <img src={dish.imageUrl} alt={dish.name} className="h-auto" />
      <div className="text-left flex flex-col gap-3 items-start">
        <h4 className=" font-bold">{dish.name}</h4>
        <div className={`tag ${tagColor} py-1 px-2 rounded-md`}>
          {dish.tagName}
        </div>
        <div className="rating flex gap-3">
          <p>{dish.deliveryTime} mins</p>
          <span className="bullet">&bull;</span>
          <img src={star} alt="star-image" className="w-5" />
          <p>{dish.rating}</p>
        </div>
        <p className="cost font-bold text-2xl">
          ${dish.cost}
          <span className="text-xs text-gray-400">.99</span>
        </p>
      </div>
      <button className=" add-btn absolute bottom-3 right-3">
        {/* <img src={add} alt="add" className="absolute bottom-3 right-3" /> */}
        <svg
          width="45"
          height="41"
          viewBox="0 0 45 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.922852"
            y="0.884766"
            width="43.8299"
            height="39.7208"
            rx="8.93034"
            fill="#323142"
          />
          <mask id="path-2-inside-1_1421_175" fill="white">
            <path d="M29.8003 21.9623H23.4608V28.3912H20.9309V21.9623H14.6211V19.6705H20.9309V13.2119H23.4608V19.6705H29.8003V21.9623Z" />
          </mask>
          <path
            d="M29.8003 21.9623H23.4608V28.3912H20.9309V21.9623H14.6211V19.6705H20.9309V13.2119H23.4608V19.6705H29.8003V21.9623Z"
            fill="black"
          />
          <path
            d="M29.8003 21.9623V26.0714H33.9094V21.9623H29.8003ZM23.4608 21.9623V17.8533H19.3517V21.9623H23.4608ZM23.4608 28.3912V32.5002H27.5698V28.3912H23.4608ZM20.9309 28.3912H16.8218V32.5002H20.9309V28.3912ZM20.9309 21.9623H25.0399V17.8533H20.9309V21.9623ZM14.6211 21.9623H10.512V26.0714H14.6211V21.9623ZM14.6211 19.6705V15.5615H10.512V19.6705H14.6211ZM20.9309 19.6705V23.7796H25.0399V19.6705H20.9309ZM20.9309 13.2119V9.10286H16.8218V13.2119H20.9309ZM23.4608 13.2119H27.5698V9.10286H23.4608V13.2119ZM23.4608 19.6705H19.3517V23.7796H23.4608V19.6705ZM29.8003 19.6705H33.9094V15.5615H29.8003V19.6705ZM29.8003 17.8533H23.4608V26.0714H29.8003V17.8533ZM19.3517 21.9623V28.3912H27.5698V21.9623H19.3517ZM23.4608 24.2821H20.9309V32.5002H23.4608V24.2821ZM25.0399 28.3912V21.9623H16.8218V28.3912H25.0399ZM20.9309 17.8533H14.6211V26.0714H20.9309V17.8533ZM18.7301 21.9623V19.6705H10.512V21.9623H18.7301ZM14.6211 23.7796H20.9309V15.5615H14.6211V23.7796ZM25.0399 19.6705V13.2119H16.8218V19.6705H25.0399ZM20.9309 17.321H23.4608V9.10286H20.9309V17.321ZM19.3517 13.2119V19.6705H27.5698V13.2119H19.3517ZM23.4608 23.7796H29.8003V15.5615H23.4608V23.7796ZM25.6913 19.6705V21.9623H33.9094V19.6705H25.6913Z"
            fill="white"
            mask="url(#path-2-inside-1_1421_175)"
          />
        </svg>
      </button>
      <button className="heart-btn absolute top-3 right-3">
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.363281 6.66277C0.363281 3.27527 3.33514 0.666992 6.82344 0.666992C8.62159 0.666992 10.2039 1.51012 11.3393 2.60107C12.4747 1.51012 14.057 0.666992 15.8551 0.666992C19.3434 0.666992 22.3153 3.27527 22.3153 6.66277C22.3153 8.98325 21.3257 11.0239 19.9547 12.7488C18.5861 14.4707 16.7959 15.9322 15.0818 17.1197C14.427 17.5732 13.7647 17.9917 13.1585 18.3004C12.5893 18.5903 11.9348 18.8558 11.3393 18.8558C10.7438 18.8558 10.0893 18.5903 9.52007 18.3004C8.91388 17.9917 8.25153 17.5732 7.59682 17.1197C5.88271 15.9322 4.09245 14.4707 2.72384 12.7488C1.35285 11.0239 0.363281 8.98325 0.363281 6.66277ZM6.82344 2.54859C4.21523 2.54859 2.24488 4.4667 2.24488 6.66277C2.24488 8.42332 2.99224 10.0625 4.19684 11.578C5.40382 13.0966 7.02782 14.4365 8.66835 15.573C9.28912 16.003 9.87382 16.369 10.374 16.6237C10.9111 16.8972 11.2222 16.9742 11.3393 16.9742C11.4564 16.9742 11.7675 16.8972 12.3046 16.6237C12.8048 16.369 13.3895 16.003 14.0102 15.573C15.6508 14.4365 17.2748 13.0966 18.4817 11.578C19.6863 10.0625 20.4337 8.42332 20.4337 6.66277C20.4337 4.4667 18.4633 2.54859 15.8551 2.54859C14.3572 2.54859 12.9585 3.44351 12.0851 4.57937C11.907 4.81098 11.6314 4.94671 11.3393 4.94671C11.0471 4.94671 10.7715 4.81098 10.5935 4.57937C9.72011 3.44351 8.32139 2.54859 6.82344 2.54859Z"
            fill="#323142"
          />
        </svg>
      </button>
    </div>
  );
};

export default DishItem;
