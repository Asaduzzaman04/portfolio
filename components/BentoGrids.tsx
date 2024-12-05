import React from "react";
import { BentoGridItem, BentoGrid } from './ui/bento-grid';
import { gridItems } from "@/data/Index";

export function BentoGrids() {
  return (
    <section id="about">
    <BentoGrid className="w-full py-20">
      {gridItems.map((item, i) => (
        <BentoGridItem
          id={item.id}
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
  </section>
  );
}
