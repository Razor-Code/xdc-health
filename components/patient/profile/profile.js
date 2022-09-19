import Sidebar from "../../utils/sidebar";
import CardWithTitle from "../../utils/cardwithtitle";
import { PrimaryBtn } from "../../utils/button";
import { useReducer, useState } from "react";

function Page1() {
    return (

        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3">
                <CardWithTitle title="Basic Info">
                    hello
                </CardWithTitle>
            </div>
            <div className="col-span-2">
                <CardWithTitle title="Vital Stats Recorded">
                    hello
                </CardWithTitle>
            </div>
            <div className="col-span-2">
                <CardWithTitle title="Current Allergies">
                    hello
                </CardWithTitle>
            </div>
            <div className="col-span-2">
                <CardWithTitle title="Current Medications & Suppliments">
                    hello
                </CardWithTitle>
            </div>
        </div>
    )
}

function Page2() {
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-4">
            <div className="col-span-2">
                <CardWithTitle title="Personal Info">
                    hello
                </CardWithTitle>
            </div>
            <div className="col-span-1">
                <CardWithTitle title="My Contact Information">
                    hello
                </CardWithTitle>
            </div>
            <div className="col-span-1">
                <CardWithTitle title="Emergency Contact">
                    hello
                </CardWithTitle>
            </div>
        </div>
    )
}

function PatientProfile() {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className="flex">
            <Sidebar page="profile" />
            <div className="flex-grow p-6">
                {!showMore ? <Page1 /> : <Page2 />}
            </div>
            <div className="fixed bottom-10 right-10">
                <PrimaryBtn onClick={() => setShowMore(prev => !prev)}>
                    {!showMore ? "more" : "less"}
                </PrimaryBtn>
            </div>
        </div>
    )
}

export default PatientProfile;