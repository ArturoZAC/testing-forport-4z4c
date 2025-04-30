
export const Form = () => {
  return (
    <div className="w-full max-w-1/2h-auto">
      <form className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <label htmlFor="name" className="text-body-large-r-d">Your Name</label>
          <input type="text" name="name" id="name" className="px-4 min-h-12 input-custom"/>
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="email" className="text-body-large-r-d">Your Email</label>
          <input type="text" name="email" id="email" className="px-4 min-h-12 input-custom"/>
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="message" className="text-body-large-r-d">Your Message</label>
          <textarea name="message" id="message" className="p-4 min-h-40 resize-none input-custom"></textarea>
        </div>
        <button type="submit" className="h-full min-h-12 bg-emerald-500 rounded-md text-body-large-r-d hover:bg-emerald-800 transition-colors duration-300">Send</button>
      </form>
    </div>
  );
};
