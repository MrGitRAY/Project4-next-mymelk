import React from "react";
import Home from "@/components/modules/Home";
import db from "./../../../data/db.json";

function Homes() {
  console.log(db);
  
  return (
    <div class="homes">
      {db.homes.slice(0,6).map(home => (
        <Home {...home} key={home.id} />
      ))}
    </div>
  );
}

export default Homes;
