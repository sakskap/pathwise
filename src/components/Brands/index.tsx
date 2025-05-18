import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-1 pb-1 bg-white"> {/* reduced padding here */}
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 px-4 py-6 sm:px-6 md:px-8 md:py-6 xl:p-6 2xl:px-8 2xl:py-8">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, imageLight, name } = brand;

  return (
    <div className="flex items-center justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="flex items-center justify-center bg-white p-2 rounded-md shadow-sm"
      >
        <Image
          src={imageLight}
          alt={name}
          width={200} // optional: you can reduce this too
          height={50}
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </a>
    </div>
  );
};
