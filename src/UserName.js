import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SendIcon from "@material-ui/icons/Send";
import logo from "./img/logo.webp";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const UserName = ({ username, setUsername, setMe }) => {
  const classes = useStyles();
  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <img src={logo} alt="logo"/>
        </Grid>
        <Grid item spacing={1}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <TextField
                size="small"
                variant="outlined"
                color="secondary"
                value={username}
                label="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              className={classes.margin}
              onClick={() => setMe(username)}
              endIcon={<SendIcon>join</SendIcon>}
            >
              Join
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserName;
