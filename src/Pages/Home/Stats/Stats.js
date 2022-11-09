import React from "react";
import { FaUsers, FaComments } from "react-icons/fa";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const Stats = () => {
  return (
    <div>
      <h3 className="text-xl text-center mb-2">Our Statistics</h3>
      <div className="mx-auto text-center">
        <div className="stats bg-base-200 shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl"></FaUsers>
            </div>
            <div className="stat-title">Total Clients</div>
            <div className="stat-value">19K</div>
            <div className="stat-desc">oct 1st - nov 9th</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaComments className="text-3xl"></FaComments>
            </div>
            <div className="stat-title">Positive Review</div>
            <div className="stat-value">
              <div className="radial-progress" style={{ "--value": 90 }}>
                <span className="text-lg">90%</span>
              </div>
            </div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <HiOutlineClipboardDocumentCheck className="text-3xl"></HiOutlineClipboardDocumentCheck>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
