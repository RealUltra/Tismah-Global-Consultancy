import { Box, Card, Rating, Typography } from "@mui/material";
import React from "react";

interface ReviewInfo {
  content: string;
  reviewerName: string;
  reviewerDescription: string;
}

const ReviewsSection = () => {
  const reviews: ReviewInfo[] = [
    {
      content:
        "I was overwhelmed trying to apply to universities abroad, but Tismah Global made the entire process smooth. From refining my personal statement to helping shortlist universities that matched my goals, their team was always available and incredibly supportive. I couldn’t have gotten my acceptance letters without them!",
      reviewerName: "Ayesha R.",
      reviewerDescription: "Undergraduate Applicant to Canada",
    },
    {
      content:
        "Tismah Global helped me navigate the complex visa and immigration process with complete clarity. I felt supported at every step — from choosing the right pathway to preparing my documents and interviews. I’ve now successfully relocated and started my new life, stress-free.",
      reviewerName: "Hassan M.",
      reviewerDescription: "Skilled Migrant to the UK",
    },
    {
      content:
        "I had an idea but didn’t know where to begin. The team at Tismah helped me validate my startup concept, register the business, and even plan my funding strategy. Their advice was sharp, actionable, and grounded in experience. I now run a small but growing business thanks to their guidance.",
      reviewerName: "Sara T.",
      reviewerDescription: "Founder of EcoLink",
    },
  ];

  return (
    <Box className="!py-12 !bg-green-50 !mt-16">
      <Box className="!flex flex-col !gap-8 !max-w-6xl !w-full !mx-auto">
        <Box className="!flex flex-col !gap-2 !items-center">
          <Typography className="!font-bold !text-3xl">
            Client Reviews
          </Typography>

          <Box className="!flex flex-row !gap-2 !items-center !pb-4">
            <Rating value={4.5} precision={0.5} size="medium" readOnly />
            <span className="font-bold text-xl text-amber-400">4.5</span>
          </Box>
        </Box>

        <Box className="!flex !flex-row !flex-wrap !justify-center !gap-8 !px-8">
          {reviews.map((s, index) => (
            <Card
              key={index}
              className="!flex !flex-col !max-w-xs !px-4 !py-6 !gap-4 !justify-between !rounded-xl"
            >
              <Typography className="!text-md">
                &quot;{s.content}&quot;
              </Typography>

              <Box>
                <p className="text-md italic font-bold">{s.reviewerName}</p>
                <p className="text-xs italic">{s.reviewerDescription}</p>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSection;
