"use client";

import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import React, { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const QuestionCard = ({ question, answer }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card
      className="!rounded-2xl border-1 border-gray-300"
      sx={{ boxShadow: 0, "&:hover": { boxShadow: 3 } }}
    >
      <CardActionArea
        onClick={() => setShowAnswer(!showAnswer)}
        disableRipple
        sx={{
          ".MuiCardActionArea-focusHighlight": {
            backgroundColor: "transparent",
          },
          "&:hover .question": {
            textDecoration: "underline",
          },
        }}
      >
        <CardContent className="!flex flex-col !p-6 gap-4">
          <Box className="!flex flex-row !top-0 justify-between gap-4 !font-medium !text-lg">
            <span className="question !my-auto">{question}</span>
            {showAnswer ? (
              <ExpandLessIcon className="!my-auto" />
            ) : (
              <ExpandMoreIcon className="!my-auto" />
            )}
          </Box>

          {showAnswer && (
            <span className="!text-sm !text-gray-600">{answer}</span>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default QuestionCard;
