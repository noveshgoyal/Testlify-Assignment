import React, { useEffect, useRef } from "react";
import "../style/grid.css";

const TrackingGrid = () => {
  const daysInMonth = new Array(31).fill(null).map((_, index) => index + 1);

  const scrollableBodyRef = useRef(null);
  const scrollableHeaderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableHeaderRef.current && scrollableBodyRef.current) {
        scrollableHeaderRef.current.scrollLeft =
          scrollableBodyRef.current.scrollLeft;
      }
    };

    const bodyElement = scrollableBodyRef.current;
    if (bodyElement) {
      bodyElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (bodyElement) {
        bodyElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className="time-tracking-grid">
      <div className="header">
        <div className="fixed-header-cell">Issue</div>
        <div className="fixed-header-cell">Logged Time</div>
        <div className="scrollable-header" ref={scrollableHeaderRef}>
          {daysInMonth.map((day) => (
            <div key={day} className="header-cell">
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="body" ref={scrollableBodyRef}>
        <div className="row">
          <div className="fixed-cell">Issue 1</div>
          <div className="fixed-cell">5h</div>
          <div className="scrollable-row">
            {daysInMonth.map((day) => (
              <div key={day} className="cell"></div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="fixed-cell">Issue 2</div>
          <div className="fixed-cell">3h</div>
          <div className="scrollable-row">
            {daysInMonth.map((day) => (
              <div key={day} className="cell"></div>
            ))}
          </div>
        </div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
};

export default TrackingGrid;
