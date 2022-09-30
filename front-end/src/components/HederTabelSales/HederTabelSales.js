import styles from './HederTabelSales.module.css';

function HederTabelSales() {
  return (
    <div className={ styles.header_tabel_sales }>
      <div>Item</div>
      <div>Descrição</div>
      <div>Qtd.</div>
      <div>Val. UN</div>
      <div>Sub-total</div>
    </div>
  );
}

export default HederTabelSales;
