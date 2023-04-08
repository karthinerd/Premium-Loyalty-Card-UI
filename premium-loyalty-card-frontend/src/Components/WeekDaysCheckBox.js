import React, { useState } from "react";

const WeekdayCheckboxes = ({ onChange }) => {
  const [checkedDays, setCheckedDays] = useState([]);

  const handleCheckboxChange = (e) => {
    const day = e.target.value;
    const isChecked = e.target.checked;
    let newCheckedDays = [...checkedDays];
    if (isChecked) {
      newCheckedDays.push(day);
    } else {
      newCheckedDays = newCheckedDays.filter((d) => d !== day);
    }
    setCheckedDays(newCheckedDays);
    onChange(newCheckedDays);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="monday"
          checked={checkedDays.includes("monday")}
          onChange={handleCheckboxChange}
        />
        Monday
      </label>
      <label>
        <input
          type="checkbox"
          value="tuesday"
          checked={checkedDays.includes("tuesday")}
          onChange={handleCheckboxChange}
        />
        Tuesday
      </label>
      <label>
        <input
          type="checkbox"
          value="wednesday"
          checked={checkedDays.includes("wednesday")}
          onChange={handleCheckboxChange}
        />
        Wednesday
      </label>
      <label>
        <input
          type="checkbox"
          value="thursday"
          checked={checkedDays.includes("thursday")}
          onChange={handleCheckboxChange}
        />
        Thursday
      </label>
      <label>
        <input
          type="checkbox"
          value="friday"
          checked={checkedDays.includes("friday")}
          onChange={handleCheckboxChange}
        />
        Friday
      </label>
      <label>
        <input
          type="checkbox"
          value="saturday"
          checked={checkedDays.includes("saturday")}
          onChange={handleCheckboxChange}
        />
        Saturday
      </label>
      <label>
        <input
          type="checkbox"
          value="sunday"
          checked={checkedDays.includes("sunday")}
          onChange={handleCheckboxChange}
        />
        Sunday
      </label>
    </div>
  );
};

export default WeekdayCheckboxes;
