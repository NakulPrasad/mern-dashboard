import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  CalendarMonthOutlined,
  PieChartOutlined,
  LiveHelpOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.jpg";
import ClickAwayListener from "@mui/base/ClickAwayListener";

// ITME list sidebar
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "FAQ",
    icon: <LiveHelpOutlined />,
  },
  {
    text: "Calender",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Users",
    icon: <AccountCircleOutlined />,
  },
  {
    text: "Add User",
    icon: <AccountCircleOutlined />,
  },
  {
    text: "Data",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },

  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
];

const Sidebar = ({
  user, //userObj
  drawerWidth,
  isSidebarOpen, //deafult true
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const handleClose = () => {
    // Close the drawer only if the device is a mobile device
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <ClickAwayListener onClickAway={handleClose}>
          <Drawer
            open={isSidebarOpen}
            onClose={handleClose}
            variant="persistent"
            anchor="left"
            sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                color: theme.palette.secondary[300],
                backgroundColor: theme.palette.background.alt,
                boxSixing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
          >
            <Box width="100%">
              <Box m="1.5rem 2rem 2rem 3rem">
                <FlexBetween color={theme.palette.secondary[300]}>
                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <Typography variant="h4" fontWeight="bold">
                      ESHOP
                    </Typography>
                  </Box>
                  {!isNonMobile && (
                    <IconButton
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                      <ChevronLeft />
                    </IconButton>
                  )}
                </FlexBetween>
              </Box>
              <Box mb="10px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="60px"
                    height="60px"
                    src={profileImage}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ m: "1vh 0", color: theme.palette.secondary[200] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography variant="h5">Super Admin</Typography>
                </Box>
              </Box>

              <List>
                {navItems.map(({ text, icon }) => {
                  if (!icon) {
                    return (
                      <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                        {text}
                      </Typography>
                    );
                  }
                  const lcText = text.toLowerCase();

                  return (
                    <ListItem key={text} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(`/${lcText}`);
                          setActive(lcText);
                        }}
                        sx={{
                          backgroundColor:
                            active === lcText
                              ? theme.palette.secondary[500]
                              : "transparent",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[100],
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ml: "2rem",
                            color:
                              active === lcText
                                ? theme.palette.primary[600]
                                : theme.palette.secondary[200],
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Drawer>
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default Sidebar;
