import { LucideBackpack, LucideKey } from "lucide-react";
import "./globals.css";
let amount = 0;
export default function Home() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-12 py-4">
          <ul>
            <li className="text-2xl text-[#ff9a00]">ნათურა</li>
          </ul>
          <ul className="flex justify-center space-x-12 items-center text-lg">
            <li className="cursor-pointer hover:text-[#ff9a00] duration-150">
              პროდუქტი
            </li>
            <li className="cursor-pointer hover:text-[#ff9a00] duration-150">
              გუნდი
            </li>
            <li className="cursor-pointer hover:text-[#ff9a00] duration-150">
              ჩვენს შესახებ
            </li>
          </ul>
          <ul>
            <button className="bg-[#ff9a00] rounded px-4 py-2 text-white text-md flex justify-center items-center space-x-[5px]">
              <span>
                <LucideBackpack />
              </span>
              <span>{amount}</span>
            </button>
          </ul>
        </nav>
        <div className="w-[90%] h-[2px] rounded-full bg-[#ff9a00] mx-auto mt-[10px]"></div>
      </header>
      <main>
        <section id="hero" className="container mx-auto mt-24">
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="flex justify-center items-center space-x-2">
              <h1 className="text-2xl custom-heading-class">
                <span className="animate-color-change">
                  მომავალი ღონისძიებები
                </span>
              </h1>
              <span>
                <img
                  className="w-[40px] h-[40px]"
                  src="/images/icons/light-bulbik.svg"
                  alt="light bulb"
                />
              </span>
            </div>
            <div className="w-full flex justify-center items-center">
              <img
                className="w-[80%] h-[500px] rounded-xl"
                src="/images/events/event-placeholder-second.jpeg"
                alt="event placeholder"
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-24">
          <div className="flex justify-center items-center flex-col space-y-12">
            <div className="flex justify-center items-center text-3xl">
              <h2>პროდუქტები</h2>
            </div>
            <div className="grid grid-cols-3 gap-9">
              <div className="relative border-[0.1px] border-solid border-black rounded-xl px-2 py-2 flex flex-col justify-center items-start space-y-4">
                <div>
                  <img
                    className="rounded-xl"
                    src="/images/products/natura.png"
                    alt="natura product"
                  />
                </div>
                <div className="flex justify-center items-start flex-col space-y-2 px-2">
                  <span className="text-xl">ბურგერი შავი ტრუფელით</span>
                  <span>
                    <p className="max-w-[80%] text-[#c29553]">
                    პური, საქონლის ხორცი, კარამელიზირებული ხახვი, კეჩუნეზი, ყველის სოუსი, შავი ტრუფელი
                    </p>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    <span className="text-lg">13.44 $</span>
                    <button className="bg-[#ff9a00] rounded px-4 py-2">
                      <LucideBackpack
                        color="white"
                        className="w-[20px] h-[20px]"
                      />
                    </button>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    <span className="text-md">ნახე როგორ მზადდება</span>
                    <button className="bg-[#ff9a00] rounded px-4 py-2">
                      <LucideKey color="white" className="w-[20px] h-[20px]" />
                    </button>
                  </span>
                </div>
                <div className="absolute top-0 right-2 bg-[#f8ac3c] rounded px-4 py-2 text-white">
                  <span>პოპულარული</span>
                </div>
              </div>
              <div className="border-[0.1px] border-solid border-black rounded-xl px-2 py-2 flex flex-col justify-center items-start space-y-4">
                <div>
                  <img
                    className="rounded-xl"
                    src="/images/products/product3.png"
                    alt="natura product"
                  />
                </div>
                <div className="flex justify-center items-start flex-col space-y-2 px-2">
                  <span className="text-xl">ძაან ბურგერი</span>
                  <span>
                    <p className="max-w-[80%] text-[#c29553]">
                    პური,საქონლის ხორცი,საფირმო სოუსი,აისბერგი,ყველი ჩედარი,კომბოსტოს მარინადი
                    </p>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    <span className="text-lg">11.44 $</span>
                    <button className="bg-[#ff9a00] rounded px-4 py-2">
                      <LucideBackpack
                        color="white"
                        className="w-[20px] h-[20px]"
                      />
                    </button>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    <span className="text-md">ნახე როგორ მზადდება</span>
                    <button className="bg-[#ff9a00] rounded px-4 py-2">
                      <LucideKey color="white" className="w-[20px] h-[20px]" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="border-[0.1px] border-solid border-black rounded-xl px-2 py-2 flex flex-col justify-center items-start space-y-4">
                <div>
                  <img
                    className="rounded-xl"
                    src="/images/products/product2.png"
                    alt="natura product"
                  />
                </div>
                <div className="flex justify-center items-start flex-col space-y-2 px-2">
                  <span className="text-xl">ცივი ჩაი</span>
                  <span>
                    <p className="max-w-[80%] text-[#c29553]">
                      ცივი ყავა ნაყინით დაბალკალორიული ცივი ყავა ნაყინით
                    </p>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    <span className="text-lg">10.44 $</span>
                    <button className="bg-[#ff9a00] rounded px-4 py-2">
                      <LucideBackpack
                        color="white"
                        className="w-[20px] h-[20px]"
                      />
                    </button>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    <span className="text-md">ნახე როგორ მზადდება</span>
                    <button className="bg-[#ff9a00] rounded px-4 py-2">
                      <LucideKey color="white" className="w-[20px] h-[20px]" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="border-[0.1px] border-solid border-black rounded-xl px-2 py-2 flex flex-col justify-center items-start space-y-4">
                <div>
                  <img
                    className="rounded-xl"
                    src="/images/products/product1.png"
                    alt="natura product"
                  />
                </div>
                <div className="flex justify-center items-start flex-col space-y-2 px-2">
                  <span className="text-xl">წვენი</span>
                  <span>
                    <p className="max-w-[80%] text-[#c29553]">
                      ფრეში სტაფილო და გრეიფრუტი ფორთოხალი მწვანე ვაშლი მწვანე
                      ვაშლი და სტაფილო
                    </p>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    <span className="text-lg">9.44 $</span>
                    <button className="bg-[#ff9a00] rounded px-4 py-2">
                      <LucideBackpack
                        color="white"
                        className="w-[20px] h-[20px]"
                      />
                    </button>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    <span className="text-md">ნახე როგორ მზადდება</span>
                    <button className="bg-[#ff9a00] rounded px-4 py-2">
                      <LucideKey color="white" className="w-[20px] h-[20px]" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
