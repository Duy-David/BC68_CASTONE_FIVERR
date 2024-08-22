import React from "react";

const RatingComponent = ({ danhGia, saoCongViec }) => {
  const reviews = danhGia;
  const rating = saoCongViec;
  const starBreakdown = [
    { stars: 5, count: 0 },
    { stars: 4, count: 0 },
    { stars: 3, count: danhGia },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md w-full ">
      <div className="text-xl font-bold">{reviews} Reviews</div>
      <div className="flex gap-12">
        <div>
          {starBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center mb-1">
              <div className="w-20">{item.stars} Stars</div>
              <div className="flex-1 bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${(item.count / reviews) * 100}%` }}
                ></div>
              </div>
              <div className="w-10 text-right">{item.count}</div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="font-semibold">Rating Breakdown</div>
          <ul className="text-sm ">
            <li>
              Seller communication level{" "}
              <span className="float-right text-yellow-500 ml-3 ">5★</span>
            </li>
            <li>
              Recommend to a friend{" "}
              <span className="float-right text-yellow-500 ml-3 ">5★</span>
            </li>
            <li>
              Service as described{" "}
              <span className="float-right text-yellow-500 ml-3 ">5★</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex gap-5">
        <label className="inline-block text-lg font-semibold ">Filters</label>
        <select className="w-full p-2 border border-gray-300 rounded-md">
          <option>All Industries</option>
        </select>
      </div>
     </div>
  );
};

export default RatingComponent;
