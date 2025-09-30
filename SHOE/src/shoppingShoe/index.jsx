import { useState } from 'react'
import Shoe from './shoe';
import data from './shoe.json'
import Detail from './detail';
import Cart from './cart';
export default function ShoppingShoe() {
    const[listShoe,setListShoe] = useState(data);
    const[detailShoe,setDetailShoe] = useState(null);
    const [listCart,setListCart] = useState([])
    const renderListShoe = () =>{
        return listShoe.map((item)=>{
            return <Shoe key={item.id} data={item} handleDetailProps ={handleDetail} handleAddProps = {handleAdd} />
        })
    }
    const handleDetail = (data) =>{
      setDetailShoe(data)
    }
    // HandleAdd
    const findIndexCart = (id) => {
      const index = listCart.findIndex((item) => item.id == id)
      return index;
    }
    const handleAdd = (data) => {
      const productToCart = {
        id: data.id,
        name: data.name,
        quantity: 1,
        price:data.price
      };
      const index = findIndexCart(productToCart.id);
      if(index != -1) {
        const newListCarts = [...listCart];
        newListCarts[index].quantity += 1;
        setListCart(newListCarts)
      }else{
        const newListCarts = [...listCart,productToCart]
        setListCart(newListCarts)
      }
    };
    // HanleRemove
    const handleRemoveShoe = (id) =>{
      const newListCarts = listCart.filter((item)=>item.id !== id);
      setListCart(newListCarts);
    }
    const hanleQuantity = (id,isValid) =>{
      const index = findIndexCart(id);
      if(index !== -1){
        const newListCarts = [...listCart];
        if(isValid) {
          newListCarts[index].quantity += 1;
        }else {
          newListCarts[index].quantity -= 1;
          if(newListCarts[index].quantity <=0){
            newListCarts.splice(index,1)
          }
        }
        setListCart(newListCarts)
      }
    }


  return (
     <div className="container mx-auto">
    <div className="grid grid-cols-5 gap-6 my-6">
  <div className="col-span-2">
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <Cart listCart={listCart} hanleQuantityProps={hanleQuantity} handleRemoveShoeProps={handleRemoveShoe} />
      <h2 className="text-lg font-semibold">Chi tiết sản phẩm</h2>
      {/* detail content */}
      <Detail detailShoe = {detailShoe} />
    </div>
  </div>

  <div className="col-span-3 grid grid-cols-3 gap-3">
    {renderListShoe()}
  </div>
</div>

   
    </div>
  )
}
