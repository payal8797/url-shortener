import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import api from '../api';
import Uses from './Uses';
import FAQ from './FAQ';

const StyledMainContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '10px'
});

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px'
});

const StyledPaper = styled(Paper)({
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const UrlShortener: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isValidUrl = (url: string): boolean => {
    // Simple URL validation using regex
    const pattern = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;
    return pattern.test(url);
  };

  const handleSubmit = async () => {
    if (!isValidUrl(originalUrl)) {
      setError('Please enter a valid URL.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await api.post('/shorten', { originalUrl });
      setShortUrl(`http://localhost:5000/api/url/${response.data.shortUrl}`);
    } catch (err) {
      console.error(err);
      setError('An error occurred while shortening the URL.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledMainContainer>
      <StyledContainer>
        <StyledPaper elevation={3}>
          <Typography variant="h4" gutterBottom>
            URL Shortener
          </Typography>
          <TextField
            label="Original URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
            disabled={loading || !isValidUrl(originalUrl)}
          >
            {loading ? 'Shortening...' : 'Shorten'}
          </Button>
          {shortUrl && (
            <Box mt={3}>
              <Typography variant="h6" gutterBottom>
                Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
              </Typography>
            </Box>
          )}
        </StyledPaper>
      </StyledContainer>
      <Uses />
      <FAQ />
    </StyledMainContainer>
  );
};

export default UrlShortener;
