import { Box, Button } from "@mui/material";
import React from "react";

interface Props {
  tabs: string[];
  currentTab: number;
  onTabChanged: (tabIndex: number) => void;
}

const ConsultancySelector = ({ tabs, currentTab, onTabChanged }: Props) => {
  return (
    <Box className="!mx-auto !max-w-lg !px-4">
      <Box className="!flex flex-row justify-center gap-4 !w-full !mx-auto !rounded-4xl !bg-gray-200 !px-2 !py-2">
        {tabs.map((title, index) => {
          const colorClasses =
            index == currentTab ? "!bg-white !text-lime-600" : "!text-gray-500";

          return (
            <Button
              key={index}
              className={`!my-auto !normal-case !font-bold ${colorClasses} !w-full !text-xs md:text-sm! !rounded-4xl !py-2`}
              onClick={() => onTabChanged(index)}
              disableRipple
            >
              {title}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default ConsultancySelector;
