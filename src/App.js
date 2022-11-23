import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLogin from "./Components/Uitily/NavbarLogin";
import HomePage from "./Page/Home/HomePage";
import Footer from "./Components/Uitily/Footer";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrand from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllCategoryPage from "./Page/Admin/AdminAllCategoryPage";
import AdminAllBrandsPage from "./Page/Admin/AdminAllBrandsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./Page/User/UserAllAddresPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import AdminEditProductsPage from "./Page/Admin/AdminEditProductsPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import VerifyCodePage from "./Page/Auth/VerifyCodePage";
import AdminAddCouponPage from "./Page/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./Page/Admin/AdminEditCouponPage";
import ProtectedRouteHook from "./hook/auth/protected-route-hook";
import ProtectedRoute from "./Components/Uitily/ProtectedRoute";
import ProducstByCategory from "./Page/Products/ProducstByCategory";
import ProductsByBrand from "./Page/Products/ProductsByBrand";
const App = () => {
  const [isUser, isAdmin, userData] = ProtectedRouteHook();

  return (
    <div className="fonts">
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrand />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/products/category/:id"
            element={<ProducstByCategory />}
          />
          <Route path="/products/brand/:id" element={<ProductsByBrand />} />
          <Route
            path="/user/forget-password"
            element={<ForgetPasswordPage />}
          />
          <Route path="/user/vertify-code" element={<VerifyCodePage />} />
          <Route
            path="/order/paymethoud"
            element={
              <ProtectedRoute auth={isUser}>
                <ChoosePayMethoudPage />
              </ProtectedRoute>
            }
          />

          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route
              path="/admin/allproducts"
              element={<AdminAllProductsPage />}
            />
            <Route
              path="/admin/allcategory"
              element={<AdminAllCategoryPage />}
            />
            <Route path="/admin/allbrands" element={<AdminAllBrandsPage />} />
            <Route
              path="/admin/editproduct/:id"
              element={<AdminEditProductsPage />}
            />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetalisPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/addsubcategory"
              element={<AdminAddSubCategoryPage />}
            />
            <Route
              path="/admin/addproduct"
              element={<AdminAddProductsPage />}
            />
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route
              path="/admin/editcoupon/:id"
              element={<AdminEditCouponPage />}
            />
          </Route>

          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route
              path="/user/favoriteproducts"
              element={<UserFavoriteProductsPage />}
            />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            />
            <Route path="/user/profile" element={<UserProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
