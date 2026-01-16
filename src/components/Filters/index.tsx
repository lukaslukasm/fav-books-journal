import FilterByTitle from "./FilterByTitle";
import "./style.scss";

export default function Filters() {
  // let's imagine this would be designed to effortlessly accomodate other filters
  // without breaking the UI
  return (
    <div className="filters">
      <FilterByTitle />
    </div>
  );
}
