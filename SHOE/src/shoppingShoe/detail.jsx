export default function Detail(props) {
    const {detailShoe} = props;
  return (
    <div className="container mx-auto mt-20">
      <h1>Thông số giày</h1>
      <div className="">
        <div>
          <img src={detailShoe?.image} alt="" className="rounded-t-lg" />
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
           <tbody>
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Alias
    </th>
    <td className="px-12 py-4">{detailShoe?.alias}</td>

  </tr>

  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Price
    </th>
    <td className="px-12 py-4">{detailShoe?.price}$</td>

  </tr>

  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Description
    </th>
    <td className="px-12 py-4">{detailShoe?.description}</td>

  </tr>

  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Short Description
    </th>
    <td className="px-12 py-4">{detailShoe?.shortDescription}</td>

  </tr>

  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Quantity
    </th>
    <td className="px-12 py-4 ">{detailShoe?.quantity}</td>

  </tr>

  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      Name
    </th>
    <td className="px-12 py-4">{detailShoe?.name}</td>

  </tr>
</tbody>

          </table>
        </div>
      </div>
    </div>
  )
}
