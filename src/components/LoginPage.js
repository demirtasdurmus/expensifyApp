import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className= "box-layout__title">Expensify</h1>
            <p>Time to get your expenses under control!</p>
            <button
                className="button"
                onClick={startLogin}
            >
            Login with Google
            </button>
        </div>
    </div>
);

const MapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, MapDispatchToProps)(LoginPage);