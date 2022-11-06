import React from 'react';
import css from './Product.module.scss';
import FilterNav from '../../components/FilterNav/FilterNav';
import ProductAside from '../../components/Aside/ProductAside';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
function Product() {
  return (
    <div className={css.ProductPage}>
      <Header />
      <FilterNav />
      <ProductAside />
      <Footer />
    </div>
  );
}
export default Product;
