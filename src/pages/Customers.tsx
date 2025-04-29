
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import CustomersContent from '../components/customers/CustomersContent';
import { toast } from 'sonner';

const Customers = () => {
  useEffect(() => {
    // Show a welcome toast when the page loads
    toast.success("Customers loaded successfully!", {
      description: "Viewing all customers"
    });
  }, []);

  return (
    <Layout>
      <CustomersContent />
    </Layout>
  );
};

export default Customers;
