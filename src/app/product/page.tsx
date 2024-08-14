import ProductCard from "@/components/ProductCard";

export default function Product() {
  return (
    <div className="bg-orange-200">
      <div className="bg-red-900 gap-8 w-full">
        {/* <div className="flex justify-center items-center py-4">
          <img
            alt="delicious chocolate flavored cookies"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtwwHDGA5IWe7OaegDciiN5PR6mmZRRv-yMcoLKm4-sWHGf-LbD8prW_LRys1Za1hEr0V2uvCJn8eGyJSdJ5gn_TgE5ata1MDJ8c7rdSQINItxsosgXf88ppRb9Bp9J3ENxB-SZlh_jrk/s1600/valentine_chocolates.png"
            className="w-72 h-72"
          />
        </div> */}
        <div className="flex justify-center items-center px-24 py-8 ">
          <h1 className="text-orange-200 text-5xl font-bold">Our Products</h1>
        </div>
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
}
