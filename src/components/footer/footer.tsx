import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

interface FooterProps {
    
}
 
interface FooterState {
    
}
 
export class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <footer>
                <Box
                  sx={{
                    position: 'fixed',
                    bottom: 0,
                    color: "text.primary",
                    textAlign: "left",
                    p: 3.5,
                  }}
                >
                  <Typography variant="caption">
                    Copyright © 2022 adrienbenaceur.fr | All rights reserved.
                  </Typography>
                </Box>
              </footer>
         );
    }
}