
export const SideMiddle = () => {
  const numDots = 5;

  return (
    <div className="max-md:hidden">
      <div className="w-10 flex justify-center h-full">
        <div className="h-auto bg-border/50 w-1 flex flex-col items-center">
        {Array.from({ length: numDots }).map((_, index) => (
          <div
            key={index}
            className={`h-5 w-5 rounded-full bg-gradient-to-l from-violet-600 to-fuchsia-500 ${
              index === 0 
                ? 'mt-[25px]'
                : index === 1 
                  ? 'mt-[180px]' 
                  : index === 2 
                    ? 'mt-[200px]'
                    : index === 3
                      ? 'mt-[160px]'
                      : 'mt-[210px]'
            }`}
          ></div>
        ))}
        </div>
      </div>
    </div>
  );
};