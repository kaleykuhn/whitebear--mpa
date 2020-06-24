import React from "react";
import saveIcon from "../../icons/save.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function CreateImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <h4 className="my-4 text-center text-muted">Add memorable imagery</h4>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body">
                  <textarea
                     rows="11"
                     className="d-sm-none"
                     autoFocus={true}
                  ></textarea>
                  <textarea
                     rows="6"
                     className="d-none d-sm-block"
                     autoFocus={true}
                  ></textarea>
               </div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly.
               </div>
            </div>
         </div>

         <p className="float-right mb-5 mt-2">0/240</p>
         <div className="clearfix"></div>
         <button className="btn btn-link" id="create-error">
            Back to answer
         </button>

         <button
            className="btn btn-primary float-right btn-lg"
            id="save-imagery"
         >
            <img
               src={saveIcon}
               width="20px"
               style={{ marginBottom: "3px", marginRight: "4px" }}
               alt=""
            />
            Save
         </button>
      </AppTemplate>
   );
}
