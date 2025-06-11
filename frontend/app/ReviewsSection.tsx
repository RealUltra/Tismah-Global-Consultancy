import { Box, Card, Rating, Typography } from "@mui/material";
import React from "react";

interface ReviewInfo {
  reviewerName: string;
  content: string;
}

const ReviewsSection = () => {
  const reviews: ReviewInfo[] = [
    { reviewerName: "Client #1", content: "A+" },
    { reviewerName: "Client #2", content: "Amazing help!" },
    { reviewerName: "Client #3", content: "Best decision ever!" },
  ];

  return (
    <Box className="!mb-50 !px-8 !py-16">
      <Box className="!flex flex-col !gap-8 !max-w-6xl !w-full !mx-auto">
        <Box className="!flex flex-col !gap-4 !items-center">
          <Typography className="!font-bold !text-3xl">
            Client Reviews
          </Typography>

          <Box className="!flex flex-row !gap-2 !items-center !pb-4">
            <Rating value={4.5} precision={0.5} size="medium" readOnly />
            <span className="font-bold text-xl text-amber-400">4.5</span>
          </Box>
        </Box>

        <Box className="!flex !flex-row !flex-wrap !justify-center !gap-8 !px-8">
          {reviews.map((s) => (
            <Card className="!flex !flex-col !max-w-md !px-4 !py-6 !gap-4 !justify-between !rounded-xl">
              <Typography className="!font-bold !text-lg !mt-auto !text-lime-700">
                {s.content}
              </Typography>
              <p className="text-md">{s.reviewerName}</p>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSection;
