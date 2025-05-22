
export const SideMiddle = () => {
  const numDots = 4;

  return (
    <div>
      <div className="w-10 flex justify-center h-full">
        <div className="h-auto bg-border w-1 flex flex-col items-center">
        {Array.from({ length: numDots }).map((_, index) => (
          <div
            key={index}
            className={`h-5 w-5 rounded-full bg-gradient-to-l from-violet-600 to-fuchsia-500 ${
              index === 0 
                ? '' 
                : index === 1 
                  ? 'mt-[185px]' 
                  : index === 2 
                    ? 'mt-[150px]'
                    : 'mt-[175px]'
            }`}
          ></div>
        ))}
        </div>
      </div>
    </div>
  );
};