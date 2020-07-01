import React from "react";
import { Link } from "react-router-dom";
import Edit from "../../icons/edit.svg";

export default function MemoryCard(props) {
   return (
      <div className="row">
         <div className="col-9 mb-5">
            <div className="card bg-primary">
               <div className="card-body">{props.imagery}</div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">{props.answer}</div>
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
      </div>
   );
}
