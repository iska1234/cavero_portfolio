import React, { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { TooltipSide } from "@/types/tooltipside.type";


interface TooltipPrivderProps{
    triggerClass: string;
    contentClass: string;
    triggerContent: ReactNode; 
    content: ReactNode;
    delayDuration?: number;
    side?: TooltipSide;
    asChild?: boolean; 
    isVisible?: boolean;
}

const TooltipComponent: React.FC<TooltipPrivderProps> = ({
  delayDuration = 100,
  side = "top",
  content,
  contentClass,
  triggerClass,
  triggerContent,
  asChild = false,
  isVisible,
}) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip open={isVisible}>
        <TooltipTrigger className={triggerClass} asChild={asChild}>
          {triggerContent}
        </TooltipTrigger>
        <TooltipContent side={side} className={contentClass}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;