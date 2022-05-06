import { useRouter } from 'next/router';
import FormProduct from '@containers/FormProduct';
import { useState, useEffect } from 'react';
import axios from 'axios';
import endPoints from '@services/api';

const Edit = () => {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router?.isReady) return;
    const getProduct = async () => {
      const response = await axios(endPoints.products.getProduct(id));
      setProduct(response.data);
    };
    getProduct();
  }, [router?.isReady]);

  return <FormProduct product={product} />;
};

export default Edit;
