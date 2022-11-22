import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAddress } from "../../Redux/actions/userAddressAction";

const ViewAddressesHook = (id) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const get = async () => {
      await dispatch(getAllUserAddress());
    };
    get();
    setLoading(false);
  }, []);
  const res = useSelector((state) => state.userAddressReducer.allAddresses);

  return [res];
};

export default ViewAddressesHook;
