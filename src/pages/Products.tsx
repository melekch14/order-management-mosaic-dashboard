
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ProductsContent from '../components/products/ProductsContent';
import { toast } from 'sonner';

const Products = () => {
  useEffect(() => {
    // Show a welcome toast when the page loads
    toast.success("Products loaded successfully!", {
      description: "Viewing all products"
    });
  }, []);

  return (
    <Layout>
      <ProductsContent />
    </Layout>
  );
};

export default Products;
