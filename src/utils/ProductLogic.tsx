import { Star } from "lucide-react";

type StarProps = {
  rating: number;
};
export const SistemStar = (props: StarProps) => {
  const { rating } = props;
  const listOfStar = [];
  const StarNumber = Math.floor(rating);
  const StarDecimal = rating % 1 < 0.5;
  let width = "w-2/2";
  for (let i = 0; i < 5; i++) {
    if (StarNumber < i || (StarDecimal && StarNumber === i)) {
      width = "w-0";
    } else if (StarNumber === i) {
      width = "w-1/2";
    }

    listOfStar.push(
      <div className="relative w-4 h-4">
        <Star className="absolute inset-0 w-4 h-4 fill-gray-300 text-gray-300" />

        <div className={`absolute inset-0 ${width} overflow-hidden`}>
          {<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
        </div>
      </div>
    );
  }
  return listOfStar;
};

