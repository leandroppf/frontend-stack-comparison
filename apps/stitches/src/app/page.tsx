import * as Components from "./styles";

export default function Docs() {
  return (
    <Components.Main>
      <Components.FlexColumn center>
        <Components.FlexRow center>
          <Components.Text color="red" size="sm">
            Stitches
          </Components.Text>
          <Components.Text color="green">Next</Components.Text>
          <Components.Text color="blue" size="lg">
            React
          </Components.Text>
        </Components.FlexRow>
        <Components.FlexRow center>
          <Components.Text color="red" size="sm">
            Stitches
          </Components.Text>
          <Components.Text color="green">Next</Components.Text>
          <Components.Text color="blue" size="lg">
            React
          </Components.Text>
        </Components.FlexRow>
      </Components.FlexColumn>
      <Components.FlexColumn center border>
        <Components.FlexRow center>
          <Components.Text color="red" size="sm">
            Stitches
          </Components.Text>
          <Components.Text color="green">Next</Components.Text>
          <Components.Text color="blue" size="lg">
            React
          </Components.Text>
        </Components.FlexRow>
        <Components.FlexRow center>
          <Components.Text color="red" size="sm">
            Stitches
          </Components.Text>
          <Components.Text color="green">Next</Components.Text>
          <Components.Text color="blue" size="lg">
            React
          </Components.Text>
        </Components.FlexRow>
      </Components.FlexColumn>
    </Components.Main>
  );
}
