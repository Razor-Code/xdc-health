// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// TODO: inherit the doctor contract
contract organisation {
    /* organisation details with unique id, name, description, admin, list of doctors, list of patients */
    struct orgDetails {
        address orgId;
        string name;
        string description;
        string website;
        address admin;
        address[] doctors;
        string[] patients;
    }

    /* creating a mapping of orgDetails */
    mapping(address => orgDetails) public orgList;

    /* a function to add a new organisation
     * by default the admin is the creator of the organisation
     */
    function addOrg(
        address _orgId,
        string memory _name,
        string memory _description,
        string memory _website
    ) public {
        orgList[_orgId].orgId = _orgId;
        orgList[_orgId].name = _name;
        orgList[_orgId].description = _description;
        orgList[_orgId].website = _website;
        orgList[_orgId].admin = msg.sender;
    }

    /* a function to add a new doctor to the organisation
     * only the admin can add a new doctor
     */
    function addDoctor(address _orgId, address _doctor) public {
        require(
            msg.sender == orgList[_orgId].admin,
            "Only the admin can add a new doctor"
        );
        orgList[_orgId].doctors.push(_doctor);

        // TODO: update the doctor's orgId
    }

    /* a function to add a new patient to the organisation
     * only doctors can add a new patient
     */
    function addPatient(address _orgId, string memory _patient) public {
        require(
            isDoctor(_orgId, msg.sender),
            "Only doctors can add a new patient"
        );
        orgList[_orgId].patients.push(_patient);

        // TODO: update the patient's orgId
    }

    /* a function to check if the user is a doctor */
    function isDoctor(address _orgId, address _user)
        public
        view
        returns (bool)
    {
        for (uint256 i = 0; i < orgList[_orgId].doctors.length; i++) {
            if (orgList[_orgId].doctors[i] == _user) {
                return true;
            }
        }
        return false;
    }

    /* make a doctor admin
     * only the admin can make a doctor admin
     */
    function makeDoctorAdmin(address _orgId, address _doctor) public {
        require(
            msg.sender == orgList[_orgId].admin,
            "Only the admin can make a doctor admin"
        );
        require(
            isDoctor(_orgId, _doctor),
            "The user is not a doctor of this organisation"
        );
        orgList[_orgId].admin = _doctor;
    }

    /* ____________________________ getters ____________________________ */

    /* get organisation details */
    function getOrgDetails(address _orgId)
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            address,
            address[] memory,
            string[] memory
        )
    {
        return (
            orgList[_orgId].orgId,
            orgList[_orgId].name,
            orgList[_orgId].description,
            orgList[_orgId].website,
            orgList[_orgId].admin,
            orgList[_orgId].doctors,
            orgList[_orgId].patients
        );
    }
}
