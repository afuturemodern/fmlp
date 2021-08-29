import styled from 'styled-components';
import Heading from '../shared/Heading';

const ChargeSummaryGridStyle = styled.div``;
const Grid = styled.div`
  margin: auto 20vw;
  width: 25vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ChargeSummaryGrid = () => {
  return (
    <ChargeSummaryGridStyle>
      <Grid>
        <div>
          <Heading>Number of Tokens</Heading>
          <span>69 BU1DL</span>
        </div>
        <div>
          <Heading>Price</Heading>
          <span>$40</span>
        </div>
      </Grid>
    </ChargeSummaryGridStyle>
  );
};

export default ChargeSummaryGrid;
