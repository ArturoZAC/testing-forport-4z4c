import Image from "next/image";

export const BackImage = () => {
  return (
    <div className="flex justify-center items-center relative bottom-3 max-lg:bottom-5">
      <div className="flex justify-center items-center absolute -z-10">
        <Image src="/custom/arcwithg.png" alt="bg" width={850} height={330} className="mask-x-from-70% mask-x-to-90% mask-y-from-45% mask-y-to-85% not select-none h-[330px] max-middle:w-[830px] max-lg:h-[290px]" />
      </div>
    </div>
  );
};
