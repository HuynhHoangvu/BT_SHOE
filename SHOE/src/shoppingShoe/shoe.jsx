export default function Shoe(props) {
  const { data, handleDetailProps, handleAddProps } = props;

  return (
    <div className="w-60 bg-white border rounded-lg shadow hover:shadow-md transition flex flex-col">
      {/* Hình ảnh */}
      <img
        className="w-full h-40 object-contain p-2"
        src={data.image}
      />

      {/* Nội dung */}
      <div className="p-4 flex flex-col flex-1">
        <h5 className="text-base font-semibold text-gray-900">{data.name}</h5>
        <p className="text-gray-600 mb-2">{data.price} $</p>

        {/* Nút thêm vào giỏ */}
        <button onClick={()=>{handleAddProps(data)}}
          type="button"
          className="mt-auto w-full py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
        >
          add to carts 🛒
        </button>
        {/* Nút chi tiết sản phẩm */}
         <button onClick={()=>{handleDetailProps(data)}}
          type="button"
          className="mt-3 w-full  py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-300 transition"
        >
          detail 🛒
        </button>
      </div>
    </div>
  );
}
