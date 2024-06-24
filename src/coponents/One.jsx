import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ArticleIcon from '@mui/icons-material/Article';

export default function One() {
  const [open, setOpen] = React.useState(false);
  const [opene, setOpene] = React.useState(false);
  const [openee, setOpenee] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickee = () => {
    setOpenee(!openee);
  };
  const handleClicke = () => {
    setOpene(!opene);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton  onClick={handleClickee} >
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Volume 14" />
      </ListItemButton>
      <Collapse in={openee} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }} component="a" href="http://www.mmmut.ac.in/News_content/01421newsletter_12262022.pdf">
            <ListItemText primary="Issue 1" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openee} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }} component="a" href="http://www.mmmut.ac.in/News_content/12212newsletter_07032023.pdf">
            <ListItemText primary="Issue 2" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClicke}>
        <ListItemIcon>
          <ArticleIcon/>
        </ListItemIcon>
        <ListItemText primary="Volume 13" />
      </ListItemButton>
      <Collapse in={opene} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }}>
            <ListItemText primary="Issue 1" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={opene} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }}>
            <ListItemText primary="Issue 2" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Volume 12" />
       
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }}>
            <ListItemText primary="Issue 1" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }}>
            <ListItemText primary="Issue 2" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Volume 12" />
       
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }}>
            <ListItemText primary="Issue 1" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }}>
            <ListItemText primary="Issue 2" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Volume 12" />
       
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }}>
            <ListItemText primary="Issue 1" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 15 }}>
            <ListItemText primary="Issue 2" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}