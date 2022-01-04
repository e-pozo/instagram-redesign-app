export const VIOLET = "#833ab4";
export const RED = "#fd1d1d";
export const BLUE = "#5390d9";
export const ORANGE = "#fcb045";
export const GREEN = "#06d6a0";
export const GREY = "#8a8a8a";
export const BLACK = "#171717";
const { sin, cos, PI, round } = Math;

function toRad(grad) {
  return grad * (PI / 180);
}
export const instagramGradient = (angle) => {
  return `linear-gradient(${angle}deg, ${VIOLET} 0%, ${RED} 50%, ${ORANGE} 100%)`;
};

export const shadow = (direction, length, blur) => {
  if (direction.includes("rad")) direction = parseFloat(direction);
  else if (direction.includes("deg")) direction = toRad(parseFloat(direction));
  else {
    throw new Error("Unit not allowed. Use rad or deg");
  }
  const a = round(length * sin(direction));
  const b = round(length * cos(direction));
  return `${a}px ${b}px ${blur}px #bebebe, ${-a}px ${-b}px ${blur}px #ffffff`;
};
