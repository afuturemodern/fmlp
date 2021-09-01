import styled from 'styled-components';
import Heading from '../shared/Heading';

const ChargeSummaryGridStyle = styled.div``;
const Grid = styled.div`
  // margin: auto 50vw;
  width: 40vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const GridItem = styled.div`
  width: auto;
`;
const Span = styled.span``;

const SubHeader = styled.h2``;

const ChargeSummaryGrid = () => {
  return (
    <ChargeSummaryGridStyle>
      <Grid>
        <GridItem>
          <SubHeader>Number of Tokens</SubHeader>
          <Span>69 BU1DL</Span>
        </GridItem>
        <GridItem>
          <SubHeader>Price</SubHeader>
          <Span>$40</Span>
        </GridItem>
      </Grid>
    </ChargeSummaryGridStyle>
  );
};

export default ChargeSummaryGrid;
