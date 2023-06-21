export const ProductsMainpage = () => {
  const prods = [
    {
      name: "28' Prasant városi",
      img: "https://static.wixstatic.com/media/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg",
      price: "32 490 Ft",
    },
    {
      name: "28' Prasant városi",
      img: "https://static.wixstatic.com/media/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg",
      price: "32 490 Ft",
    },
    {
      name: "28' Prasant városi",
      img: "https://static.wixstatic.com/media/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg",
      price: "32 490 Ft",
    },
    {
      name: "28' Prasant városi",
      img: "https://static.wixstatic.com/media/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg",
      price: "32 490 Ft",
    },
    {
      name: "28' Prasant városi",
      img: "https://static.wixstatic.com/media/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg",
      price: "32 490 Ft",
    },
    {
      name: "28' Prasant városi",
      img: "https://static.wixstatic.com/media/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c5e733_2bd9214da7c04a1cab310b457fac179e~mv2.jpg",
      price: "32 490 Ft",
    },
  ];

  return (
    <div className="h-96 p-3 pr-0 md:pl-20 pl-5 flex overflow-y-hidden overflow-x-scroll">
      {prods.map((prod, index) => (
        <div
          className="bg-[#1f1f1f] text-white w-60 mx-3 rounded-lg"
          key={index}
        >
          <img
            src={prod.img}
            alt={prod.name}
            className="h-40 rounded-t-lg object-cover w-60"
          />
          <div className="flex flex-col w-60 justify-evenly h-44">
            <p>{prod.name}</p>
            <p>{prod.price}</p>
            <a className="self-center mx-3" href={prod.name}>
              <button aria-label="shop" className="">
                <span>Shop</span>
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
