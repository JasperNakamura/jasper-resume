import React from 'react';

import { IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#e0ae40',
        },
    },
});

const IconColumn = () => {
  return (
    <div style={{ width: '5%', float: 'left', maxWidth: '75px', height: '100vh', backgroundColor: '#e0ae40', paddingTop: '35vh', position: 'absolute'}}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2em'}}>
            <li style={{ display: 'inline-block'}}>
                <IconButton theme={theme} color="primary" component="label">
                    <EmailIcon style={{maxWidth: '2vw'}}/>
                </IconButton>
            </li>
            <li style={{ display: 'inline-block'}}>
                <Link href="https://github.com/JasperNakamura" target="_blank">
                    <IconButton theme={theme} color="primary" component="label">
                        <GitHubIcon style={{maxWidth: '2vw'}}/>
                    </IconButton>
                </Link>
            </li>
            <li style={{ display: 'inline-block'}}>
                <Link href="https://www.linkedin.com/in/jasper-nakamura-98333316a/" target="_blank">
                    <IconButton theme={theme} color="primary" component="label">
                        <LinkedInIcon style={{maxWidth: '2vw'}}/>
                    </IconButton>
                </Link>
            </li>
        </ul>
    </div>
    
  );
};

export default IconColumn;