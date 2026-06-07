import { formatRupiah } from "../../utils/formatRupiah";

export default function ShopCoffeePage() {
  const product = [
    { id: 1, src: "/images/beans-01.JPG", name: "KAMOJANG", price: 180000 },
    { id: 2, src: "/images/beans-02.JPG", name: "TOLU BATAK", price: 180000 },
    { id: 3, src: "/images/beans-03.jpg", name: "WONOCOYO MAGELANG", price: 180000 },
    { id: 4, src: "/images/beans-04.jpg", name: "BALI PEACH BLOSOM", price: 180000 },
    { id: 5, src: "/images/beans-05.jpg", name: "TOBA SUMATRAN", price: 180000 },
    { id: 6, src: "/images/beans-06.jpg", name: "ETHIOPIA YIRGACHEFFE", price: 180000 },
    { id: 7, src: "/images/beans-07.jpg", name: "GAYO LYCHEE BLOSOM", price: 180000 },
    { id: 8, src: "/images/beans-08.jpg", name: "KARO", price: 180000 },
  ];

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-10 md:pl-15 px-5 w-screen h-full md:my-10 mt-30">
        {product.map((item)=>
        <ul>
          <li key={item?.id}>
            <div className="card md:bg-base-100 md:w-96 shadow-sm">
              <figure>
                <img
                  src={item.src}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <div>
                  <h3>start from</h3>
                  <p className="font-bold">{formatRupiah(item.price)}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      )}
      </div>
    </>
  );
}
