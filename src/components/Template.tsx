import { createUseStyles } from "react-jss";
import Main from "./Main";

const useStyles = createUseStyles({
    template: {
        backgroundColor: 'white',
        width: 'full',
    }
})

export default function Template() {
    const classes = useStyles();
  return (
    <div className={classes.template}>
        <Main />
    </div>
  )
};
