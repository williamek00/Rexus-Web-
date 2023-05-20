import { addProduct , editProduct ,  fetchCategory,  fetchProductId} from "../store/action/actionCreator"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [formProduct, setFormProduct] = useState({
        name: "",
        description:"",
        mainImg:"",
        price:0,
        categoryId:0,
        image1:"image1",
        image2:"image2"
    });
    const {category}= useSelector((state)=>{
        return state.categoryReducer
    })
    function handleOnChange(e) {
        setFormProduct({
            ...formProduct,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        dispatch(fetchCategory())
        if (id) {
            dispatch(fetchProductId(id)).then((result) => {
                setFormProduct({ name: result.name , description: result.description , mainImg: result.mainImg , price : result.price , categoryId:result.categoryId});

            });
        }
    }, [dispatch, id]);


    function handleProduct(e) {
        e.preventDefault();
        if (!id) {
            dispatch(addProduct(formProduct));
        }
        else {
            dispatch(editProduct(formProduct, id));
        }
        navigate("/keyboard");
        setFormProduct({ name: "" });
    }

   
    return (
        <>
             <div className="min-h-screen flex items-center justify-center">
                    <div className="max-w-md w-full">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                    {!id ? (
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">New Product</h1>
                ) : (
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Product</h1>
                )}
                        <form onSubmit={handleProduct} > 
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name 
                            </label>
                            <input required className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formProduct.name} onChange={handleOnChange} name="name" id="username" type="text" placeholder="Username"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                            Description
                            </label>
                            <input required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={formProduct.description} onChange={handleOnChange} name="description" id="description" type="text" placeholder="Description"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="mainImg">
                            Main Image
                            </label>
                            <input required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={formProduct.mainImg} onChange={handleOnChange} name="mainImg" id="mainImg" type="text" placeholder="Main Image"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                            Price
                            </label>
                            <input required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={formProduct.price} onChange={handleOnChange} name="price" id="price" type="integer" placeholder="Price"/>
                        </div>
                        <div className="mb-3">
  <label htmlFor="product-type" className="block text-gray-700 font-bold mb-2">
    Category <span className="text-red-600">*</span>
  </label>
  <select
    onChange={handleOnChange}
    value={formProduct.categoryId}
    name="categoryId"
    id="product-type"
    className="form-select block w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    required
  >
    <option>--Select Category--</option>
    {category.map((el) => {
      return (
        <option value={el.id} key={el.id}>
          {el.name}
        </option>
      );
    })}
  </select>
</div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Save
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
        </>
    )
                            
}