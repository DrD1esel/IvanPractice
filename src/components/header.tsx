import {FC, ReactElement} from "react";

const Header: FC = (): ReactElement => {

    return (
        <div>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                width='48'
                height='40'
            />
            <h2>IvanPractice</h2>
        </div>
    );
};

export default Header;
