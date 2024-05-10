import { ArrowDownIcon, StarIcon } from "../svgs/SvgIcons";

interface FilterTypes {
  title: string,
  data: { title: string }[],
  onSelect: (selectedValue: string) => void;
}

const Filter = ({ title, data, onSelect }: FilterTypes) => {
  return (
    <>
      <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
        <h4 className="filter-title">{title}</h4>
        <ArrowDownIcon width={16} height={16} />
      </div>
      {
        data.map((val, index) => {
          return (
            <div className="" key={index} style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
              <input type="checkbox" id={val.title} onChange={() => onSelect(val.title)} />
              <label htmlFor={val.title} style={{ textTransform: "capitalize" }}>{val.title}</label>
            </div>
          )
        })
      }
    </>
  )
}

const RatingFilter = ({ title, onSelect }: { title: string; onSelect: (selectedValue: number) => void; }) => {

  return (
    <>
      <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
        <h4 className="filter-title">{title}</h4>
        <ArrowDownIcon width={16} height={16} />
      </div>

      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating5" onChange={() => onSelect(5)} />
        <label htmlFor="rating5" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> 5</label>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating4" onChange={() => onSelect(4)} />
        <label htmlFor="rating4" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon color="#bababa" /> 4</label>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating3" onChange={() => onSelect(3)} />
        <label htmlFor="rating3" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon /><StarIcon /><StarIcon color="#bababa" /><StarIcon color="#bababa" /> 3</label>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating2" onChange={() => onSelect(2)} />
        <label htmlFor="rating2" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon /><StarIcon color="#bababa" /><StarIcon color="#bababa" /><StarIcon color="#bababa" /> 2</label>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating1" onChange={() => onSelect(1)} />
        <label htmlFor="rating1" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon color="#bababa" /><StarIcon color="#bababa" /><StarIcon color="#bababa" /><StarIcon color="#bababa" /> 1</label>
      </div>
    </>
  )
}

export { Filter, RatingFilter }

