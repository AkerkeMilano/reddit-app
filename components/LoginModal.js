import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Login from './Login';
import CloseIcon from '@mui/icons-material/Close';

const LoginModal = ({children}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Button variant="outlined" onClick={handleClickOpen}>
      {children}
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Login
      </DialogTitle>
      <DialogContent>
        <Login handleClose={handleClose}></Login>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} startIcon={<CloseIcon />}></Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}

export default LoginModal;