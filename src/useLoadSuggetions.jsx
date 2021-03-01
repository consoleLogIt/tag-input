import { useState, useEffect } from "react";

const db = [
  "Child malnutrition",
  "Child media management",
  "Child consultant",
  "Children",
  "Pressing Social",
  "Livestock Management",
  "Poultry and bird cultivation",
  "Water Quality Network",
  "Revitalising Rainfed Agriculture Network",
];

function useLoadSuggetions(query) {
  const [suggetions, setSuggetions] = useState([]);

  useEffect(() => {
   
    if (query === "") {
      setSuggetions([]);
      return;
    }
    const modified = db.filter((item) =>
      item.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
    );
    setSuggetions(modified);
  }, [query]);


  

  return suggetions;
}

export default useLoadSuggetions;
