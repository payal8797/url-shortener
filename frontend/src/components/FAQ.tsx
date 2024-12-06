import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "What is a URL shortener?",
    answer: "A URL shortener is a service that takes a long URL and converts it into a shorter, more manageable link."
  },
  {
    question: "How does it work?",
    answer: "The shortener creates a unique identifier for your long URL and stores it in a database. When someone accesses the short URL, they are redirected to the original URL."
  },
  {
    question: "Is URL shortening safe?",
    answer: "Yes, URL shortening is generally safe. However, it's important to use reputable services to avoid malicious redirects."
  },
  {
    question: "Can I track the usage of my shortened URL?",
    answer: "Many URL shortening services offer analytics features that let you track click-through rates, geographic locations, and other metrics."
  },
  {
    question: "Can I customize the shortened URL?",
    answer: "Some URL shorteners allow you to create custom short links or aliases, giving you control over the appearance of the shortened URL."
  },
  {
    question: "What are the benefits of using a URL shortener?",
    answer: "URL shorteners make links easier to share, especially on social media or in print. They can also provide tracking and analytics."
  },
  {
    question: "Are there any limitations to URL shortening?",
    answer: "Limitations may include character limits for custom aliases, the potential for expired links, and dependency on the shortener service's uptime."
  },
  {
    question: "How long does a shortened URL last?",
    answer: "The duration a shortened URL lasts depends on the service. Some offer permanent links, while others may expire after a certain period."
  },
  {
    question: "Can I shorten URLs for free?",
    answer: "Yes, many URL shorteners offer free services with basic features. Premium plans often provide additional features and customization options."
  },
  {
    question: "How do I choose a URL shortener service?",
    answer: "Consider factors such as reliability, feature set (like analytics), ease of use, and whether the service aligns with your needs."
  },
];

const FAQ: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom align="left">
        <i>Frequently Asked Questions</i>
      </Typography>
      {/* <Divider sx={{ my: 2 }} /> */}
      {faqData.map((item, index) => (
        <Accordion key={index} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`panel${index}-header`}>
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
