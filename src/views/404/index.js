import React from 'react'
import {
  Box,
  Button,
  Header
} from "@awsui/components-react";

export default function Error404 () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box className="lightText" variant="h1">Error 404</Box>
      <Box className="lightText" variant="h2">It seems like we couldn't find the page you were looking for</Box>
      <Button href="/">Return to Home Page</Button>
    </div>);
}