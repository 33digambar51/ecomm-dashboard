import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//const Pagination = ({ showPerPage, onPaginationChange, total }) => {}
const Pagination = (props) => {
    //console.log(props);
    const total = props.total;
    const showPerPage = props.showPerPage;
    const onPaginationChange = props.onPaginationChange;
    console.log("Total Page:", total);

    const [counter, setCounter] = useState(1);
    //Mid link/button of prev and next
    const [numberOfButtons, setNumberOfButtons] = useState(
        [Math.ceil(total / showPerPage)]
    );

    useEffect(() => {
        const value = showPerPage * counter;
        // Show value
        console.log("Start value:", value - showPerPage);
        console.log("End value:", value);

        onPaginationChange(value - showPerPage, value);
    }, [counter]);

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === "next") {
            if (numberOfButtons === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }
        }
    };
    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <Link className="page-link"
                            onClick={() => onButtonClick("prev")}
                        >
                            Previous
                        </Link>
                    </li>
                    {
                        // Not Work:-> new Array(numberOfButtons)
                        new Array(numberOfButtons).fill("").map((el, index) => (
                            <li className={`page-item ${index + 1 === counter ? "active" : null}`}>
                                <Link className="page-link" onClick={() => setCounter(index + 1)} >
                                    {index + 1}
                                </Link>
                            </li>
                        ))
                    }
                    <li class="page-item">
                        <Link className="page-link"
                            onClick={() => onButtonClick("next")}
                        >
                            Next
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
