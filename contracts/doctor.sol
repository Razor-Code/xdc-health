// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// TODO: inherit the patient contract
contract doctor {
    // create enum for gender
    struct doctorDetails {
        address doctorId;
        string name;
        string title;
        bool isActive;
        address orgId;
        string[] patients;
    }
    mapping(address => doctorDetails) public doctorList;

    // create a event to notify the doctor when his information changes
    event doctorInfoChanged(
        address indexed doctorId,
        string name,
        string title,
        bool isActive,
        address orgId
    );

    /* a function to declare the doctor details.
     * since, only a admin can add a doctor, doctor cannot add himself
     * the person who makes the transaction is the doctor
     */
    function addDoctor(string memory _name, string memory _title) public {
        doctorList[msg.sender].doctorId = msg.sender;
        doctorList[msg.sender].name = _name;
        doctorList[msg.sender].title = _title;
        doctorList[msg.sender].isActive = true;
        emit doctorInfoChanged(
            msg.sender,
            _name,
            _title,
            true,
            doctorList[msg.sender].orgId
        );
    }

    /* function to update active state of the doctor,
     * only the doctor can update his active state
     */
    function updateActiveState(bool _isActive) public {
        doctorList[msg.sender].isActive = _isActive;

        // emit the event
        emit doctorInfoChanged(
            doctorList[msg.sender].doctorId,
            doctorList[msg.sender].name,
            doctorList[msg.sender].title,
            doctorList[msg.sender].isActive,
            doctorList[msg.sender].orgId
        );
    }

    // add a patient to the doctor's list
    function addPatient(string memory _patient) public {
        doctorList[msg.sender].patients.push(_patient);
        // TODO: update the patient's doctorId
    }

    /* _____________________ getters _____________________ */

    /* a function to get the doctor details */
    function getDoctorDetails(address _doctorId)
        public
        view
        returns (
            address,
            string memory,
            string memory,
            bool
        )
    {
        return (
            doctorList[_doctorId].doctorId,
            doctorList[_doctorId].name,
            doctorList[_doctorId].title,
            doctorList[_doctorId].isActive
        );
    }
}
