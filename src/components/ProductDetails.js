import Product from './Product';
import { prodotti } from '../data/prodotti';

export default function ProductDetails(props) {
    return(
        <div>
            <Product prod={prodotti.find(prod=>prod.UPC===props.match.params.id)} det={true} />
        </div>
    )
}