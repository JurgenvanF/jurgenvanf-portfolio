import "./CardHeader.scss";
import { MapPin, Calendar } from "lucide-react";

const CardHeader = ({ color, title, subtitle, tag, location, date }) => {
  const ALLOWED_COLORS = ["blue", "green"];
  const safeColor = ALLOWED_COLORS.includes(color) ? color : "blue";

  return (
    <div className={`card-header card-header__${safeColor}`}>
      <div className="card-header__main">
        <h2 className="card-header__main__title">{title}</h2>
        <div
          className={`card-header__main__tag card-header__main__tag__${safeColor}`}
        >
          {tag}
        </div>
      </div>
      <div className="card-header__meta">
        <h3 className="card-header__meta__subtitle">{subtitle}</h3>
        <div className="card-header__meta__locdate">
          <div className="card-header__meta__locdate__location">
            <MapPin size={20} />
            {location}
          </div>
          <div className="card-header__meta__locdate__date">
            <Calendar size={20} />
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
