import { useContext } from 'react';
import styled from 'styled-components';
import { BuyPageContext } from './store';

const ChargeSummaryGridStyle = styled.div`
  flex-grow: 1;
  background-color: #356f49;
  border-radius: 36px;
  width: 50%;
  margin: 0 var(--space-small);

  @media (max-width: 900px) {
    width:100%;
    margin: 0;
  }
`;
const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fefefe;
  padding: 20px;
  height: 100%;
  align-items: center;

  @media (max-width: 900px) {
    min-height: calc( ( var( --page-width ) - 2rem ) * .457  );
  }
`;
const GridItem = styled.div`
`;
const Span = styled.span`
  font-size: 1.2rem;
  margin-left: 1rem;
  line-height: 1.8rem;
  display: inline-block;
`;

const SubHeader = styled.h2`
  margin-bottom: 20px;
`;

const DropdownStyle = styled.select`
  padding: 0.1rem 1rem;
  border-radius: 36px;
  font-size: 1.2rem;
`;

const Dropdown = ({ name, id, list, onChange }) => {
  return (
    <DropdownStyle onChange={onChange} name={name} id={id}>
      {list.map((listItem) => (
        <option key={listItem} value={listItem}>
          {listItem}
        </option>
      ))}
    </DropdownStyle>
  );
};

const ChargeSummaryGrid = () => {
  const { store, dispatch } = useContext(BuyPageContext);

  const handleChange = (e) =>
    dispatch({ type: 'updateAmount', payload: e.target.value });

  return (
    <ChargeSummaryGridStyle>
      <Grid>
        <GridItem>
          <SubHeader>number of tokens</SubHeader>
          <Dropdown
            name="amount"
            id="amount"
            list={store.amountOptions}
            onChange={handleChange}
          />
          <Span>{` BU1DL`}</Span>
        </GridItem>
        <GridItem>
          <SubHeader>price</SubHeader>
          <Span>${store.price} </Span>
        </GridItem>
      </Grid>
    </ChargeSummaryGridStyle>
  );
};

export default ChargeSummaryGrid;
