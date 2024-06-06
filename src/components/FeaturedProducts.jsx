import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = ({ className = "" }) => {
  return (
    <section className={`pt-24 ${className}`}>
      <div className="container mx-auto">
        <SectionTitle text="Featured Products" />
        <ProductsGrid />
      </div>
    </section>
  );
};

export default FeaturedProducts;
