const ProgressBar = (props: { percentage: number }) => {
  return (
    <div
      className={`bg-progressbar h-[0.8em] relative overflow-hidden 
                  w-full rounded-lg
                  sm:rounded-lg
                  md:rounded-xl
                  lg:rounded-2xl'
                   `}
    >
      <div
        className={`bg-jadegreen h-full transition-all duration-500`}
        style={{ width: `${props.percentage}%` }}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center text-[0.7em] font-semibold
            ${props.percentage > 50 ? "text-white" : "text-card"}`}
        >
          {props.percentage}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
