const BASE_URL = "http://127.0.0.1:8000/storage/";

const DeliveredOrderCard = ({ order }) => {
  return (
    <div className="rounded-3xl border border-color bg-background shadow-md overflow-hidden">

      {/* Top Bar */}
      <div className="bg-buttons text-buttons px-5 py-2 flex justify-between">
        <span>Order #{order.id}</span>
        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
          Delivered
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {order.items?.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-input border border-color rounded-xl p-3"
          >
            <div className="flex gap-4 items-center">

              <img
                src={item.product?.images?.[0]?.startsWith("http") 
                  ? item.product.images[0] 
                  : `${BASE_URL}${item.product.images?.[0]}`}
                className="w-16 h-16 rounded object-cover"
              />

              <div>
                <p className="text-sm font-semibold">
                  {item.product_name}
                </p>
                <p className="text-xs text-fullGray">
                  {item.size} • {item.color}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p>x{item.quantity}</p>
              <p className="text-xs text-fullGray">
                Rs {item.price}
              </p>
            </div>

          </div>
        ))}

        <div className="flex justify-between border-t pt-3">
          <p className="text-xs text-fullGray">
            Delivered successfully
          </p>
          <p className="font-semibold">
            Rs {order.total_price}
          </p>
        </div>

      </div>
    </div>
  );
};

export default DeliveredOrderCard;