import { useContext } from 'react'
import styled from 'styled-components';
import { BuyPageContext } from './store';

const ChargeSummaryGridStyle = styled.div`
flex-grow: 1;`;
const Grid = styled.div`
  
  display: flex;
  justify-content: space-around;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const GridItem = styled.div`
  @media (max-width: 1200px) {
    margin-bottom: var(--space-medium);
  }
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
