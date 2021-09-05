import { useContext } from 'react'
import styled from 'styled-components';
import { BuyPageContext } from './store';

const ChargeSummaryGridStyle = styled.div``;
const Grid = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8rem;
`;
const GridItem = styled.div`
  
`;
const Span = styled.span`
 
`;

const SubHeader = styled.h2`
`;



const Dropdown = ({name, id, list, onChange}) => {
  return <select onChange={onChange} name={name} id={id}>
    {list.map(listItem => <option key={listItem} value={listItem}>{listItem}</option>)}
  </select>
}

const ChargeSummaryGrid = () => {

  const {store, dispatch} = useContext(BuyPageContext);

  const handleChange = (e) => dispatch({type: 'updateAmount', payload: e.target.value});


  return (
    <ChargeSummaryGridStyle>
      <Grid>
        <GridItem>
          <SubHeader>number of tokens</SubHeader>
          <Dropdown name="amount" id="amount" list={store.amountOptions} onChange={handleChange}/>
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
