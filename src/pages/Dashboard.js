import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Box
      sx={{
        minHeight: '100%',
        padding:'40px',
        color: 'white'
      }}
    >
      <h1>Welcome to Site</h1>
    </Box>
  </>
);

export default Dashboard;
