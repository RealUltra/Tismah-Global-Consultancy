"use client";

import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import QuestionCard from "./QuestionCard";

interface Category {
  title: string;
  questions: Question[];
}

interface Question {
  question: string;
  answer: string;
}

const QuestionsSection = () => {
  const categories = [
    {
      title: "Academic Consultancy",
      questions: [
        {
          question:
            "What documents do I need to apply for a university abroad?",
          answer:
            "Typically, you'll need your transcripts, letters of recommendation, a personal statement, standardized test scores (like IELTS, TOEFL, or SAT), and your passport.",
        },
        {
          question: "Can you help me choose the right course and university?",
          answer:
            "Yes, we offer personalized academic assessments to match your goals, strengths, and preferences with suitable programs and institutions.",
        },
        {
          question: "Do you assist with scholarship applications?",
          answer:
            "Absolutely. We identify scholarship opportunities and help craft compelling applications to improve your chances.",
        },
      ],
    },
    {
      title: "Outbound Consultancy",
      questions: [
        {
          question: "Which countries can you help me migrate to?",
          answer:
            "We currently provide outbound consultancy for countries like Canada, the UK, Australia, Germany, and select EU regions.",
        },
        {
          question: "Can you help me with my visa application?",
          answer:
            "Yes. We guide you through the entire process — document preparation, form submission, and interview tips.",
        },
        {
          question: "Do I need a job offer to apply for immigration?",
          answer:
            "Not always. Some immigration streams, like Canada's Express Entry, allow applications without a job offer depending on your qualifications.",
        },
      ],
    },
    {
      title: "Entrepreneurial Consultancy",
      questions: [
        {
          question: "Can you help me register my business?",
          answer:
            "Yes, we walk you through the legal registration process in your target country, including business name search, licensing, and documentation.",
        },
        {
          question:
            "Do you provide startup funding or connect me with investors?",
          answer:
            "While we don’t directly provide funding, we help refine your pitch deck and connect you with relevant funding networks and grant opportunities.",
        },
        {
          question: "Will you help with building a business plan?",
          answer:
            "Absolutely. We help you create a detailed, investor-ready business plan with financial projections and market analysis.",
        },
      ],
    },
  ];

  return (
    <Box className="!flex flex-col !mx-auto !max-w-4xl gap-16 !px-8 !pb-8">
      {categories.map((c) => (
        <Box className="!flex flex-col gap-8">
          <Box className="!flex flex-col gap-4">
            <Typography className="!font-bold !text-2xl">{c.title}</Typography>
            <Divider />
          </Box>

          <Box className="!flex flex-col gap-4">
            {c.questions.map((q) => (
              <QuestionCard question={q.question} answer={q.answer} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default QuestionsSection;
