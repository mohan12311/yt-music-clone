'use client'

import {GridLoader} from "react-spinners";

const ErrorMessage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 my-20">
            <GridLoader color="red" />
            <div className="text-[50px]">oops!</div>
            <div>잠시 후 다시 시도해주세요</div>
        </div>
    )
}

export default ErrorMessage
