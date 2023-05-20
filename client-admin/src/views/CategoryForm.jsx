import { addCategory , editCategory , fetchCategoryId } from "../store/action/actionCreator"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function AddCategory() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [formCategory, setFormCategory] = useState({
        name: "",
    });
    function handleOnChange(e) {
        setFormCategory({
            ...formCategory,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchCategoryId(id)).then((result) => {
                setFormCategory({ name: result.name });

            });
        }
    }, [dispatch, id]);


    function handleCategory(e) {
        e.preventDefault();
        if (!id) {
            dispatch(addCategory(formCategory));
        }
         else {
            dispatch(editCategory(formCategory, id));
        }
        navigate("/category");
        setFormCategory({ name: "" });
    }
    return (
        <>

             <div className="min-h-screen flex items-center justify-center">
            
                    <div className="max-w-md w-full">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                    {!id ? (
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">New Category</h1>
                ) : (
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Category</h1>
                )}
                        <form onSubmit={handleCategory} >
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                            </label>
                            <input required className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formCategory.name} onChange={handleOnChange} id="name" name="name"type="text" placeholder="name"/>
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