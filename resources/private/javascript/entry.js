import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

window.MuiThemeProvider = MuiThemeProvider;

window.MuiTheme = getMuiTheme({
  palette: {
    textColor: "#0000FF",
    accent1Color: deepOrange500,
  },
});

window.Step = Step;
window.Stepper = Stepper;
window.StepLabel = StepLabel;

window.Highlight = require('react-highlight');
window.JSXComponent = require("./jsx_component.js");
window.Webcam = require('react-webcam');
