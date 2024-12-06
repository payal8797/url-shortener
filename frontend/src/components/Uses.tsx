import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: theme.shadows[3],
}));

const usesData = [
  {
    title: "Social Media",
    description: "Shortened URLs are easier to share and look cleaner in posts. They also take up less space and can be tracked more easily."
  },
  {
    title: "Email Campaigns",
    description: "Short links are less likely to break and can track click-through rates, providing valuable metrics for campaign performance."
  },
  {
    title: "Print Media",
    description: "Short links are easier to type and more visually appealing in print materials like flyers, brochures, and business cards."
  },
  {
    title: "SMS Marketing",
    description: "Text messages have character limits. Shortened URLs save space and ensure the entire message is visible."
  },
  {
    title: "Event Management",
    description: "Use short links to direct attendees to event registration pages, schedules, or important updates."
  },
  {
    title: "Product Reviews",
    description: "Short links are ideal for sharing product reviews and ratings on various platforms without lengthy URLs."
  },
  {
    title: "Online Advertising",
    description: "Shortened URLs can make ads look cleaner and more professional, enhancing the user experience."
  },
  {
    title: "Analytics and Tracking",
    description: "Track user interactions with short links to gather insights on click patterns, user behavior, and marketing effectiveness."
  },
  {
    title: "Content Sharing",
    description: "Simplify the sharing of articles, blog posts, and other content by using short links that are easier to remember and share."
  },
  {
    title: "Custom Branding",
    description: "Create branded short links to reinforce brand identity and improve click-through rates."
  },
];

const Uses: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center">
        Uses of a URL Shortener
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {usesData.map((useCase, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="div">
                  {useCase.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {useCase.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Uses;
