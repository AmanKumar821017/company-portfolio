const Logo = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      
      {/* Creative R */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 35 35"
        className="text-white"
      >
        {/* Parallel R lines */}
        <path
          d="M4 38V4H20C28 4 33 8 33 15C33 21 29 24 23 25L35 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M8 38V8H20C25 8 29 10 29 15C29 19 26 21 21 21H8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M12 38V12H20C23 12 25 13 25 15C25 17 23 18 20 18H12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M16 38V22L28 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* INFINE */}
      <span
         className="text-2xl font-black tracking-[0.25em] 
             bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600
             bg-clip-text text-transparent
             drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] " // hover:tracking-[0.4em] transition-all duration-300
      >
        INfINE
      </span>
    </div>
  );
};

export default Logo;