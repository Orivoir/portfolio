import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {Tooltip } from '@mui/material';

const options = ['Télécharger', 'Visualiser'];

const PATH_CERTIFICATIONS = {
  DEV: "/portfolio/Certification_Developpement_SAMUEL_GABORIEAU.pdf",
  INT: "/portfolio/Certification_Integration_SAMUEL_GABORIEAU.pdf"
}

export interface DownloadCertificationButtonProps {
  type: "dev" | "int"
}

export default function DownloadCertificationButton({type}: DownloadCertificationButtonProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (
    _: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  }

  return (
    <>
    <ButtonGroup
        variant="outlined"
        ref={anchorRef}
      >
        <Tooltip title={`${options[selectedIndex].toLocaleLowerCase()} certification ${type === "dev" ? "dévelopement web": "intégration web"}`}>
          <Button download={options[selectedIndex] === "Télécharger"} href={PATH_CERTIFICATIONS[type === "dev" ? "DEV": "INT"]} endIcon={<PictureAsPdfIcon />}>Certification {type === "dev" ? "dévelopement web": "intégration web"}</Button>
        </Tooltip>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
    </ButtonGroup>
    <Popper
      sx={{ zIndex: 1 }}
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="split-button-menu" autoFocusItem>
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    disabled={index === 2}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
    </>
  );
}
