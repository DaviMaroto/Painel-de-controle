import { Avatar, AvatarGroup, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import SendIcon from '@mui/icons-material/Send';
import React from "react"

export const Menu: React.FC = ({ children }) => {
    const theme = useTheme()

    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(18)} display="flex" alignItems="center" justifyContent="flex-end">
                    <AvatarGroup max={3} >
                        <Avatar alt="Remy Sharp" src="/assets/images/Avatar.png" />
                        <Avatar alt="Travis Howard" src="/assets/images/Avatar2.png" />
                        <Avatar alt="Remy Sharp" />
                        <Avatar alt="Travis Howard" />
                    </AvatarGroup>
                    </Box>
                    <Divider/>
                     <Box flex={1}>
                     <List component="nav" >
                     </List>
          <ListItemButton>
        <ListItemIcon>
         <Icon>home</Icon>
        </ListItemIcon>
        <ListItemText primary="Página Inicial" />
      </ListItemButton>
                    </Box>   
            
                </Box>

            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>

        </>

    )

}