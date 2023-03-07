import {
  CalendarToday,
  LocationOn,
  MoreHorizRounded,
} from "@mui/icons-material";

const CommunityEvent = () => {
  return (
    <div className="event-container">
      <div className="event-item">
        <div className="event-header">
          <span className="event-type">Upcoming Event</span>
          <span className="event-icon">
            <MoreHorizRounded />
          </span>
        </div>

        <div className="event-content-container">
          <div className="event-content-left">
            <h3>Instructor Meet-up</h3>
            <p>You can meet up with your favourite Instructor and chat</p>
          </div>
          <div className="event-content-right">
            <div className="date-item">
              <div className="date">03</div>
              <div className="day">mon</div>
            </div>
          </div>
        </div>

        <div className="event-details">
          <div className="event-details-title">Details</div>
          <div className="event-details-items">
            <div className="event-details-item">
              <div className="event-icon">
                <CalendarToday /> Date:
              </div>
              <div className="event-icon">
                <LocationOn /> Location:
              </div>
            </div>
            <div className="event-details-info">
              <div className="event-info">12 Sept 2022</div>
              <div className="event-info">South Africa</div>
            </div>
          </div>
        </div>

        <button className="btn">Book</button>
      </div>
      <div className="event-item">
        <div className="event-header">
          <span className="event-type">Upcoming Event</span>
          <span className="event-icon">
            <MoreHorizRounded />
          </span>
        </div>

        <div className="event-content-container">
          <div className="event-content-left">
            <h3>Instructor Meet-up</h3>
            <p>You can meet up with your favourite Instructor and chat</p>
          </div>
          <div className="event-content-right">
            <div className="date-item">
              <div className="date">03</div>
              <div className="day">mon</div>
            </div>
          </div>
        </div>

        <div className="event-details">
          <div className="event-details-title">Details</div>
          <div className="event-details-items">
            <div className="event-details-item">
              <div className="event-icon">
                <CalendarToday /> Date:
              </div>
              <div className="event-icon">
                <LocationOn /> Location:
              </div>
            </div>
            <div className="event-details-info">
              <div className="event-info">12 Sept 2022</div>
              <div className="event-info">South Africa</div>
            </div>
          </div>
        </div>

        <button className="btn">Book</button>
      </div>
      <div className="event-item">
        <div className="event-header">
          <span className="event-type">Upcoming Event</span>
          <span className="event-icon">
            <MoreHorizRounded />
          </span>
        </div>

        <div className="event-content-container">
          <div className="event-content-left">
            <h3>Instructor Meet-up</h3>
            <p>You can meet up with your favourite Instructor and chat</p>
          </div>
          <div className="event-content-right">
            <div className="date-item">
              <div className="date">03</div>
              <div className="day">mon</div>
            </div>
          </div>
        </div>

        <div className="event-details">
          <div className="event-details-title">Details</div>
          <div className="event-details-items">
            <div className="event-details-item">
              <div className="event-icon">
                <CalendarToday /> Date:
              </div>
              <div className="event-icon">
                <LocationOn /> Location:
              </div>
            </div>
            <div className="event-details-info">
              <div className="event-info">12 Sept 2022</div>
              <div className="event-info">South Africa</div>
            </div>
          </div>
        </div>

        <button className="btn">Book</button>
      </div>
    </div>
  );
};

export default CommunityEvent;
