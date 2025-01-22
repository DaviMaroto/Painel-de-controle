import { Avatar, AvatarGroup, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useDrawerContext } from "../../contexts"


interface itemLinkProps {
    
}
//React.FC = Tipar componentes que retornam jsx
const itemLink: React.FC <itemLinkProps> = ({}) =>{

} 

export const Menu: React.FC = ({ children }) => {
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down('sm')) //Se a tela for menor que sm = true

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={sm ? "temporary" : "permanent"} onClose={toggleDrawerOpen}> 
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(18)} display="flex" alignItems="center" justifyContent="flex-end">
                        <AvatarGroup max={3} >
                            <Avatar alt="Remy Sharp" src="/assets/images/Avatar.png" />
                            <Avatar alt="Travis Howard" src="/assets/images/Avatar2.png" />
                            <Avatar alt="Remy Sharp" />
                            <Avatar alt="Travis Howard" />
                        </AvatarGroup>
                    </Box>
                    <Divider />
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
            <Box height="100vh" marginLeft={sm ? 0 : theme.spacing(28)}> 
                {children}
            </Box>

        </>

    )

}