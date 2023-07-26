import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const CreateNewPassword = React.lazy(() => import("pages/CreateNewPassword"));
const Verification = React.lazy(() => import("pages/Verification"));
const CheckEmail = React.lazy(() => import("pages/CheckEmail"));
const ResetPassword = React.lazy(() => import("pages/ResetPassword"));
const Signuppage = React.lazy(() => import("pages/Signuppage"));
const OrderDetails = React.lazy(() => import("pages/OrderDetails"));
const MyOrder = React.lazy(() => import("pages/MyOrder"));
const Emptywishlist = React.lazy(() => import("pages/Emptywishlist"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const AddAddress = React.lazy(() => import("pages/AddAddress"));
const ContactDetails = React.lazy(() => import("pages/ContactDetails"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const CartPage = React.lazy(() => import("pages/CartPage"));
const ProductdetailPage = React.lazy(() => import("pages/ProductdetailPage"));
const SignInPage = React.lazy(() => import("pages/SignInPage"));
const ErrorPage = React.lazy(() => import("pages/ErrorPage"));
const EmptyCart = React.lazy(() => import("pages/EmptyCart"));
const ConfirmedOrder = React.lazy(() => import("pages/ConfirmedOrder"));
const ProductsListpage = React.lazy(() => import("pages/ProductsListpage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/productslistpage" element={<ProductsListpage />} />
          <Route path="/confirmedorder" element={<ConfirmedOrder />} />
          <Route path="/emptycart" element={<EmptyCart />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/productdetailpage" element={<ProductdetailPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contactdetails" element={<ContactDetails />} />
          <Route path="/addaddress" element={<AddAddress />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/emptywishlist" element={<Emptywishlist />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/checkemail" element={<CheckEmail />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/createnewpassword" element={<CreateNewPassword />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
