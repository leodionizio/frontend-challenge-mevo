import RockImage from "../assets/rock.svg";
import ScizorImage from "../assets/scizor.svg";
import PaperImage from "../assets/paper.svg";
import NoElementImage from "../assets/no-element.svg";
import { Elements } from "../types/elements";
import { Button } from "./ui/button";
import { useCallback, useMemo } from "react";

type ElementButtonProps = {
  element?: Elements;
  onSelect: (element: Elements) => void;
};

export const ElementButton = ({ element, onSelect }: ElementButtonProps) => {
  const elementImages = useMemo(() => {
    return { rock: RockImage, scizor: ScizorImage, paper: PaperImage };
  }, []);

  const getElementImage = useMemo(() => {
    if (!element) return NoElementImage;
    return elementImages[element];
  }, [element, elementImages]);

  return (
    <div>
      <Button
        variant="ghost"
        width={130}
        height={130}
        rounded={100}
        padding={1}
        onClick={() => onSelect(element!)}
      >
        <img src={getElementImage} alt="" width={130} height={130} />
      </Button>
    </div>
  );
};
