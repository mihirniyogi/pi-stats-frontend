import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RingProgressBar = (props: {
  width: number;
  height: number;
  value: number;
  text: string;
  pathStroke: string;
  pathStrokeLinecap: "butt" | "round" | "square" | undefined;
  trailStroke: string;
  textFill: string;
  fontSize: string;
}) => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <CircularProgressbar
        value={props.value}
        text={props.text}
        styles={{
          path: {
            stroke: props.pathStroke,
            strokeLinecap: props.pathStrokeLinecap,
          },
          trail: {
            stroke: props.trailStroke,
          },
          text: {
            fill: props.textFill,
            fontSize: props.fontSize,
          },
        }}
      />
    </div>
  );
};

export default RingProgressBar;
