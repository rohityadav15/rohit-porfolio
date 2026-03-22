import { useState } from "react";
import { Box, Grid, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
// import useResponsive from "../../hooks/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
//   const isDesktop = useResponsive();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/project">
          <ListItemText primary="Project" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      style={{
        display: "flex",
        height: "10%",
        // width: isDesktop ? "100%" : "80%",
        backgroundColor: "black",
      }}
    >
      <Grid container>
        {/* {isDesktop ? ( */}
          <>
            <Grid
              item
              xs={0.8}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  width: "100%",
                  padding: "15px 0",
                  textAlign: "center",
                }}
              >
                Home
              </Link>
            </Grid>
            <Grid
              item
              xs={0.8}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <Link
                to="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  width: "100%",
                  padding: "15px 0",
                  textAlign: "center",
                }}
              >
                About
              </Link>
            </Grid>
            <Grid
              item
              xs={0.8}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <Link
                to="/project"
                style={{
                  color: "white",
                  textDecoration: "none",
                  width: "100%",
                  padding: "15px 0",
                  textAlign: "center",
                }}
              >
                Project
              </Link>
            </Grid>
            <Grid
              item
              xs={0.8}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <Link
                to="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  width: "100%",
                  padding: "15px 0",
                  textAlign: "center",
                }}
              >
                Contact
              </Link>
            </Grid>
          </>
        ) : (
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </Grid>
        )
        {/* } */}
      </Grid>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Header;