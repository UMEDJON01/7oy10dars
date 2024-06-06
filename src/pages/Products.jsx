import { Filter, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        allProductsQuery(params)
      );
      const products = response.data.data;
      const meta = response.data.meta;
      return { products, meta, params };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

const Products = () => {
  return (
    <>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
