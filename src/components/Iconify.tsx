import { Icon } from "@iconify/react";

function Iconify({ size, color, icon, w, h, p, classes, ...props }: iconProps) {
    return <Icon icon={icon ?? "mdi-light:home"} color={color ?? ""} width={size ?? w ?? 36} height={size ?? h ?? 36} className={`${p ? "cursor-pointer" : ""} ${classes ?? ""}`} {...props} />;
}

export default Iconify;

type iconProps = {
    size?: number;
    color?: string;
    icon?: string;
    w?: number;
    h?: number;
    classes?: string;
    p?: 1 | 0;
    props?: any;
};
/**  Props: inline, boolean toggles inline or block mode.
width, string | number icon width.
height, string | number icon height.
hFlip, boolean flips icon horizontally.
vFlip, boolean flips icon vertically.
flip, string alternative to hFlip and vFlip.
rotate, number | string rotates icon.
color, string changes icon color.
onLoad, function is a callback that is called when icon data has been loaded. See below.
See below for more information on each optional property. */
