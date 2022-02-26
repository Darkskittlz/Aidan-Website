import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(20),
    fontWeight: 500,
    fontSize: 22,
    color: "black",
  },
  title: {
    textAlign: "center",
    color: "white",
    backgroundColor: "white",
    padding: 50,
  },
  description: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 200,
  },
  root: {
    flexGrow: 1,
    justify: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "2px solid lightgray",
    width: "100%",
  },
}));
