import { AppBar, Toolbar, Typography } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import WebhookIcon from '@mui/icons-material/Webhook';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e0ae40',
        },
        secondary: {
            main: '#fff',
        },
    },
});

const header = () => {
  return (
    <div style={{flexGrow: '1'}}>
      <AppBar theme={theme} position='static' color='primary' elevation={0}>
        <Toolbar>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <WebhookIcon theme={theme} color='secondary'/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default header;