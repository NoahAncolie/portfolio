import Icon from '@mdi/react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'

interface AnnexeLinkProps {
    link_icon: string
    link_name: string
    link_url: string
}
 
interface AnnexeLinkState {
    
}
 
export class AnnexeLink extends React.Component<AnnexeLinkProps, AnnexeLinkState> {
    constructor(props: AnnexeLinkProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <ListItemButton
                  component="a"
                  href={this.props.link_url}
                  target="_blank"
                  sx={{
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: "text.secondary"
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "text.primary" }}>
                    <Icon path={this.props.link_icon} />
                  </ListItemIcon>
                  <ListItemText primary={this.props.link_name} />
                </ListItemButton>
        );
    }
}