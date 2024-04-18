import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center">
        <Image src="/drink.png" alt="drink" width={200} height={200} />

        <h1 className="tracking-widest prose prose-xl text-nowrap">
          Lets explore all cocktails
        </h1>

        <Link href={"/cocktails"} className="btn btn-default my-6">
          Click here
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
