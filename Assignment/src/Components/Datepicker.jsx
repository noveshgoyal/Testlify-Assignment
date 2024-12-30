import React, { forwardRef, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/datepicker.css";
import {
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subMonths,
  startOfQuarter,
  endOfQuarter,
  subQuarters,
} from "date-fns";

Modal.setAppElement("#root");

const Datepicker = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-input date-ip" onClick={onClick} ref={ref}>
      {value || "12/30/2024"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        fill="#ccc"
        className="calendar-icon"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" />
      </svg>
    </div>
  ));

  const selectCurrentWeek = () => {
    const start = startOfWeek(new Date(), { weekStartsOn: 1 });
    const end = endOfWeek(new Date(), { weekStartsOn: 1 });
    setStartDate(start);
    setEndDate(end);
  };

  const selectLastWeek = () => {
    const start = startOfWeek(addDays(new Date(), -7), { weekStartsOn: 1 });
    const end = endOfWeek(addDays(new Date(), -7), { weekStartsOn: 1 });
    setStartDate(start);
    setEndDate(end);
  };

  const selectCurrentMonth = () => {
    const start = startOfMonth(new Date());
    const end = endOfMonth(new Date());
    setStartDate(start);
    setEndDate(end);
  };

  const selectLastMonth = () => {
    const start = startOfMonth(subMonths(new Date(), 1));
    const end = endOfMonth(subMonths(new Date(), 1));
    setStartDate(start);
    setEndDate(end);
  };

  const selectCurrentQuarter = () => {
    const start = startOfQuarter(new Date());
    const end = endOfQuarter(new Date());
    setStartDate(start);
    setEndDate(end);
  };

  const selectLastQuarter = () => {
    const start = startOfQuarter(subQuarters(new Date(), 1));
    const end = endOfQuarter(subQuarters(new Date(), 1));
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <button onClick={openModal}>Select Date Range</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="modal-container">
          {/* <h2>Select Date Range</h2> */}
          <div className=" date-inner-cont">
            <div className="flex-box" style={{ width: "60%" }}>
              <div className="date-cont">
                <label className="date-label">Start Date:</label>
                <DatePicker
                  open
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  maxDate={endDate}
                  placeholderText="Select start date"
                  customInput={<CustomInput />}
                />
              </div>
              <div className="date-cont">
                <label className="date-label">End Date:</label>
                <DatePicker
                  selected={endDate}
                  open
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="Select end date"
                  customInput={<CustomInput />}
                />
              </div>
            </div>
            <div className="button-group">
              <button className="date-btn" onClick={selectCurrentWeek}>
                Current Week
              </button>
              <button className="date-btn" onClick={selectLastWeek}>
                Last Week
              </button>
              <button className="date-btn" onClick={selectCurrentMonth}>
                Current Month
              </button>
              <button className="date-btn" onClick={selectLastMonth}>
                Last Month
              </button>
              <button className="date-btn" onClick={selectCurrentQuarter}>
                Current Quarter
              </button>
              <button className="date-btn" onClick={selectLastQuarter}>
                Last Quarter
              </button>
            </div>
          </div>
          <div className="date-footer">
            <button className="secondary-btn">Cancel</button>
            <button className="primary-btn">Apply</button>
          </div>
        </div>
        {/* <button onClick={closeModal}>Close</button> */}
      </Modal>
    </div>
  );
};

export default Datepicker;
