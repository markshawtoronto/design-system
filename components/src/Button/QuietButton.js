import styled from "styled-components";
import Button from "./Button";
import theme from "../theme";

const QuietButton = styled(Button)({
  color: theme.colors.blue,
  borderColor: "transparent",
  backgroundColor: "transparent"
});

export default QuietButton;
