import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { selecteditem } from "../atoms";
import { fonts, sizes, textSizes, weight } from "../options";
import Select from "./Select";
import { ColorPicker, useColor } from "react-color-palette";

const controls = `bg-gray-800 w-64 rounded-lg absolute py-3 bottom-2 hoverEffects flex flex-col items-center justify-center gap-2`;

function togglePalette() {
  document.querySelector(".colorPick")?.classList.toggle("hoverEffects");
};

function Board() {
  const icon = useAtom(selecteditem)[0];
  const nameRef = useRef<any>();
  const matchRef = useRef<any>(true);
  const [font, setFont] = useState("font-poorStory");
  const [size, setSize] = useState("text-4xl");
  const [fw, setFw] = useState("font-[400]");
  const [name, setName] = useState("Logo Gene");
  const [color, setColor] = useColor("hex", "#00323f");
  const [iconSize, setIconSize] = useState("300");
  const [fontColor, setFontColor] = useState(color?.hex);

  const handleFontColor = () => {
    matchRef.current = !matchRef.current;
    matchRef.current && setFontColor(color?.hex);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div
        className="p-3 bg-white min-h-[800px] w-[800px] max-h-[86vh]0 max-w-[80vw] flex-col flex items-center justify-center 
      shadow-xl rounded-lg hover:shadow-2xl relative lg:max-w-[50vw]"
      >
        <Icon icon={icon} width={`${iconSize}px`} color={color?.hex} />

        <h3
          style={{ color: matchRef.current ? color.hex : fontColor }}
          className={`truncate max-w-[750px] py-2 ${font} ${size} ${fw}`}
        >
          {name}
        </h3>
        <div className={`${controls} right-1`}>
          <Select
            handleChange={(e: any) => setFont(e.target.value)}
            label="Font Style"
            options={fonts}
          />
          <Select
            handleChange={(e: any) => setSize(e.target.value)}
            label="Font Size"
            options={sizes}
          />
          <Select
            handleChange={(e: any) => setFw(e.target.value)}
            label="Font Weight"
            options={weight}
          />
        </div>
        <div className={`${controls} left-1`}>
          <Select
            handleChange={(e: any) => setIconSize(e.target.value)}
            label="Logo Size"
            options={textSizes}
          />
          <div className="flex flex-col relative max-w-[400px] items-center">
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") setName(nameRef.current?.value);
              }}
              type="text"
              placeholder="Enter Title"
              ref={nameRef}
              className="py-1 px-3 outline-none rounded-lg bg-gray-100 font-medium shadow-xl"
            />
            <Icon
              onClick={() => setName(nameRef.current?.value)}
              icon="ic:round-send"
              width={28}
              className="text-lime-800 hover:text-lime-700 absolute right-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Icon
          icon={"ion:color-palette"}
          width={33}
          className="text-green-800 hover:text-lime-700 cursor-pointer"
          onClick={togglePalette}
        />
        <button onClick={handleFontColor} className="p-3 flex-row flex items-center" title="Match Color With Logo">
          {matchRef.current ? (
            <Icon
              icon={"mdi:checkbox-multiple-blank-outline"}
              width={33}
              color={"#720013"}
            />
          ) : (
            <Icon
              icon={"mdi:checkbox-multiple-marked"}
              width={33}
              color={"#810016"}
            />
          )}
        </button>
      </div>
      <div className="p-3 colorPick">
        <ColorPicker
          width={456}
          height={228}
          color={color}
          onChange={setColor}
          hideHSV
          dark
        />
      </div>
    </section>
  );
}

export default Board;
