import InvoiceItems from './InvoiceItems';
import InvoiceSummary from './InvoiceSummary';

const App = () => {
    const [customerDetails, setCustomerDetails] = useState({});
    const [billFromDetails, setBillFromDetails] = useState({});
    const [items, setItems] = useState([]);
    const [taxRate, setTaxRate] = useState(0);
    const [discountRate, setDiscountRate] = useState(0);

    return (
        <div>
            <h1>Invoice Generator</h1>
            <CustomerDetails onChange={setCustomerDetails} />
            <BillFrom onChange={setBillFromDetails} />
            <InvoiceItems items={items} setItems={setItems} />
            <input type="number" placeholder="Tax Rate (%)" onChange={e => setTaxRate(e.target.value)} />
            <input type="number" placeholder="Discount Rate (%)" onChange={e => setDiscountRate(e.target.value)} />
            <InvoiceSummary items={items} taxRate={taxRate} discountRate={discountRate} />
        </div>
    );
};

export default App;