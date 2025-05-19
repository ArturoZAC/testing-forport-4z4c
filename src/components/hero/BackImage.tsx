import Image from "next/image";

export const BackImage = () => {
  return (
    <div className="flex justify-center items-center relative bottom-3">
      <div className="flex justify-center items-center absolute -z-10">
        <Image src="/custom/arcwithg.png" alt="bg" width={980} height={430} style={{ height: '430px'}}  className="mask-x-from-70% mask-x-to-90% mask-y-from-45% mask-y-to-85% not select-none" />
      </div>
    </div>
  );
};
