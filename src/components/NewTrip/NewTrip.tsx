import React, { useState } from "react";

import {
  Button,
  Dialog, // new item
  DialogActions, // new item
  DialogContent, // new item
  DialogContentText, // new item
  DialogTitle, // new item
} from "@mui/material";
import { TripForm } from "../TripForm";

export const NewTrip = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClickClose = () => {
    setDialogOpen(false);
  };
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleDialogClickOpen}>
        Add a Trip
      </Button>

      {/*Dialog Pop Up begin */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add your next trip!</DialogTitle>
        <DialogContent>
          <TripForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClickClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
