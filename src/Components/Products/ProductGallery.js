import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "./../../hook/products/view-products-details-hook";
const ProductGallery = () => {
  const { id } = useParams();
  const [item, images] = ViewProductsDetailsHook(id);

  //   const images = [
  //     {
  //       original: `${mobile}`,
  //     },
  //     {
  //       original: `${mobile}`,
  //     },
  //     {
  //       original: `${mobile}`,
  //     },
  //   ];
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
