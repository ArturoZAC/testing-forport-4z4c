'use client';

const submit = ( e: React.FormEvent ) => {
  e.preventDefault();
}

export const Form = () => {
  return (
    <div className="w-full max-w-1/2 max-md:max-w-full h-auto">
      <form action="https://formsubmit.co/arturoyz2105@gmail.com" method="POST" className="flex flex-col gap-y-8" onSubmit={submit}>
        <div className="flex flex-col gap-y-4 body-large-r text-body-large-d max-md:text-body-large-m">
          <label htmlFor="name">Your Name</label>
          <input placeholder="Name" type="text" name="name" id="name" className="px-4 min-h-12 input-custom"/>
        </div>
        <div className="flex flex-col gap-y-4 body-large-r text-body-large-d max-md:text-body-large-m">
          <label htmlFor="email">Your Email</label>
          <input placeholder="name123@gmail.com" type="email" name="email" id="email" className="px-4 min-h-12 input-custom"/>
        </div>
        <div className="flex flex-col gap-y-4 body-large-r text-body-large-d max-md:text-body-large-m">
          <label htmlFor="message">Your Message</label>
          <textarea placeholder="Message" name="message" id="message" className="p-4 min-h-40 resize-none input-custom"></textarea>
        </div>
        <button type="submit" className="h-full min-h-12 bg-linear-to-l from-violet-600 to-fuchsia-600 rounded-md lead-b text-lead-d max-md:text-lead-m hover:from-violet-900 hover:to-fuchsia-900 transition-colors duration-300">Send</button>
      </form>
    </div>
  );
};
