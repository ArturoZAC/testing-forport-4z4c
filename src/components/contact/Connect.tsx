
export const Connect = () => {
  return (
    <div className="w-full max-w-1/2 max-md:max-w-full bg-fourth rounded-2xl h-[inherit]">
      <div className="py-10 px-8 flex flex-col gap-y-8 body-small-r text-body-small-d max-md:text-body-small-m">
        <p className="subtitle1-b text-subtitle-1-d max-md:text-subtitle-1-m  bg-gradient-to-l from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">Leave a message and connect with us</p>
        <p>Whether it’s feedback, collaboration, or simple curiosity, your message matters. Connect with us and let’s create something meaningful together.</p>
        <div className="grid grid-cols-2 gap-x-20 gap-y-10 w-fit">
          <div className="flex flex-row gap-x-4 w-fit p-4">
            <div>Icon</div>
            <p>Twitter</p>
          </div>
          <div className="flex flex-row gap-x-4 w-fit p-4">
            <div>Icon</div>
            <p>Twitter</p>
          </div>
          <div className="flex flex-row gap-x-4 w-fit p-4">
            <div>Icon</div>
            <p>Twitter</p>
          </div>
          <div className="flex flex-row gap-x-4 w-fit p-4">
            <div>Icon</div>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>

  );
};
