
export const Form = () => {
  return (
    <div className="w-full max-w-1/2h-auto">
      <form className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <label htmlFor="name" className="text-body-large-r-d">Your Name</label>
          <input placeholder="Name" type="text" name="name" id="name" className="px-4 min-h-12 input-custom"/>
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="email" className="text-body-large-r-d">Your Email</label>
          <input placeholder="name123@gmail.com" type="text" name="email" id="email" className="px-4 min-h-12 input-custom"/>
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="message" className="text-body-large-r-d">Your Message</label>
          <textarea placeholder="Message" name="message" id="message" className="p-4 min-h-40 resize-none input-custom"></textarea>
        </div>
        <button type="submit" className="h-full min-h-12 bg-linear-to-l from-violet-700 to-fuchsia-700 rounded-md text-lead-b-d hover:from-violet-900 hover:to-fuchsia-900 transition-colors duration-300">Send</button>
      </form>
    </div>
  );
};
