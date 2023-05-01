import React from "react";
import Button from "redux/components/common/Button";
import Footer from "redux/components/common/Footer";
import { StButtonCon, StModifyCon } from "styles/Components";
import { StDetailCon, StFlexCenter, StPositionSec } from "styles/GlobalStyles";

function FormPage() {
  return (
    <>
      <StPositionSec>
        <StFlexCenter>
          <StDetailCon>
            <StModifyCon>
              <div>
                <span> Image URL : </span>
                <input></input>
              </div>
              <div>
                <span> Title : </span>
                <input></input>
              </div>
              <span> Contents : </span>
              <div>
                <textarea
                  cols="50"
                  rows="5"
                  // value={contents}
                  // onChange={(e) => {
                  //   setContents(e.target.value);
                  // }}
                  placeholder="내용을 입력해 주세요."
                ></textarea>
              </div>
            </StModifyCon>
            <StButtonCon>
              <Button width="40%">Posting</Button>
            </StButtonCon>
          </StDetailCon>
        </StFlexCenter>
      </StPositionSec>
      <Footer isActive={true}></Footer>
    </>
  );
}

export default FormPage;
