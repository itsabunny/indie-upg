import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div">
            TheHopening - latest news, let's hop to it</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ py: 3 }}>
        <Container maxWidth="md">
          {children}
        </Container>
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};