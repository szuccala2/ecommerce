import * as React from 'react';
import Grid from '@mui/material/Grid';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import { prodotti } from '../data/prodotti';

export default function ProductList() {
  const [selected, setSelected] = React.useState("none");
  const [searchTerm, setSearchTerm] = React.useState("");

  function searchFilter(prod) {
    return prod.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  function selectedFilter(prod) {
    switch(selected) {
      case "in":
        return prod.availability.stock>0;

      case "out":
        return prod.availability.stock<=0;

      default:
        return true;
    }
  }

  return (
    <Grid container wrap="nowrap" sx={{ height: "100vh", flexGrow: 1 }}
      direction="column">
      <Grid item xs={1}>
        <Header selected={selected} setSelected={setSelected}
          setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </Grid>
      <Grid item xs={10}>
        <Grid container
          spacing={2}
          p={2}
          rowSpacing={{ xs: 5, md: 2 }}
        >
          {prodotti?.filter(selectedFilter).filter(searchFilter).map((prod,_) => (
            <Grid item xs={3} key={prod.UPC}>
              <Product prod={prod}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Footer />
      </Grid>
    </Grid>
  );
}