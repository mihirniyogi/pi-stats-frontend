const ProgressBar = (props: { percentage: number }) => {
  return (
    <div
      className={`bg-progressbar h-[0.8em] relative overflow-hidden 
                  ml-2 w-full rounded-lg
                  sm:ml-4 sm:w-3/4 sm:rounded-lg
                  md:ml-4 md:w-2/3 md:rounded-xl
                  lg:ml-4 lg:w-1/2 lg:rounded-2xl
                  `}
    >
      <div
        className={`bg-jadegreen h-full`}
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
