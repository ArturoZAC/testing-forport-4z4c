export const HamburgerButton = (
  { toggleMenu, isMenuPressed }: {
    toggleMenu: () => void;
    isMenuPressed: boolean;
  },
) => {
  return (
    <button
      className="group inline-flex md:hidden w-8 h-8 text-slate-800 bg-gradient-to-r from-violet-700 to-fuchsia-700 text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
      aria-pressed={isMenuPressed}
      onClick={toggleMenu}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="w-6 h-6 fill-current pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg] text-white!"
          y="7"
          width="9"
          height="2"
          rx="1"
        >
        </rect>
        <rect
          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45 text-white!"
          y="7"
          width="16"
          height="2"
          rx="1"
        >
        </rect>
        <rect
          className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg] text-white!"
          y="7"
          width="9"
          height="2"
          rx="1"
        >
        </rect>
      </svg>
    </button>
  );
};
