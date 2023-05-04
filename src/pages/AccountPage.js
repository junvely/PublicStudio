import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "redux/components/common/Footer";
import { StoutCon } from "styles/Components";
import { StDetailCon, StPositionSec } from "styles/GlobalStyles";

function AccountPage() {
  return (
    <>
      <StPositionSec position={true}>
        <StoutCon>
          <StDetailCon>
            <Outlet />
          </StDetailCon>
        </StoutCon>
      </StPositionSec>
      <Footer isActive={false}></Footer>
    </>
  );
}

export default AccountPage;
