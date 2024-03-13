import TypographyDemo from '@/components/typography-demo';
import ColourShadeDemo, { HSL } from '@/components/colour-shade-demo';
import ColourDemo from '@/components/colours-demo';

const school_jumper: HSL = {h: 342, s: 75, l: 30}
export default function Page() {
  return (
    <section className="space-y-1.5 mt-2.5">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Hey, I'm Samuel, a machine learning research engineer for
              computer vision and virtual production
          </h2> 
          <p>
              I specialise in hige-quality and robust solutions for virtual
              production and post-production, and real-time AR / VR
              experiences.
          </p>
        <ColourShadeDemo hsl={school_jumper} name="School Jumper" />
        <ColourDemo />
    </section>
  );
}
