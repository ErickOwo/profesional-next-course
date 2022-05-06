const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    addProduct: `${API}/api/${VERSION}/products/`,
    getProduct: id => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    updateProduct: id => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: id => `${API}/api/${VERSION}/products/${id}`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories/`,
    addCategory: `${API}/api/${VERSION}/categories/`,
    getProduct: id => `${API}/api/${VERSION}/categories/${id}`,
    getCategoryItems: id => `${API}/api/${VERSION}/categories/${id}/products/`,
    updateCategory: id => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload/`,
  },
};

export default endPoints;