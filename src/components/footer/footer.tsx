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
                    color: "#ffffff",
                    width: 1,
                    borderTop: 1,
                    borderColor: "text.secondary",
                    textAlign: "center",
                    py: 3.5,
                    backgroundColor: "primary.main",
                  }}
                >
                  <Typography variant="caption">
                    Copyright © 2022 adrienbenaceur.fr | Tout droits réservés.
                  </Typography>
                </Box>
              </footer>
         );
    }
}