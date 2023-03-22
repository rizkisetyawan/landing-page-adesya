import React from "react";
import { Image } from "theme-ui";
import accordionIconClose from "assets/accordion-arrow.svg";
import accordionIconOpen from "assets/accordion-arrow-e.svg";
import { AccordionButton, AccordionItem, AccordionContents } from "./shared";

function Item({ data }) {
  const [open, setOpen] = React.useState(false);
  const openIcon = <Image src={accordionIconOpen} alt="open icon" />;
  const closeIcon = <Image src={accordionIconClose} alt="close icon" />;
  return (
    <AccordionItem key={data.title} isOpen={open}>
      <AccordionButton onClick={() => setOpen((prevState) => !prevState)}>
        <span>{open ? openIcon : closeIcon}</span>
        {data.title}
      </AccordionButton>
      <AccordionContents isOpen={open}>{data.contents}</AccordionContents>
    </AccordionItem>
  );
}

export default function Accordion({ items }) {
  return (
    <>
      {items.map((item) => (
        <Item data={item} key={item.title} />
      ))}
    </>
  );
}
