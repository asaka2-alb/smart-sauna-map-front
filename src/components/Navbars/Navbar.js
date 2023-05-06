/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React, { useState } from 'react';
import Link from 'next/link';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function Navbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <div id="navbar">
      <Button
        onClick={() => setDrawerOpened(true)}
        startIcon={<MenuIcon />}
        size="large"
      />
      <Drawer
        anchor="right"
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}
      >
        <DrawerMenu />
      </Drawer>
    </div>
  );
}

function DrawerMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <List>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Link href="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    primaryTypographyProps={{
                      color: 'primary',
                      fontWeight: 'medium',
                      variant: 'body1',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </Grid>
          <Grid item xs={12} md={12}>
            <Link href="/disclaimer">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <WarningAmberIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Disclaimer"
                    primaryTypographyProps={{
                      color: 'primary',
                      fontWeight: 'medium',
                      variant: 'body1',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </Grid>
        </Grid>
      </List>
    </Box>
  );
}
