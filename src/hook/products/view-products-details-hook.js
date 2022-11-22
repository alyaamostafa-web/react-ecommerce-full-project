import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../Redux/actions/productsAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../Redux/actions/categoryAction";
import { getOneBrand } from "../../Redux/actions/brandAction";
const ViewProductsDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      await dispatch(getOneProduct(prodID));
    };
    get();
  }, []);

  const oneProducts = useSelector((state) => state.allproducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allproducts.productLike);
  //to show products item
  let item = [];
  try {
    if (oneProducts.data) item = oneProducts.data;
    else item = [];
  } catch (e) {}
  useEffect(() => {
    const get = async () => {
      await dispatch(getOneProduct(prodID));
    };
    get();
  }, [prodID]);
  // if (oneProducts) console.log(oneProducts);

  useEffect(() => {
    if (item.category) dispatch(getOneCategory(item.category));
    if (item.brand) dispatch(getOneBrand(item.brand));
    if (item.category) dispatch(getProductLike(item.category));
  }, [item]);

  //to view images gallery
  let images = [];
  if (item.images)
    images = item.images.map((img) => {
      return { original: img };
    });
  else {
    images = [{ original: `${mobile}` }];
  }

  //to show category item
  let cat = [];
  let brand = [];
  let prod = [];
  try {
    if (oneCategory.data) cat = oneCategory.data;
    else cat = [];

    //to show brand item

    if (oneBrand.data) brand = oneBrand.data;
    else brand = [];

    if (productLike) prod = productLike.data;
    else prod = [];
  } catch (e) {}
  return [item, images, cat, brand, prod];
};

export default ViewProductsDetailsHook;
