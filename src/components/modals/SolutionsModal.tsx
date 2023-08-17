import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Grid, useMediaQuery } from "@mui/material";
import VideoPlayer from "../video/VideoPlayer";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,

            ":hover": {
              bgcolor: "red",
            },
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface SolutionsModalProps {
  openModal: boolean;
  toggleModal: () => void;
}

const SolutionsModal: React.FC<SolutionsModalProps> = ({
  openModal,
  toggleModal,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  // Define the content for the left column
  const textContent = (
    <>
      <Typography gutterBottom variant="body1">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </Typography>
      <Typography gutterBottom variant="body1">
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      {/* Add more paragraphs or bulleted lists as needed */}
    </>
  );

  // Define the content for the right column
  const videoContent = (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <VideoPlayer activeTab={1} />
    </Box>
  );

  return (
    <Box>
      <BootstrapDialog
        onClose={() => toggleModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
        fullScreen={fullScreen}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: fullScreen ? "100%" : "80vw",
            backgroundColor: "#036c73",
            color: "#fff",
            overflowX: "clip",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => toggleModal()}
        >
          Modal title
        </BootstrapDialogTitle>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <DialogContent dividers>
              {/* Render the appropriate content based on your needs */}
              {textContent}
            </DialogContent>
          </Grid>
          <Grid item xs={12} md={7}>
            {videoContent}
          </Grid>
        </Grid>
      </BootstrapDialog>
    </Box>
  );
};

export default SolutionsModal;
