(async function () {
  const data = await fetch("empData.json");
  const res = await data.json();
  let employeesData = res;
  const employees_Title = document.getElementById("employees_Title");
  const emp_Details_Container = document.getElementById(
    "emp_Details_Container"
  );
  const editOuterContainer = document.getElementById("editOuterContainer");
  const addNewEmpBtn = document.getElementById("addNewEmpBtn");
  const addNewEmpOuterContainer = document.getElementById(
    "addNewEmpOuterContainer"
  );

  //  Add New Employee
  addNewEmpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addNewEmpOuterContainer.classList.add("addNewEmpSectionContainer");
    addNewEmpOuterContainer.innerHTML = `
       <div class="addNewEmpSection">
      <div class="addNewEmpHeadingContainer">
        <span>XYZ Solutions Pvt. Ltd.</span>
      </div>
      <form class="inner_newEmp_Container" autocomplete="off" id="newEmpForm">
        <div class="w-full flex gap-3">
          <div class="flex items-center justify-center gap-3">
            <label for="name" class="bold">Name:</label>
            <input type="text" name="name" id="name"  class="addNewEmpInput" required placeholder="Enter your Full Name"/>
          </div>
          <div class="flex items-center justify-center gap-3">
            <label for="dob" class="bold">DOB:</label>
            <input type="text" name="dob" id="dob"  class="addNewEmpInput" required placeholder="Data of Birth (dd/mm/yyyy)"/>
          </div>
        </div>
        <div class="w-full flex justify-between">
          <div class="flex items-center justify-center gap-3">
            <label for="designation" class="bold">Designation:</label>
            <input type="text" name="designation" id="designation"  class="addNewEmpInput" required placeholder="Manager"/>
          </div>
          <div class="flex items-center justify-center gap-3">
            <label for="phone" class="bold">Phone:</label>
            <input type="text" name="phone" id="phone"  class="addNewEmpInput" required placeholder="9874563218"/>
          </div>
          <div class="flex items-center justify-center gap-3">
            <label for="email" class="bold">Email:</label>
            <input type="email" name="email" id="email" class="addNewEmpInput" required placeholder="example@gmail.com"/>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <label for="address" class="bold">Address:</label>
          <input type="text" name="address" id="address"class="addNewEmpInput" required placeholder="xyz city street xx"/>
        </div>
        <div class="flex items-center justify-end gap-3">
          <button id="addNewEmpBtn" type="submit">Add</button>
          <button id="closeAddNewEmpDiv" type="button">Close</button>
        </div>
        </form>
          </div>
    `;
    const newEmpForm = document.getElementById("newEmpForm");
    newEmpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let formData = new FormData(newEmpForm);
      const generateRandomId = () => {
        return (
          Math.random().toString(36).substring(2, 5) +
          Math.random().toString(36).substring(2, 5)
        );
      };
      let newEmpId = generateRandomId();
      formData.append("id", newEmpId);
      let newEmpData = {};
      formData.forEach((value, key) => {
        newEmpData[key] = value;
      });
      employeesData.push(newEmpData);
      displayEmpDetails(employeesData);
      renderEmployeeDetails(newEmpData);
      addNewEmpOuterContainer.classList.remove("addNewEmpSectionContainer");
    });

    let closeAddNewEmpDiv = document.getElementById("closeAddNewEmpDiv");
    closeAddNewEmpDiv.addEventListener("click", () => {
      addNewEmpOuterContainer.classList.remove("addNewEmpSectionContainer");
    });
  });

  // Employee Expended details (All Details of Employee):
  const renderEmployeeDetails = (currentEmployee) => {
    const { id, name, dob, designation, phone, email, address } =
      currentEmployee;
    emp_Details_Container.innerHTML = `
      <span class="companyHeading">XYZ Solutions Pvt. Ltd.</span>
      <div class="w-full flex justify-between">
        <div class="flex justify-center gap-3 emp_Details">
          <span class="bold">Employee Id:</span>
          <p>${id}</p>
        </div>
        <div class="flex justify-center gap-3 emp_Details">
          <span class="bold">DOB:</span>
          <p>${dob}</p>
        </div>
      </div>
      <div class="w-full flex justify-between">
        <div class="flex justify-center gap-3 emp_Details">
          <span class="bold">Name:</span>
          <p>${name}</p>
        </div>
      </div>
      <div class="w-full flex justify-between">
        <div class="flex justify-center gap-3 emp_Details">
          <span class="bold">Phone:</span>
          <p>${phone}</p>
        </div>
        <div class="flex justify-center gap-3 emp_Details">
          <span class="bold">Email:</span>
          <p>${email}</p>
        </div>
      </div>
      <div class="w-full flex justify-between">
        <div class="flex justify-center gap-3 emp_Details">
          <span class="bold">Designation:</span>
          <p>${designation}</p>
        </div>
      </div>
      <div class="w-full flex justify-between">
        <div class="flex justify-center gap-3 emp_Details">
          <span class="bold">Address:</span>
          <p>${address}</p>
        </div>
      </div>`;
  };

  const renderEditEmployeeDisplay = (employee, index) => {
    const { id, name, dob, designation, phone, email, address } = employee;
    editOuterContainer.classList.add("editSectionContainer");
    editOuterContainer.innerHTML = `
       <div class="editSection">
      <div class="editHeadingContainer">
        <span>XYZ Solutions Pvt. Ltd.</span>
      </div>
      <form class="inner_edit_Container" autocomplete="off" id="editForm">
        <div class="w-full flex justify-between">
          <div class="flex items-center justify-center gap-3">
            <label for="userId" class="bold">Id:</label>
            <input type="text" name="id" id="userId" value='${id}' class="editInput" title="You can't change ID" readonly />
          </div>
          <div class="flex items-center justify-center gap-3">
            <label for="name" class="bold">Name:</label>
            <input type="text" name="name" id="name" value='${name}' class="editInput" />
          </div>
          <div class="flex items-center justify-center gap-3">
            <label for="dob" class="bold">DOB:</label>
            <input type="text" name="dob" id="dob" value='${dob}' class="editInput" />
          </div>
        </div>
        <div class="w-full flex justify-between">
          <div class="flex items-center justify-center gap-3">
            <label for="designation" class="bold">Designation:</label>
            <input type="text" name="designation" id="designation" value='${designation}' class="editInput" />
          </div>
          <div class="flex items-center justify-center gap-3">
            <label for="phone" class="bold">Phone:</label>
            <input type="text" name="phone" id="phone" value='${phone}' class="editInput" />
          </div>
          <div class="flex items-center justify-center gap-3">
            <label for="email" class="bold">Email:</label>
            <input type="email" name="email" id="email" value='${email}' class="editInput" />
          </div>
        </div>
        <div class="flex items-center gap-3">
          <label for="address" class="bold">Address:</label>
          <input type="text" name="address" id="address" value='${address}' class="editInput" />
        </div>
        <div class="flex items-center justify-end gap-3">
          <button id="doneEditBtn" type="submit">Done</button>
          <button id="closeEditDiv" type="button">Close</button>
        </div>
        </form>
          </div>`;

    let editForm = document.getElementById("editForm");
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let formData = new FormData(editForm);
      let editedData = {};
      formData.forEach((value, key) => {
        editedData[key] = value;
      });
      employeesData[index] = editedData;
      renderEmployeeDetails(editedData);
      displayEmpDetails(employeesData); // Refresh the list of employees
      editOuterContainer.classList.remove("editSectionContainer");
    });

    let closeEditDiv = document.getElementById("closeEditDiv");
    closeEditDiv.addEventListener("click", () => {
      editOuterContainer.classList.remove("editSectionContainer");
    });
  };

  const displayEmpDetails = (employeesData) => {
    employees_Title.innerHTML = ""; // Clear previous entries
    employeesData.forEach((employee, index) => {
      const { id, name } = employee;
      let container = document.createElement("div");
      container.classList.add("single_Employee");
      let displayEmpName = document.createElement("span");
      displayEmpName.setAttribute("id", id);
      displayEmpName.innerHTML = name;
      container.addEventListener("click", () => {
        renderEmployeeDetails(employee);
      });
      let actionsContainer = document.createElement("div");
      actionsContainer.classList.add("btns-Container");
      let editBtn = document.createElement("button");
      editBtn.classList.add("editBtn");
      editBtn.innerHTML = "Edit";
      editBtn.addEventListener("click", (e) => {
        e.preventDefault();
        renderEditEmployeeDisplay(employee, index);
      });
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        employeesData.splice(index, 1); // Remove the employee from the array
        if (employeesData.length > 0) {
          displayEmpDetails(employeesData);
          emp_Details_Container.innerHTML = ""; // Clear the details display
          renderEmployeeDetails(employeesData[0]);
        } else {
          employees_Title.innerHTML = "<span>No Employee Data Available</span>";
          emp_Details_Container.innerHTML =
            "<span>No Employee Data Available</span>";
        }
      });
      actionsContainer.appendChild(editBtn);
      actionsContainer.appendChild(deleteBtn);
      container.appendChild(displayEmpName);
      container.appendChild(actionsContainer);
      employees_Title.appendChild(container);
    });
  };
  if (employeesData.length > 0) {
    displayEmpDetails(employeesData);
    renderEmployeeDetails(employeesData[0]);
  } else {
    employees_Title.innerHTML = "<span>No Employee Data Available</span>";
    emp_Details_Container.innerHTML = "<span>No Employee Data Available</span>";
  }
})();
