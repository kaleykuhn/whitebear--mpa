import React from "react";

import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";
import orderBy from "lodash/orderBy";

export default class Allcards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: '[["createdAt"], ["desc"]]',
         memoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
      };

      /*
      Easy
      orderBy([totalSuccesfulAttempts, createdAt], [desc, desc])
      


      Hard 
      orderBy ([totalSuccessfulAttempts, createdAt]), [asc, asc])


      MOST RECENT
      orderBy(createdAt, desc)
     
     
      OLDEST
      orderBy(createdAt,asc)

      */
   }
   setMemoryCardsOrder(e) {
      console.log("new change made");
      const newOrder = e.target.value;
      console.log(newOrder); //"['totalSuccesfuleAttempts','createdAt'], ['desc', 'desc']"
      const copyofMemoryCards = [...this.state.memoryCards];
      const toJson = JSON.parse(newOrder);
      console.log(...toJson);
      const orderedMemoryCards = orderBy(copyofMemoryCards, ...toJson);

      this.setState({ order: newOrder, memoryCards: orderedMemoryCards });
   }
   render() {
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
                  <button className="btn btn-secondary float-right">
                     search
                  </button>
               </div>
            </div>
            <div className="row">
               <div className="col-4 col-sm-4 mb-4">
                  <p className="text-brand text-muted ml-4">Sort by cards</p>
               </div>
               <div className="form-group col-8 col-sm-8 mb-6 mt-0 col-auto">
                  <select
                     value={this.state.order}
                     className="form-control form-control-sm border rounded-sm"
                     onChange={(e) => this.setMemoryCardsOrder(e)}
                  >
                     <option value='[["createdAt"], ["desc"]]'>
                        Most Recent
                     </option>
                     <option value='[["createdAt"], ["asc"]]'>Oldest</option>
                     <option value='[["totalSuccessfulAttempts","createdAt"],["asc", "asc"]]'>
                        Hardest
                     </option>
                     <option value='[["totalSuccesfuleAttempts","createdAt"], ["desc", "desc"]]'>
                        Easiest
                     </option>
                  </select>
               </div>
            </div>
            {this.state.memoryCards.map((memoryCard) => {
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
}
