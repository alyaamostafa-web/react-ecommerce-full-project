import React from "react";
import { Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";

import DeleteBrandHook from "./../../hook/brand/delete-brand-hook";

const AdminBrandCard = ({ index, img, title, id }) => {
  const [handelDelete, showDelete, handleClose, handleShow] =
    DeleteBrandHook(id);
  return (
    <>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف للتصنيف</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <tr>
        {/* <th>{index + 1}</th> */}
        <th>{title}</th>
        <th>
          {" "}
          <img alt="zcv" src={img} width={"50px"} height={"50px"} />
        </th>
        <th>
          <img
            src={deleteicon}
            onClick={handleShow}
            width="20px"
            height="20px"
            style={{ cursor: "pointer" }}
            alt="delete"
          />

          <img
            src={editicon}
            // onClick={handleShowEdit}
            width="20px"
            height="20px"
            style={{ cursor: "pointer", marginRight: "10px" }}
            alt="update"
          />
        </th>
      </tr>
      {/* <div class="d-flex justify-content-center px-2 row">
        <div class=" d-flex justify-content-between col">
          <div class=" item-delete-edit" onClick={handleShow}>
            ازاله
          </div>
          <a
            href="/admin/editproduct/637d2e5b3e15fd3a78aaccee"
            style="text-decoration: none;">
          <div class=" item-delete-edit">تعديل</div>
          </a>
        </div>
      </div> */}
      {/* <div className="categoty-card-admin mb-3 ">
        <div className="categoty-card "></div>

        <img alt="zcv" src={img} className="img-fluid" />
        <p className="categoty-card-text my-2">{title}</p>
      </div> */}
    </>
  );
};

export default AdminBrandCard;
