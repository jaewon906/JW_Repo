import React, { useState } from "react";

function CheckboxGroup() {
  const [checkedItems, setCheckedItems] = useState({}); // 체크박스 상태를 관리할 state

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCheckAll = () => {
    const updatedCheckedItems = Object.keys(checkedItems).reduce(
      (obj, key) => {
        obj[key] = true;
        return obj;
      },
      {}
    );
    setCheckedItems(updatedCheckedItems);
  };

  const handleUncheckAll = () => {
    const updatedCheckedItems = Object.keys(checkedItems).reduce(
      (obj, key) => {
        obj[key] = false;
        return obj;
      },
      {}
    );
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={Object.values(checkedItems).every(Boolean)} // 모든 체크박스가 선택되었는지 확인
          onChange={Object.values(checkedItems).every(Boolean) ? handleUncheckAll : handleCheckAll} // 모든 체크박스가 선택되었는지에 따라 handleCheckAll 또는 handleUncheckAll 호출
        />
        전체 선택
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="item1"
          checked={checkedItems.item1 || false}
          onChange={handleChange}
        />
        항목 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="item2"
          checked={checkedItems.item2 || false}
          onChange={handleChange}
        />
        항목 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="item3"
          checked={checkedItems.item3 || false}
          onChange={handleChange}
        />
        항목 3
      </label>
      <br />
    </div>
  );
}

export default CheckboxGroup;