import { useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { fetchProduct } from "../store/action/actionCreator";

export default function Home() {
  const {products ,  productsLoading} = useSelector((state)=> {
    return state.reducerProducts
  })
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchProduct())
  },[])

  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://rexus.id/wp-content/uploads/2022/01/page-web-K9E_page1-2048x918.jpg')",
        }}
      ></div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold">FEEL THE GAME</h1>
        <h5 className="text-lg mt-4">
          Enjoy the thrill of playing games with the best equipment from REXUS
        </h5>
      </div>

      {/* Cards */}

      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <div className="p-4 w-1/5" key={index}>
            <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6  transition duration-300 ease-in">
                <img
                  className="h-72 w-full object-cover object-center"
                  src={product.mainImg}
                  alt="blog"
                />

                <h1 className="text-2xl font-semibold mb-3 flex items-center justify-center">
                  {product.name}
                </h1>
                <p className="leading-relaxed mb-3"></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold">REXUS | MADE FOR EVERYONE!</h1>
        <p className="text-base mt-4 text-gray">
          Rexus is one of the fastest growing brands in gaming and mobile
          accessories in Indonesia, making it the preferred brand for many
          Indonesians. The reasons behind it are because Rexus is affordable to
          all groups of gamers and professionals, both men and women, without
          sacrificing its quality and innovation. In addition, our products are
          stylish, modern, elegant and innovative. Suitable for you who are
          young spirited, dynamic and love challenges. We have a vision where
          Rexus can become one of Indonesian pride products and place our brand
          as the best product in the country. For this believe, we collaborate
          with related agencies and companies to support the development of
          esports in Indonesia, such as the Indonesia Esports League (IEL)
          University Series. We also start our “Gamer Cerdas (Smart Gamer)”
          campaign which aims to change the traditional paradigms of parents and
          educational institutions to be more open to the existence of esports
          which turns out to be able to produce better performance and become a
          profession. We believe that “Everyone is Gamers”, each person is a
          player, who has extraordinary abilities and skills with different
          traits. Therefore, we offer our products for everyone. Rexus, Made For
          Everyone.
        </p>
      </div>

      <div class="fixed  bottom-5 right-5 z-50">
        <img
          src="data:image/jpeg;base64,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"
          alt="Logo"
          class="w-12 h-12"
        />
      </div>
    </>
  );
}
