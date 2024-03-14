import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATHS } from "./paths";

// Pages
import { Contact, Login } from "../pages";
import { SignUp } from "../pages/SignUp";
import { ContactAdd } from "../pages/ContactAdd";
// import { ContactAdd } from "../pages/ContactAdd";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.login} element={<Login />} />
        <Route path={PATHS.signUp} element={<SignUp />} />
        <Route path={PATHS.contacts} element={<Contact />} />
        <Route path={PATHS.contactsAdd} element={<ContactAdd />} />
        <Route path={PATHS.contactsEdit} element={<ContactAdd isEdit />} />
              

        {/* <Route path={PATHS.details} element={<ContactDetail />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export { Router };

//delete
//edit
//ajuste telefone