import React from "react";

export default function Navigation() {
   return (
      <div
         className="btn-group d-flex"
         role="navigation"
         aria-label="navigation"
      >
         <a href="create-cue.html" type="button" className="btn btn-secondary ">
            Create new
         </a>

         <a href="review-cue.html" type="button" className="btn btn-secondary">
            Review
         </a>

         <a
            href="all-cards.html"
            type="button"
            className="btn btn-secondary tab-separator"
         >
            All cards
         </a>
      </div>
   );
}
