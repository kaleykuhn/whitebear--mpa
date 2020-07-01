import React from "react";

import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";

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
         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
      </AppTemplate>
   );
}
