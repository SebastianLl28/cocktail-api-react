import Categories from "./components/Categories";
import Products from "./components/Products";

const Home = () => {
  return (
    <section className="container mx-auto px-5 py-6">
      <Categories />
      <Products />
    </section>
  );
};

export default Home;
