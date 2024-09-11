/* eslint-disable react/no-unescaped-entities */
"use client";

import CustomButton from "@/components/customButton/CustomButton";
import { useState } from "react";
import DatePicker from "react-datepicker"; // You'll need to install this package
import "react-datepicker/dist/react-datepicker.css";
import { IoClose } from "react-icons/io5";

type HireNowProps = {
  initialCost: number;
  close: () => void;
};

const HireNow: React.FC<HireNowProps> = ({ initialCost, close }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [costAgreement, setCostAgreement] = useState<number>(initialCost);

  const timeSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"]; // Predefined time slots for simplicity

  const handleConfirmHire = () => {
    if (!selectedDate || !timeSlot) {
      alert("Please select a date and time before proceeding.");
      return;
    }

    // Logic to handle the hiring process
    alert(
      `Job confirmed on ${selectedDate.toDateString()} at ${timeSlot}. Estimated cost: $${costAgreement}`
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[30%] mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">Hire Now</h2>

        {/* close button */}
        <p
          className="p-1 cursor-pointer underline text-danger"
          onClick={() => close()}
        >
          cancel
        </p>
      </div>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Date
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: any) => setSelectedDate(date)}
          minDate={new Date()}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholderText="Choose a date"
        />
      </div>

      {/* Time Slots */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Time Slot
        </label>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((slot, idx) => (
            <button
              key={idx}
              className={`p-2 rounded-lg border ${
                timeSlot === slot ? "bg-blue-500 text-white" : "border-gray-300"
              }`}
              onClick={() => setTimeSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Cost Agreement */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Cost Agreement
        </label>
        <div className="flex items-center">
          <input
            type="number"
            value={costAgreement}
            onChange={(e) => setCostAgreement(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg mr-2"
            placeholder="Enter the agreed cost"
          />
          <span className="text-gray-500">$</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Original estimated cost: ${initialCost}
        </p>
      </div>

      {/* Confirm Hire */}
      <div className="mt-6">
        <CustomButton
          loading={false}
          title="Confirm and continue"
          onClick={handleConfirmHire}
          className="bg-green-500 text-white w-full py-3 rounded-lg font-semibold"
        />

        <p className="text-sm text-center font-extralight mt-1">
          You won't pay until the checkout page
        </p>
      </div>
    </div>
  );
};

export default HireNow;
