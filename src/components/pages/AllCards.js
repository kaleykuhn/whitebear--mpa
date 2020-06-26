import React from "react";
import Edit from "../../icons/edit.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function AllCards() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         <div className="row">
            <div className="col-8 col-sm-8 mb-4">
               <input
                  type="search"
                  className="form-control border ml-4"
                  placeholder="Search for a word"
               />
            </div>
            <div className="col-4 col-sm-4 mb-4">
               <button className="btn btn-secondary float-right">search</button>
            </div>
         </div>
         <div className="row">
            <div className="col-4 col-sm-4 mb-4">
               <p className="text-brand text-muted ml-4">Sort by cards</p>
            </div>
            <div className="form-group col-8 col-sm-8 mb-6 mt-0 col-auto">
               <select className="form-control border rounded-sm">
                  <option>Most Recent</option>
                  <option>Oldest</option>
                  <option>Hardest</option>
                  <option>Easiest</option>
               </select>
            </div>
         </div>
         <div className="row">
            <div className="col-9 mb-5">
               <div className="card bg-primary">
                  <div className="card-body">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed and divided by arches into stiff sections. The
                     bedding was hardly.
                  </div>
               </div>

               <div className="card bg-secondary">
                  <div className="card-body">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed and divided by arches into stiff sections. The
                     bedding was hardly.
                  </div>
               </div>
            </div>
            <div className="col-3">
               <Link to="/edit" className="btn btn-link d-inline">
                  <img
                     src={Edit}
                     width="20px;"
                     alt="edit"
                     style={{ marginBottom: "3px" }}
                     className="mr-2"
                  />{" "}
                  Edit
               </Link>
            </div>
            <div className="row ml-0 mr-0 mt-8">
               <div className="col-9">
                  <div className="card bg-primary">
                     <div className="card-body py-0">
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                     </div>
                  </div>
               </div>
               <div className="col-3 float-right">
                  <Link to="/edit" className="btn btn-link d-inline">
                     <img
                        src={Edit}
                        width="20px;"
                        alt="edit"
                        style={{ marginBottom: "3px" }}
                        className="mr-2"
                     />{" "}
                     Edit
                  </Link>
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
