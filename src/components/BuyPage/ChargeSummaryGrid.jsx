import { useContext } from 'react'
import styled from 'styled-components';
import { BuyPageContext } from './store';

const ChargeSummaryGridStyle = styled.div`
flex-grow: 1;
background-color: #356F49;
border-radius: 36px;

`;
const Grid = styled.div`
  
  display: flex;
  justify-content: space-around;
  margin-top: 10vh;
  color: #FEFEFE;
  

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
 font-size: 1.2rem;
`;

const SubHeader = styled.h2`
margin-bottom: 20px;
`;

const DropdownStyle = styled.select`
 padding: .1rem 1rem; 
 border-radius: 36px;
 font-size: 1.2rem;
`

const Dropdown = ({name, id, list, onChange}) => {
  return <DropdownStyle onChange={onChange} name={name} id={id}>
    {list.map(listItem => <option key={listItem} value={listItem}>{listItem}</option>)}
  </DropdownStyle>
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
