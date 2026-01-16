import FilterByTitle from "./FilterByTitle";
import "./style.scss";

/**
 * Renders styled container with filtering options.
 *
 */
export default function Filters() {
  return (
    <div className="filters">
      <FilterByTitle />
    </div>
  );
}
