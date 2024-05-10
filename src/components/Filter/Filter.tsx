import { ArrowDownIcon, StarIcon } from "../svgs/SvgIcons";

interface FilterTypes {
  title: string,
  data: { title: string }[]
}

const Filter = ({ title, data }: FilterTypes) => {
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
              <input type="checkbox" id={val.title} />
              <label htmlFor={val.title} style={{ textTransform: "capitalize" }}>{val.title}</label>
            </div>
          )
        })
      }
    </>
  )
}

const RatingFilter = ({ title }: { title: string }) => {

  return (
    <>
      <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
        <h4 className="filter-title">{title}</h4>
        <ArrowDownIcon width={16} height={16} />
      </div>

      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating5" />
        <label htmlFor="rating5" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></label>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating4" />
        <label htmlFor="rating4" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon color="#bababa" /></label>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating3" />
        <label htmlFor="rating3" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon /><StarIcon /><StarIcon color="#bababa" /><StarIcon color="#bababa" /></label>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating2" />
        <label htmlFor="rating2" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon /><StarIcon color="#bababa" /><StarIcon color="#bababa" /><StarIcon color="#bababa" /></label>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" id="rating1" />
        <label htmlFor="rating1" style={{ textTransform: "capitalize" }}><StarIcon /><StarIcon color="#bababa" /><StarIcon color="#bababa" /><StarIcon color="#bababa" /><StarIcon color="#bababa" /></label>
      </div>
    </>
  )
}

export { Filter, RatingFilter }

