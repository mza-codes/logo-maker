import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { selecteditem } from "../atoms";
import { fonts, sizes, textSizes, weight } from "../options";
import Select from "./Select";
import { ColorPicker, useColor } from "react-color-palette";
import html2canvas from "html2canvas";

const controls = `bg-gray-800 w-64 rounded-lg absolute py-3 bottom-2 hoverEffects flex flex-col items-center justify-center gap-2`;

function Board() {
    const icon = useAtom(selecteditem)[0];
    const nameRef = useRef<any>();
    const [match, setMatch] = useState(true);
    const [font, setFont] = useState("font-poorStory");
    const [size, setSize] = useState("text-4xl");
    const [fw, setFw] = useState("font-[400]");
    const [name, setName] = useState("Logo Gene");
    const [color, setColor] = useColor("hex", "#00323f");
    const [iconSize, setIconSize] = useState("300");
    const [fontColor, setFontColor] = useState(color?.hex);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFontColor = () => {
        setMatch((m) => {
            m && setFontColor(color?.hex);
            return !m;
        });
    };

    const downloadImg = () => {
        let url = canvasRef.current?.toDataURL("image/png");
        if (!url) return;
        const link = document.createElement("a");
        link.download = `${Date.now()}_mza.png`;
        link.href = url;
        link.click();
    };

    return (
        <section className="flex flex-col items-center justify-center">
            <div
                id="canvas0"
                className="p-3 bg-white min-h-[800px] w-[800px] max-w-[80vw]0 flex-col flex items-center justify-center 
                  shadow-xl rounded-lg hover:shadow-2xl relative lg:max-w-[50vw]0">
                <div
                    id="canvas"
                    className="flex-col flex items-center justify-center gap-2 p-3 ">
                    <Icon
                        icon={icon}
                        width={`${iconSize}px`}
                        height={`${iconSize}px`}
                        color={color?.hex}
                        className="z-50 p-3"
                        mode="svg"
                    />

                    <h3
                        style={{ color: match ? color.hex : fontColor }}
                        className={`truncate0 max-w-[750px]0 z-50 ${font} ${size} ${fw}`}>
                        {name}
                    </h3>
                </div>

                <div className={`${controls} right-1`}>
                    <Select
                        color="#fff"
                        handleChange={(e: any) => setFont(e.target.value)}
                        label="Font Style"
                        options={fonts}
                    />
                    <Select
                        color="#fff"
                        handleChange={(e: any) => setSize(e.target.value)}
                        label="Font Size"
                        options={sizes}
                    />
                    <Select
                        color="#fff"
                        handleChange={(e: any) => setFw(e.target.value)}
                        label="Font Weight"
                        options={weight}
                    />
                </div>
                <div className={`${controls} left-1`}>
                    <Select
                        color="#fff"
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

            <div className="flex flex-row gap-2 items-center justify-center">
                <Select
                    color="#000"
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
                <Icon
                    icon={"ion:color-palette"}
                    width={33}
                    className="text-green-800 hover:text-lime-700 cursor-pointer"
                    onClick={togglePalette}
                />
                <button
                    onClick={handleFontColor}
                    className="p-3 flex-row flex items-center"
                    title="Match Color With Logo">
                    {match ? (
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
                <Icon
                    onClick={handleResult}
                    icon={"material-symbols:cloud-download-rounded"}
                    width={36}
                    className="text-fuchsia-700 hover:text-violet-600 cursor-pointer"
                />
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

function togglePalette() {
    document.querySelector(".colorPick")?.classList.toggle("hoverEffects");
}

function handleResult() {
    const resultCanvas = document.getElementById("canvas");
    if (!resultCanvas) return;

    html2canvas(resultCanvas, {
        backgroundColor: "transparent",
        width: resultCanvas.clientWidth + 150 ?? 1000,
        height: resultCanvas.clientHeight + 50 ?? 1000,
    }).then((canvas) => {
        const myImage = canvas.toDataURL();
        downloadURI(myImage, `${Date.now()}_mza.png`);
    });
}

function downloadURI(uri: string, name: string) {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
