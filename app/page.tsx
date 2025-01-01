import Image from "next/image";

export default async function Home() {
  const fetchData = async () => {
    try {
      const data = await fetch('https://fakestoreapi.com/products')
      const res = await data.json();
      return res;
    }
    catch (error) {
      return error;
    }
  }
  const data = await fetchData();
  
  return (
    <>
    <nav className="bg-black text-white">
      <ul className="flex gap-4 justify-center p-4 text-2xl lg:text-4xl">
        <li className="select-none cursor-pointer">Home</li>
        <li className="select-none cursor-pointer">Cart</li>
        <li className="select-none cursor-pointer">Profile</li>
        <li className="select-none cursor-pointer">Logout</li>
      </ul>
    </nav>
    <main className="w-full mx-auto p-8 bg-[#f0f0f0]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
      {
            data.map((item: any) => (
              <div key={item.id} className="bg-white flex flex-col items-center gap-2 justify-between border border-black w-[full] rounded-lg p-4 hover:shadow-2xl cursor-pointer duration-100">
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <Image src={item.image} alt={item.title} width={124} height={100} className="select-none"/>
                <p className="">{item.description}</p>
                <span className="flex gap-2 justify-between w-full">
                  <span className="flex gap-4 justify-between">
                    <p className="text-gray-500 font-bold text-2xl line-through">${item.price}</p>
                    <p className="font-bold text-2xl">${Math.floor(Math.abs(item.price-10))}</p>
                  </span>
                  <p className="font-bold text-2xl">⭐{item.rating.rate}</p>
                </span> 
              </div>
            ))
        }
      </div>
    </main>
    <footer className="bg-black text-white ">
      <div className="flex flex-col items-center gap-4 justify-center p-4 text-4xl">
        <h2 className="font-bold text-2xl">Footer</h2>
        <p className="font-bold text-xl">Assignment 7 using fakestoreapi</p>
        <p className="font-bold text-xl">Copyright &copy; 2023</p>
      </div>
      
    </footer>
    </>
  );
}
