// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract patient {
    // a struct to store medical records
    struct medicalRecord {
        uint256 id;
        string[] tags;
        string[] files;
        string description;
    }

    // a structure for patient details with adhaar number, name, age, dob, phone number, address, list of medical records(which is a struct)
    struct patientDetails {
        string adhaarNumber;
        string name;
        uint256 age;
        string dob;
        string phone;
        string patientAddress;
        medicalRecord[] medicalRecords;
        address[] doctors;
        address[] organisations;
    }

    // a mapping of patient details
    mapping(string => patientDetails) public patientList;

    // a internal function to add a new patient
    function _addPatient(
        string memory _adhaarNumber,
        string memory _name,
        uint256 _age,
        string memory _dob,
        string memory _phone,
        string memory _patientAddress
    ) internal {
        patientList[_adhaarNumber].adhaarNumber = _adhaarNumber;
        patientList[_adhaarNumber].name = _name;
        patientList[_adhaarNumber].age = _age;
        patientList[_adhaarNumber].dob = _dob;
        patientList[_adhaarNumber].phone = _phone;
        patientList[_adhaarNumber].patientAddress = _patientAddress;
    }

    // create a internal function to add medical records
    function _addMedicalRecord(
        string memory _adhaarNumber,
        string[] memory _tags,
        string[] memory _files,
        string memory _description
    ) internal {
        uint256 id = patientList[_adhaarNumber].medicalRecords.length;
        patientList[_adhaarNumber].medicalRecords.push(
            medicalRecord(id, _tags, _files, _description)
        );
    }

    // create  a internal function to add doctors
    function _addDoctor(string memory _adhaarNumber, address _doctor) internal {
        patientList[_adhaarNumber].doctors.push(_doctor);
    }

    // create a internal function to add organisations
    function _addOrganisation(
        string memory _adhaarNumber,
        address _organisation
    ) internal {
        patientList[_adhaarNumber].organisations.push(_organisation);
    }

    /*_______________ getters _______________*/

    // function to get patient details
    function getPatientDetails(string memory _adhaarNumber)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory,
            string memory
        )
    {
        return (
            patientList[_adhaarNumber].adhaarNumber,
            patientList[_adhaarNumber].name,
            patientList[_adhaarNumber].age,
            patientList[_adhaarNumber].dob,
            patientList[_adhaarNumber].phone,
            patientList[_adhaarNumber].patientAddress
        );
    }

    // function to get medical records
    function getMedicalRecords(string memory _adhaarNumber)
        public
        view
        returns (medicalRecord[] memory)
    {
        return patientList[_adhaarNumber].medicalRecords;
    }
}
