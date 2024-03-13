export type HSL = {h: number, s: number, l: number}
import {cn} from '@/lib/utils'

export function colour_light2dark(color: HSL) {
  const colours: HSL[] = []
  const l_mid = color.l

  for (let i = 0; i < 10; i++) {

    colours.push({h: color.h, s: color.s, l: color.l - i * 5})
  }

  return colours
}

const ColourBox = ({color}: {color: HSL}) => {
    const hsl = `hsl(${color.h}, ${color.s}%, ${color.l}%)`
    return (
        // rounded square box
        <div className="rounded-md" style={{backgroundColor: hsl}} />
    )
}
export default function ColourShadeDemo({hsl, name}: {hsl: HSL, name?: string}) {
    // const color = {h: 200, s: 50, l: 50}
    const colours = colour_light2dark(hsl)
    return (
        <div className="flex space-x-2">
            {name && <h3 className={cn("text-xl")}>{name}</h3>}
            {colours.map((color, i) => (
                <ColourBox key={i} color={color} />
            ))}
        </div>

    )
}
